import React from 'react';
import { Link } from 'react-router-dom';

import { getRandom } from '../misc/utils';

import type { PostDetailsData } from '../queries/PostDetails';


/// <PostDetails />
export function PostDetails (props: PostDetailsProps) {
	let { data, editable = false } = props;
	let { id, title, user, body } = data.post;

	let paragraphs = React.useMemo(() => (
		body.split(/\n/g).map((content, index) => (
			<p key={index}>{content}</p>
		))
	), [body]);

	console.log('details:', data.post);

	return (
		<div>
			<div className='border-b mb-2 pb-2'>
				<h2 className='text-lg font-semibold'>
					{title}
				</h2>
				<span className='text-sm'>
					<Link to={`/user/${user.id}`} className='hover:underline'>
						{user.name}
					</Link>
				</span>
				{editable && (
					<div>
						<Link to={`/post/${id}/edit`}>
							Edit
						</Link>
					</div>
				)}
			</div>
			<div className='flex flex-col gap-1'>
				{paragraphs}
			</div>
		</div>
	);
}

export interface PostDetailsProps {
	data: PostDetailsData;
	editable?: boolean;
}


/// <PostDetailsFallback />
export function PostDetailsFallback () {
	let [count] = React.useState(() => getRandom(3, 10));

	let paragraphs = React.useMemo(() => (
		Array.from({ length: count }, (_, index) => (
			<div
				key={index}
				style={{ width: `${getRandom(25, 100)}%` }}
				className='h-4 rounded bg-gray-400'
			/>
		))
	), [count]);

	return (
		<div className='motion-safe:animate-pulse'>
			<div className='border-b mb-2 pb-2'>
				<div
					style={{ width: `${getRandom(10, 75)}%` }}
					className='h-5 my-1.5 rounded bg-gray-400'
				/>
				<div
					style={{ width: `${getRandom(10, 75)}%` }}
					className='h-4 my-1 rounded bg-gray-400'
				/>
			</div>
			<div className='flex flex-col mt-3 gap-3'>
				{paragraphs}
			</div>
		</div>
	);
}
