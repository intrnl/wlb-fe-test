import { gql } from 'urql';


export let UserQuery = gql`
	query ($id: ID!) {
	  user (id: $id) {
	    id
	    name
	  }
	}
`;

export interface UserVariables {
	id: string;
}

export interface UserResult {
	user: UserData;
}

export interface UserData {
	id: string;
	name: string;
}
