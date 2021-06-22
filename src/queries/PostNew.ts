import { gql } from 'urql';

import type { PostData } from './PostDetails';


export let PostNewMutation = gql`
	mutation ($data: CreatePostInput!) {
		createPost (input: $data) {
			id
			title
			body
			user {
				id
				name
			}
		}
	}
`;

export interface PostNewVariables {
	data: {
		title: string;
		body: string;
	};
}

export interface PostNewResult {
	createPost: PostData;
}
