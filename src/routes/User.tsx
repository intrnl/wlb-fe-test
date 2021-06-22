import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';

import { UserQuery } from '../queries/User';
import { UserPostListQuery } from '../queries/UserPostList';
import type { UserResult, UserVariables } from '../queries/User';
import type { UserPostListResult, UserPostListVariables } from '../queries/UserPostList';

import { UserInfo, UserInfoFallback } from '../components/UserInfo';
import { PostList, PostListFallback } from '../components/PostList';
import { Pagination } from '../components/Pagination';


/// <UserPage />
export function UserPage () {
	let { id }: UserParams = useParams() as any;

	return (
		<React.SuspenseList>
			<React.Suspense fallback={<UserInfoFallback />}>
				<UserInfoView id={id} />
			</React.Suspense>
			<React.Suspense fallback={<PostListFallback />}>
				<UserPostListView id={id} />
			</React.Suspense>
		</React.SuspenseList>
	);
}

interface UserParams {
	id: string;
}

/// <UserInfoView />
function UserInfoView (props: UserInfoViewProps) {
	let { id } = props;

	let [result] = useQuery<UserResult, UserVariables>({
		query: UserQuery,
		variables: { id },
	});

	let { user } = result.data!;

	return (
		user.id ? (
			<UserInfo
				data={result.data!}
			/>
		) : (
			<div>404. User not found.</div>
		)
	);
}

interface UserInfoViewProps extends UserParams {}

/// <UserPostListView />
function UserPostListView (props: UserPostListViewProps) {
	let { id } = props;

	let [page, handlePageChange] = React.useState(1);

	let [result] = useQuery<UserPostListResult, UserPostListVariables>({
		query: UserPostListQuery,
		variables: { user: id, page: page, limit: 25 },
	});

	let { meta } = result.data!.user.posts;
	let totalPage = Math.max(Math.ceil(meta.totalCount / 25), 1);


	return (
		<div className='flex flex-col gap-1'>
			<PostList
				data={result.data!.user}
			/>
			{meta.totalCount > 0 && (
				<Pagination
					current={page}
					total={totalPage}
					onChange={handlePageChange}
				/>
			)}
		</div>
	);
}

interface UserPostListViewProps extends UserParams {}
