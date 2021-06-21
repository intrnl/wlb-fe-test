import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormValue } from '../misc/form';

import { AuthContext } from '../auth/AuthContext';


export function LoginPage () {
	let navigate = useNavigate();
	let [state, dispatch] = React.useContext(AuthContext);

	let [id, handleIdChange] = useFormValue();

	let handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (ev) => {
		ev.preventDefault();
		dispatch({ type: 'LOGIN', data: { id: id }});
	};

	React.useEffect(() => {
		if (state.id) navigate('/');
	}, [state.id]);

	return (
		<React.Fragment>
			<h2 className='text-lg font-semibold'>
				Login
			</h2>

			<form onSubmit={handleFormSubmit}>
				<label>
					ID
					<input
						placeholder='id'
						value={id}
						onChange={handleIdChange}
					/>
				</label>

				<button type='submit'>
					login
				</button>
			</form>
		</React.Fragment>
	)
}
