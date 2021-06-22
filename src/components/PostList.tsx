import React from 'react';
import { Link } from 'react-router-dom';

import { getRandom } from '../misc/utils';

import type { PostListData, PostItemData } from '../queries/PostList';


/// <PostList />
export function PostList (props: PostListProps) {
	let { data } = props;
	let { items, meta } = data.posts;

	return (
		<div className='flex flex-col divide-y'>
			{items.map((item) => (
				<PostItem key={item.id} data={item} />
			))}
		</div>
	);
}

export interface PostListProps {
	data: PostListData;
}


/// <PostListFallback />
export function PostListFallback (props: PostListFallbackProps) {
	let { size = 10 } = props;

	let nodes = React.useMemo(() => (
		Array.from({ length: size }, (_, index) => (
			<PostItemFallback key={index} />
		))
	), [size]);

	return (
		<div className='flex flex-col divide-y'>
			{nodes}
		</div>
	);
}

export interface PostListFallbackProps {
	size?: number;
}


/// <PostItem />
export function PostItem (props: PostItemProps) {
	let { data } = props;

	return (
		<div className='py-2'>
			<h4 className='text-lg'>
				<Link to={`/post/${data.id}`} className='hover:underline'>
					{data.title}
				</Link>
			</h4>
			<span className='text-sm'>
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


/// <PostItemFallback />
export function PostItemFallback () {
	return (
		<div className='py-2 motion-safe:animate-pulse'>
			<div
				style={{ width: `${getRandom(10, 75)}%` }}
				className='h-5 my-1.5 rounded bg-gray-400'
			/>
			<div
				style={{ width: `${getRandom(10, 50)}%` }}
				className='h-4 my-1 rounded bg-gray-400'
			/>
		</div>
	);
}

