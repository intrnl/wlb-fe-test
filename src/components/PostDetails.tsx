import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'urql';

import { getRandom, randomWidth } from '../misc/utils';

import { PostDetailQuery } from '../queries/PostDetails';
import type { PostDetailData, PostDetailVariables, PostData } from '../queries/PostDetails';


export function PostDetails (props: PostDetailsProps) {
	let { id } = props;

	return (
		<React.Suspense fallback={<PostDetailsFallback />}>
			<PostDetailsInternal id={id} />
		</React.Suspense>
	)
}

export interface PostDetailsProps extends PostDetailsInternalProps {}


/// <PostDetailFallback />
function PostDetailsFallback () {
	let [count] = React.useState(() => getRandom(3, 15));

	let paragraphs = React.useMemo(() => (
		Array.from({ length: count }, (_, index) => (
			<div key={index} className={`h-4 rounded bg-gray-400 ${randomWidth()}`} />
		))
	), [count]);

	return (
		<React.Fragment>
			<div className='motion-safe:animate-pulse border-b mb-2 pb-2'>
				<div className={`h-5 my-1.5 rounded bg-gray-400 ${randomWidth()}`} />
				<div className={`h-4 my-1 rounded bg-gray-400 ${randomWidth()}`} />
			</div>
			<div className='motion-safe:animate-pulse flex flex-col mt-3 gap-3'>
				{paragraphs}
			</div>
		</React.Fragment>
	);
}


/// <PostDetailInternal />
function PostDetailsInternal (props: PostDetailsInternalProps) {
	let { id } = props;

	let [result] = useQuery<PostDetailData, PostDetailVariables>({
		query: PostDetailQuery,
		variables: { id: id },
	});

	let { title, body, user } = result.data!.post;

	let paragraphs = React.useMemo(() => (
		body.split(/\n+/).map((content) => <p>{content}</p>)
	), [body]);

	return (
		<React.Fragment>
			<div className='border-b mb-2 pb-2'>
				<h2 className='text-lg font-semibold'>
					{title}
				</h2>
				<span className='text-sm'>
					<Link to={`/user/${user.id}`} className='hover:underline'>
						{user.name}
					</Link>
				</span>
			</div>
			<div className='flex flex-col gap-1'>
				{paragraphs}
			</div>
		</React.Fragment>
	);
}

interface PostDetailsInternalProps {
	id: string;
}
