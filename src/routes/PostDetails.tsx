import React from 'react';
import { useParams } from 'react-router-dom';

import { PostDetails } from '../components/PostDetails';


export function PostDetailsPage () {
	let params: PostDetailsParam = useParams() as any;

	return (
		<React.Fragment>
			<PostDetails id={params.id} />
		</React.Fragment>
	);
}

interface PostDetailsParam {
	id: string;
}
