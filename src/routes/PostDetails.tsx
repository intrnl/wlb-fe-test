import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';

import { PostDetailsQuery } from '../queries/PostDetails';
import type { PostDetailsData, PostDetailsVariables } from '../queries/PostDetails';

import { PostDetails, PostDetailsFallback } from '../components/PostDetails';


/// <PostDetailsPage />
export function PostDetailsPage () {
	let { id }: PostDetailsParam = useParams() as any;

	return (
		<React.Fragment>
			<React.Suspense fallback={<PostDetailsFallback />}>
				<PostDetailsView id={id} />
			</React.Suspense>
		</React.Fragment>
	);
}

interface PostDetailsParam {
	id: string;
}


/// <PostDetailsView />
function PostDetailsView (props: PostDetailsViewProps) {
	let { id } = props;

	let [result] = useQuery<PostDetailsData, PostDetailsVariables>({
		query: PostDetailsQuery,
		variables: { id },
	});

	return (
		result.data ? (
			<PostDetails data={result.data} />
		) : (
			<div>404. No post found.</div>
		)
	);
}

interface PostDetailsViewProps extends PostDetailsVariables {}
