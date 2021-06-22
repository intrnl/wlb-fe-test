import { gql } from 'urql';


export let PostEditMutation = gql`
	mutation ($id: ID!, $data: UpdatePostInput!) {
		updatePost (id: $id, input: $data) {
			id
			title
			body
		}
	}
`;

export interface PostEditVariables {
	id: string;
	data: {
		title?: string;
		body?: string;
	};
}
