import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createClient, Provider } from 'urql';

import { PageLayout } from './PageLayout';

import { NotFoundPage } from '../routes/NotFound';
import { IndexPage } from '../routes/Index';
import { PostDetailsPage } from '../routes/PostDetails';


let client = createClient({
	url: 'https://graphqlzero.almansi.me/api',
	suspense: true,
});


export function App () {
	return (
		<Provider value={client}>
			<HashRouter>
				<PageLayout>
					<Routes>
						<Route path='/' element={<IndexPage />} />
						<Route path='/post/:id' element={<PostDetailsPage />} />
						<Route path='/*' element={<NotFoundPage />} />
					</Routes>
				</PageLayout>
			</HashRouter>
		</Provider>
	);
}
