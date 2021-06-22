import { gql } from 'urql';

import type { PostListResult } from './PostList';


export let UserPostListQuery = gql`
	query ($user: ID!, $page: Int!, $limit: Int!) {
		user (id: $user) {
			posts (options: {
				paginate: { page: $page, limit: $limit },
				sort: { field: "id", order: DESC },
			}) {
				items: data {
					id
					title
					user {
						id
						name
					}
				}
				meta {
					totalCount
				}
			}
		}
	}
`;

export interface UserPostListVariables {
	user: string;
	page: number;
	limit: number;
}

export interface UserPostListResult {
	user: UserData;
}

export interface UserData extends PostListResult {}
