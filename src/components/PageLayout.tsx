import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'urql';

import { getRandom } from '../misc/utils';

import { useAuthContext } from '../auth/AuthContext';

import { UserQuery } from '../queries/User';
import type { UserResult, UserVariables } from '../queries/User';


export function PageLayout (props: PageLayoutProps) {
	let { children } = props;

	return (
		<div className='min-h-screen bg-gray-200'>
			<div className='w-full bg-blue-700 text-white pb-6 -mb-6'>
				<div className='max-w-3xl mx-auto px-4 py-4 flex gap-4 justify-between'>
					{/* Left-hand side */}
					<div className='flex gap-4 items-center'>
						<NavItem to='/'>Home</NavItem>
						<NavItem to='/post'>Posts</NavItem>
					</div>
					{/* Right-hand side */}
					<div className='flex gap-4 items-center'>
						<AuthNavBar />
					</div>
				</div>
			</div>
			<div className='md:max-w-3xl md:mx-auto md:pb-6'>
				<div className='bg-white py-3 px-4 md:shadow-md md:rounded'>
					{children}
				</div>
			</div>
		</div>
	);
}

export interface PageLayoutProps {
	children: React.ReactNode;
}


/// <AuthNavBar />
function AuthNavBar () {
	let [state, dispatch] = useAuthContext();

	let handleLogout = React.useCallback(() => {
		dispatch({ type: 'LOGOUT' });
	}, [dispatch]);

	if (!state.id) {
		return (
			<NavItem to='/login'>
				Login
			</NavItem>
		)
	}

	return (
		<React.Fragment>
			<React.Suspense fallback={<AuthDetailsFallback />}>
				<AuthDetails />
			</React.Suspense>
			<NavButton onClick={handleLogout}>
				Logout
			</NavButton>
		</React.Fragment>
	);
}


/// <AuthDetailsFallback />
function AuthDetailsFallback () {
	return (
		<div
			style={{ width: `${getRandom(10, 25)}ch` }}
			className='motion-safe:animate-pulse h-4 rounded bg-blue-500 mb-1'
		/>
	);
}


/// <AuthDetails />
function AuthDetails () {
	let [state, dispatch] = useAuthContext();

	let [result] = useQuery<UserResult, UserVariables>({
		query: UserQuery,
		variables: {
			id: state.id!,
		},
	});

	let { id, name } = result.data!.user;

	useEffect(() => {
		if (!id) dispatch({ type: 'LOGOUT' });
	}, [id]);

	return (
		<NavItem to={`/user/${id}`}>
			{name}
		</NavItem>
	);
}


/// <NavItem />
function NavItem (props: NavItemProps) {
	let { to, children } = props;

	return (
		<NavLink
			end
			to={to}
			className='font-bold border-b-2 border-transparent hover:border-blue-200'
			activeClassName='border-blue-400'
		>
			{children}
		</NavLink>
	)
}

interface NavItemProps {
	to: string;
	children: React.ReactNode;
}


/// <NavButton />
function NavButton (props: NavButtonProps) {
	return (
		<a
			{...props}
			className='font-bold border-b-2 border-transparent cursor-pointer hover:border-blue-200'
		/>
	);
}

interface NavButtonProps
	extends React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
> {}
