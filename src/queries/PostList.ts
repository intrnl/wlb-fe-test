import { gql } from 'urql';


export let PostListQuery = gql`
	query ($page: Int, $limit: Int) {
		posts (options: {
			paginate: { page: $page, limit: $limit },
			sort: { field: "id", order: DESC }
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
`;

export interface PostListVariables {
	page: number;
	limit: number;
}

export interface PostListData {
	posts: {
		items: PostItemData[];
		meta: { totalCount: number };
	};
}

export interface PostItemData {
	id: string;
	title: string;
	user: UserData;
	// body: string;
	// comments: CommentsListData
}

export interface UserData {
	id: string;
	name: string;
}
