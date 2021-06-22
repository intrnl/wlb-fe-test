import React from 'react';
import { useQuery } from 'urql';

import { PostListQuery } from '../queries/PostList';
import type { PostListResult, PostListVariables } from '../queries/PostList';

import { PostList, PostListFallback } from '../components/PostList';


/// <IndexPage />
export function IndexPage () {
	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Recent Posts
			</h2>
			<React.Suspense fallback={<PostListFallback />}>
				<RecentPostsView />
			</React.Suspense>
		</React.Fragment>
	);
}


/// <RecentPostsView />
function RecentPostsView () {
	let [result] = useQuery<PostListResult, PostListVariables>({
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
