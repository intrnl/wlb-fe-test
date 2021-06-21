import { gql } from 'urql';


export let PostDetailQuery = gql`
	query ($id: ID!) {
	  post (id: $id) {
	    title
	    body
	    user {
	    	id
	    	name
	    }
		}
	}
`;

export interface PostDetailVariables {
	id: string | number;
}

export interface PostDetailData {
	post: PostData;
}

export interface PostData {
	title: string;
	body: string;
	user: {
		id: string;
		name: string;
	};
}
