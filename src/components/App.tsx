import React from 'react';
import { createClient, Provider } from 'urql';

import { IndexPage } from '../routes/Index';


let client = createClient({
	url: 'https://graphqlzero.almansi.me/api',
	suspense: true,
});


export function App () {
	return (
		<Provider value={client}>
			<IndexPage />
		</Provider>
	);
}
