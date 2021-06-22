import React from 'react';


type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function inputReducer (prevState: any, event: ChangeEvent) {
	return event.target.value;
}

export let useFormValue = (initialValue = '') => (
	React.useReducer(inputReducer, initialValue)
);
