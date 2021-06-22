import React from 'react';
import { useQuery } from 'urql';

import { PostListQuery } from '../queries/PostList';
import type { PostListData, PostListVariables } from '../queries/PostList';

import { PostList, PostListFallback } from '../components/PostList';


export function IndexPage () {
	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Recent Posts
			</h2>
			<React.Suspense fallback={<PostListFallback />}>
				<RecentPosts />
			</React.Suspense>
		</React.Fragment>
	);
}

function RecentPosts () {
	let [result] = useQuery<PostListData, PostListVariables>({
		query: PostListQuery,
		variables: {
			page: 1,
			limit: 10,
		},
	});

	return (
		result.data ? (
			<PostList data={result.data} />
		) : (
			<div className='mt-2'>
				No recent posts.
			</div>
		)
	);
}
