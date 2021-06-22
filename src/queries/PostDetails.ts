import { gql } from 'urql';


export let PostDetailsQuery = gql`
	query ($id: ID!) {
	  post (id: $id) {
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

export interface PostDetailsVariables {
	id: string | number;
}

export interface PostDetailsData {
	post: PostData;
}

export interface PostData {
	id: string;
	title: string;
	body: string;
	user: {
		id: string;
		name: string;
	};
}
