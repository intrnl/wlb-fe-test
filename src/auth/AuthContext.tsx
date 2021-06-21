import React from 'react';


export interface AuthState {
	id: string | null;
}

export type AuthAction =
	| { type: 'LOGIN', data: { id: string } }
	| { type: 'LOGOUT' };

function authReducer (state: AuthState, action: AuthAction): AuthState {
	switch (action.type) {
		case 'LOGIN': {
			localStorage.setItem('id', action.data.id);
			return { ...state, id: action.data.id };
		}
		case 'LOGOUT': {
			localStorage.removeItem('id');
			return { ...state, id: null };
		}
	}
}


export let AuthContext = React.createContext<AuthProvides>(null as any);
export let useAuthContext = () => React.useContext(AuthContext);

export type AuthProvides = [state: AuthState, dispatch: React.Dispatch<AuthAction>];


/// <AuthProvider />
export function AuthProvider (props: AuthProviderProps) {
	let [state, dispatch] = React.useReducer(authReducer, { id: null });

	return (
		<AuthContext.Provider value={[state, dispatch]}>
			{props.children}
		</AuthContext.Provider>
	);
}

export interface AuthProviderProps {
	children: React.ReactNode;
}
