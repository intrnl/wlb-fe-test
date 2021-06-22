import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'urql';

import { useAuthContext } from '../auth/AuthContext';

import { PostDetailsQuery } from '../queries/PostDetails';
import { PostEditMutation } from '../queries/PostEdit';
import type { PostDetailsResult, PostDetailsVariables } from '../queries/PostDetails';
import type { PostEditVariables } from '../queries/PostEdit';


import { PostDetailsFallback } from '../components/PostDetails';
import { PostAuthoring } from '../components/PostAuthoring';
import type { PostAuthoringSubmitHandler } from '../components/PostAuthoring';


/// <PostEditPage />
export function PostEditPage () {
	let { id }: PostEditParams = useParams() as any;

	return (
		<React.Fragment>
			<React.Suspense fallback={<PostDetailsFallback />}>
				<PostEditView id={id} />
			</React.Suspense>
		</React.Fragment>
	);
}

interface PostEditParams {
	id: string;
}


/// <PostEditView />
function PostEditView (props: PostEditViewProps) {
	let { id } = props;

	/// Queries/Mutation
	let [result] = useQuery<PostDetailsResult, PostDetailsVariables>({
		query: PostDetailsQuery,
		variables: { id },
	});

	let [, updatePost] = useMutation<{}, PostEditVariables>(PostEditMutation);

	/// Navigation, auth handling
	let navigate = useNavigate();
	let [auth] = useAuthContext();

	/// Form handling
	let [disabled, setDisabled] = React.useState(false);
	let [submitted, setSubmitted] = React.useState(false);

	let handlePostSubmit: PostAuthoringSubmitHandler = (data) => {
		setDisabled(true);

		let { id, title, body } = data;

		updatePost({ id: id!, data: { title, body } })
			.catch((err) => {
				alert('Error caught, see console');
				console.log('Failed to update post');
				console.error(err);
			})
			.finally(() => {
				setSubmitted(true);
			});
	};

	/// Effects handling

	React.useEffect(() => {
		if (submitted) {
			navigate(`/post/${id}`);
		}
		else if (result.data!.post.id && result.data!.post.user.id !== auth.id) {
			navigate('/', { replace: true });
		}
	}, [submitted, result.data, auth.id]);


	return (
		result.data!.post.id ? (
			<PostAuthoring
				disabled={disabled}
				data={result.data!.post}
				onSubmit={handlePostSubmit}
			/>
		) : (
			<div>
				404. Post not found.
			</div>
		)
	);
}

interface PostEditViewProps extends PostEditParams {}
