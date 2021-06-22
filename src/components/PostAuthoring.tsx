import React from 'react';
import { Link } from 'react-router-dom';

import { useFormValue } from '../misc/form';

import type { PostData } from '../queries/PostDetails';


/// <PostAuthoring />
export function PostAuthoring (props: PostAuthoringProps) {
	let { disabled = false, data = {}, onSubmit } = props;

	console.log('authoring:', data);

	let [title, handleTitleChange] = useFormValue(data.title);
	let [body, handleBodyChange] = useFormValue(data.body);

	let handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
		ev.preventDefault();

		if (disabled) return;
		onSubmit({ id: data.id, user: data.user, title: title, body: body });
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<div className='border-b mb-2 pb-2'>
				<input
					className='block w-full text-lg font-semibold disabled:text-gray-600'
					disabled={disabled}
					placeholder='Post title'
					value={title}
					onChange={handleTitleChange}
				/>
				{data.user && (
					<span className='text-sm'>
						<Link to={`/user/${data.user.id}`}>
							{data.user.name}
						</Link>
					</span>
				)}
				<div>
					<button type='submit'>
						Submit
					</button>
				</div>
			</div>
			<div>
				<textarea
					className='w-full h-96 disabled:text-gray-600'
					disabled={disabled}
					value={body}
					onChange={handleBodyChange}
				/>
			</div>
		</form>
	);
}

export interface PostAuthoringProps {
	disabled?: boolean;
	data?: Partial<PostData>;
	onSubmit: PostAuthoringSubmitHandler;
}

export type PostAuthoringSubmitHandler =
	(data: Partial<PostData>) => void;
