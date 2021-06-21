import React from 'react';
import { NavLink } from 'react-router-dom';


export function PageLayout (props: PageLayoutProps) {
	let { children } = props;

	return (
		<div className='min-h-screen bg-gray-200'>
			<div className='w-full bg-blue-700 text-white pb-6 -mb-6'>
				<div className='max-w-3xl mx-auto py-4 flex gap-4 justify-between'>
					{/* Left-hand side */}
					<div className='flex'>
						<NavItem to='/'>Home</NavItem>
					</div>
					{/* Right hand side */}
					<div className='flex'>
						<NavItem to='/admin'>Admin</NavItem>
					</div>
				</div>
			</div>
			<div className='max-w-3xl mx-auto pb-6'>
				<div className='bg-white rounded -mx-4 py-3 px-4'>
					{children}
				</div>
			</div>
		</div>
	);
}

export interface PageLayoutProps {
	children: React.ReactNode;
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
