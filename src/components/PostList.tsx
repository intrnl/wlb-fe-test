import React from 'react';
import { useQuery } from 'urql';

import { randomWidth } from '../misc/utils';

import { PostListQuery } from '../queries/PostList';
import type { PostListData, PostItemData } from '../queries/PostList';


export function PostList () {
	return (
		<div className='flex flex-col gap-2'>
			<React.Suspense fallback={<PostListFallback />}>
				<PostListInternal />
			</React.Suspense>
		</div>
	);
}

export interface PostListProps extends PostListInternalProps {}


/// <PostListFallback />
function PostListFallback () {
	let count = 10;

	let nodes = React.useMemo(() => (
		Array.from({ length: count }, () => <PostItemFallback />)
	), [count]);

	return (
		<React.Fragment children={nodes} />
	);
}

/// <PostListInternal />
function PostListInternal (props: PostListInternalProps) {
	let { page = 1 } = props;

	let [result] = useQuery<PostListData>({
		query: PostListQuery,
		variables: {
			page: page,
			limit: 10,
		},
	});

	let { items, meta } = result.data!.posts;

	return (
		<React.Fragment>
			{items.map((data) => (
				<PostItem data={data} />
			))}
		</React.Fragment>
	);
}

interface PostListInternalProps {
	page?: number;
}


/// <PostItemFallback />
export function PostItemFallback () {
	return (
		<div className='motion-safe:animate-pulse'>
			<div className={`h-4 rounded bg-gray-400 ${randomWidth()}`}></div>
		</div>
	);
}


/// <PostItem />
export function PostItem (props: PostItemProps) {
	let { data } = props;

	return (
		<div>
			<a data-id={data.id}>
				<h4 className='h-4'>{data.title}</h4>
			</a>
		</div>
	);
}

export interface PostItemProps {
	data: PostItemData;
}
