import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from 'urql';

import { useAuthContext } from '../auth/AuthContext';

import { PostDetailsQuery } from '../queries/PostDetails';
import { PostDeleteMutation } from '../queries/PostDelete';
import type { PostDetailsResult, PostDetailsVariables } from '../queries/PostDetails';
import type { PostDeleteResult, PostDeleteVariables } from '../queries/PostDelete';

import { PostDetails, PostDetailsFallback } from '../components/PostDetails';


/// <PostDetailsPage />
export function PostDetailsPage () {
	let { id }: PostDetailsParams = useParams() as any;

	return (
		<React.Fragment>
			<React.Suspense fallback={<PostDetailsFallback />}>
				<PostDetailsView id={id} />
			</React.Suspense>
		</React.Fragment>
	);
}

interface PostDetailsParams {
	id: string;
}


/// <PostDetailsView />
function PostDetailsView (props: PostDetailsViewProps) {
	let { id } = props;


	let [result] = useQuery<PostDetailsResult, PostDetailsVariables>({
		query: PostDetailsQuery,
		variables: { id },
	});

	let [, deletePost] = useMutation<PostDeleteResult, PostDeleteVariables>(PostDeleteMutation);

	let navigate = useNavigate();
	let [auth] = useAuthContext();

	let handlePostDelete = () => {
		if (confirm('Delete this post?')) {
			deletePost({ id })
				.then(() => {
					navigate('/', { replace: true });
				})
				.catch((err) => {
					alert('Error caught, see console');
					console.log('Failed to delete post');
					console.error(err);
				});
		}
	};

	return (
		result.data!.post.id ? (
			<PostDetails
				data={result.data!}
				editable={auth.id === result.data!.post.user.id}
				onDelete={handlePostDelete}
			/>
		) : (
			<div>404. Post not found.</div>
		)
	);
}

interface PostDetailsViewProps extends PostDetailsParams {}
