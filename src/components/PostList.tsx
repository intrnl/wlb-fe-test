import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'urql';

import { randomWidth } from '../misc/utils';

import { PostListQuery } from '../queries/PostList';
import type { PostListData, PostListVariables, PostItemData } from '../queries/PostList';


export function PostList (props: PostListProps) {
	let { page } = props;

	return (
		<div className='flex flex-col divide-y'>
			<React.Suspense fallback={<PostListFallback />}>
				<PostListInternal page={page} />
			</React.Suspense>
		</div>
	);
}

export interface PostListProps extends PostListInternalProps {}


/// <PostListFallback />
function PostListFallback () {
	let count = 9;

	let nodes = React.useMemo(() => (
		Array.from({ length: count }, (_, index) => (
			<PostItemFallback key={index} />
		))
	), [count]);

	return (
		<React.Fragment children={nodes} />
	);
}


/// <PostListInternal />
function PostListInternal (props: PostListInternalProps) {
	let { page = 1 } = props;

	let [result] = useQuery<PostListData, PostListVariables>({
		query: PostListQuery,
		variables: { page: page, limit: 10 },
	});

	let { items, meta } = result.data!.posts;

	return (
		<React.Fragment>
			{items.map((data) => (
				<PostItem key={data.id} data={data} />
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
		<div className='py-2 motion-safe:animate-pulse'>
			<div className={`h-5 my-1.5 rounded bg-gray-400 ${randomWidth()}`} />
			<div className={`h-4 my-1 rounded bg-gray-400 ${randomWidth()}`} />
		</div>
	);
}


/// <PostItem />
export function PostItem (props: PostItemProps) {
	let { data } = props;

	return (
		<div className='py-2'>
			<h4 className='text-lg h-7 font-normal'>
				<Link to={`/post/${data.id}`} className='hover:underline'>
					{data.title}
				</Link>
			</h4>
			<span className='text-sm h-5'>
				<Link to={`/user/${data.user.id}`} className='hover:underline'>
					{data.user.name}
				</Link>
			</span>
		</div>
	);
}

export interface PostItemProps {
	data: PostItemData;
}
