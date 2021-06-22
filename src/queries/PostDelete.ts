import { gql } from 'urql';


export let PostDeleteMutation = gql`
	mutation ($id: ID!) {
		deletePost (id: $id)
	}
`;

export interface PostDeleteVariables {
	id: string;
}

export interface PostDeleteResult {
	deletePost: boolean;
}
