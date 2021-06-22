import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'urql';

import { useAuthContext } from '../auth/AuthContext';

import { PostNewMutation } from '../queries/PostNew';
import type { PostNewResult, PostNewVariables } from '../queries/PostNew';

import { PostAuthoring } from '../components/PostAuthoring';
import type { PostAuthoringSubmitHandler } from '../components/PostAuthoring';


/// <PostNewPage />
export function PostNewPage () {
	let [, createPost] = useMutation<PostNewResult, PostNewVariables>(PostNewMutation);

	let navigate = useNavigate();
	let [auth] = useAuthContext();

	/// Form handling
	let [disabled, setDisabled] = React.useState(false);

	let handlePostSubmit: PostAuthoringSubmitHandler = (data) => {
		setDisabled(true);

		let { title, body } = data;

		createPost({ data: { title: title!, body: body! } })
			.then((result) => {
				let { createPost: post } = result.data!;
				navigate(`/post/${post.id}`);
			})
			.catch((err) => {
				alert('Error caught, see console');
				console.log('Failed to create post');
				console.error(err);
			});
	};

	/// Effect handling
	React.useEffect(() => {
		if (!auth.id) navigate('/', { replace: true });
	}, [auth.id]);


	return (
		<PostAuthoring
			disabled={disabled}
			onSubmit={handlePostSubmit}
		/>
	);
}
