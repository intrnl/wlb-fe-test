import React from 'react';
import { useQuery } from 'urql';

import { PostListQuery } from '../queries/PostList';
import type { PostListResult, PostListVariables } from '../queries/PostList';

import { PostList, PostListFallback } from '../components/PostList';
import { Pagination } from '../components/Pagination';


/// <PostIndexPage />
export function PostIndexPage () {
	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Posts
			</h2>
			<React.Suspense fallback={<PostListFallback />}>
				<PostListView />
			</React.Suspense>
		</React.Fragment>
	);
}


/// <PostListView />
function PostListView () {
	let [page, handlePageChange] = React.useState(1);

	let [result] = useQuery<PostListResult, PostListVariables>({
		query: PostListQuery,
		variables: { page: page, limit: 10 },
	});

	let { meta } = result.data!.posts;
	let totalPage = Math.max(Math.ceil(meta.totalCount / 25), 1);

	return (
		<div className='flex flex-col gap-1'>
			<PostList
				data={result.data!}
			/>
			{meta.totalCount > 0 && (
				<Pagination
					current={page}
					total={totalPage}
					onChange={handlePageChange}
				/>
			)}
		</div>
	);
}
