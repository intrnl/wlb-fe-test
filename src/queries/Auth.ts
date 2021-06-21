import { gql } from 'urql';


export let AuthQuery = gql`
	query ($id: ID!) {
	  user (id: $id) {
	    id
	    name
	  }
	}
`;

export interface AuthVariables {
	id: string;
}

export interface AuthData {
	user: UserData;
}

export interface UserData {
	id: string;
	name: string;
}
