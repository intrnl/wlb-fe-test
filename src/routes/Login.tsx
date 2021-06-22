import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormValue } from '../misc/form';

import { AuthContext } from '../auth/AuthContext';

import { TextInput, Button } from '../components/Form';


export function LoginPage () {
	let navigate = useNavigate();
	let [state, dispatch] = React.useContext(AuthContext);

	let [id, handleIdChange] = useFormValue();

	let handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
		ev.preventDefault();
		dispatch({ type: 'LOGIN', data: { id: id }});
	};

	React.useEffect(() => {
		if (state.id) navigate('/', { replace: true });
	}, [state.id]);

	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Login
			</h2>

			<form onSubmit={handleFormSubmit}>
				<fieldset className='mt-2'>
					<label htmlFor='input-id' className='mr-2'>
						ID
					</label>
					<TextInput
						id='input-id'
						placeholder='id'
						value={id}
						onChange={handleIdChange}
					/>
				</fieldset>

				<div className='mt-2'>
					<Button type='submit'>
						Login
					</Button>
				</div>
			</form>
		</React.Fragment>
	)
}
