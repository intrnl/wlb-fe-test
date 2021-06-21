import { gql } from 'urql';


export let PostListQuery = gql`
	query ($paginate: PaginateOptions) {
		posts (options: { paginate: $paginate, sort: { field: "id", order: DESC } }) {
	    items: data {
	      id
	      title
	    }
	    meta {
	      totalCount
	    }
	  }
	}
`;

export interface PostListData {
	posts: {
		items: PostItemData[];
		meta: { totalCount: number };
	};
}

export interface PostItemData {
	id: string;
	title: string;
	// body: string;
	// user: UserData
	// comments: CommentsListData
}
