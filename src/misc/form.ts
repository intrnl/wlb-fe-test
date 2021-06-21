import React from 'react';


function inputReducer (prevState: any, event: React.ChangeEvent<HTMLInputElement>) {
	return event.target.value;
}

export let useFormValue = () => React.useReducer(inputReducer, '');
