import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createClient, Provider } from 'urql';

import { AuthProvider } from '../auth/AuthContext';

import { PageLayout } from './PageLayout';

import { NotFoundPage } from '../routes/NotFound';
import { IndexPage } from '../routes/Index';
import { LoginPage } from '../routes/Login';
import { UserPage } from '../routes/User';
import { PostIndexPage } from '../routes/PostIndex';
import { PostDetailsPage } from '../routes/PostDetails';
import { PostNewPage } from '../routes/PostNew';
import { PostEditPage } from '../routes/PostEdit';


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
							<Route path='/login' element={<LoginPage />} />
							<Route path='/user/:id' element={<UserPage />} />
							<Route path='/post/*'>
								<Route path='/' element={<PostIndexPage />} />
								<Route path='/new' element={<PostNewPage />} />
								<Route path='/:id'>
									<Route path='/' element={<PostDetailsPage />} />
									<Route path='/edit' element={<PostEditPage />} />
								</Route>
							</Route>
							<Route path='/*' element={<NotFoundPage />} />
						</Routes>
					</PageLayout>
				</HashRouter>
			</AuthProvider>
		</Provider>
	);
}
