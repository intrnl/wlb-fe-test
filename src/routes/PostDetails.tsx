import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';

import { useAuthContext } from '../auth/AuthContext';

import { PostDetailsQuery } from '../queries/PostDetails';
import type { PostDetailsResult, PostDetailsVariables } from '../queries/PostDetails';

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

	let [auth] = useAuthContext();

	return (
		result.data!.post.id ? (
			<PostDetails
				data={result.data!}
				editable={auth.id === result.data!.post.user.id}
			/>
		) : (
			<div>404. Post not found.</div>
		)
	);
}

interface PostDetailsViewProps extends PostDetailsParams {}
