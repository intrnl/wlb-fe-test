import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createClient, Provider } from 'urql';

import { AuthProvider } from '../auth/AuthContext';

import { PageLayout } from './PageLayout';

import { NotFoundPage } from '../routes/NotFound';
import { IndexPage } from '../routes/Index';
import { PostDetailsPage } from '../routes/PostDetails';
import { LoginPage } from '../routes/Login';


let client = createClient({
	url: 'https://graphqlzero.almansi.me/api',
	suspense: true,
});


export function App () {
	return (
		<Provider value={client}>
			<AuthProvider>
				<HashRouter>
					<PageLayout>
						<Routes>
							<Route path='/' element={<IndexPage />} />
							<Route path='/post/:id' element={<PostDetailsPage />} />
							<Route path='/login' element={<LoginPage />} />
							<Route path='/*' element={<NotFoundPage />} />
						</Routes>
					</PageLayout>
				</HashRouter>
			</AuthProvider>
		</Provider>
	);
}
