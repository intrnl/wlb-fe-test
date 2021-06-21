import React from 'react';


function incrementReducer (prevState: number) {
	return prevState + 1;
}

export function App (props: AppProps) {
	let [count, handleIncrement] = React.useReducer(incrementReducer, 0)

	return (
		<>
			<div>Hello world!</div>
			<button className='bg-red-400' onClick={handleIncrement}>count: {count}</button>
		</>
	);
}

export interface AppProps {

}
