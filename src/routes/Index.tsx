import React from 'react';

import { PostList } from '../components/PostList';


export function IndexPage () {
	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Recent Posts
			</h2>
			<PostList />
		</React.Fragment>
	);
}
