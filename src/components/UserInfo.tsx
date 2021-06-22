import React from 'react';

import { getRandom } from '../misc/utils';

import type { UserResult } from '../queries/User';


/// <UserInfo />
export function UserInfo (props: UserInfoProps) {
	let { data } = props;

	return (
		<div>
			<h2 className='text-lg font-semibold'>
				{data.user.name}
			</h2>
		</div>
	);
}

export interface UserInfoProps {
	data: UserResult;
}


/// <UserInfoFallback />
export function UserInfoFallback () {
	return (
		<div>
			<div
				style={{ width: `${getRandom(10, 50)}%` }}
				className='h-5 mt-0.5 mb-1.5 rounded bg-gray-400'
			/>
		</div>
	);
}
