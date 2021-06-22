import React from 'react';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

import { joinClassNames } from '../misc/utils';


/// <TextInput />
export function TextInput (props: TextInputProps) {
	let cn = joinClassNames([
		'inline-block px-2 py-1 rounded',
		'border border-gray-300',
		'focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1',
		'ring-gray-400',

		props.disabled && 'opacity-50',
	]);

	return (
		<input {...props} className={cn} />
	);
}

export interface TextInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
> {}

/// <Button />
export function Button (props: ButtonProps) {
	let cn = joinClassNames([
		'inline-block px-2 py-1 rounded',
		'border border-gray-300',
		'focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1',
		'active:bg-gray-200 hover:bg-gray-200 ring-gray-400',

		props.disabled && 'opacity-50',
	]);

	return (
		<button {...props} className={cn} />
	)
}

export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
> {}


/// <ButtonLink />
export function ButtonLink (props: ButtonLinkProps) {
	let cn = joinClassNames([
		'inline-block px-2 py-1 rounded',
		'border border-gray-300',
		'focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1',
		'active:bg-gray-200 hover:bg-gray-200 ring-gray-400',

		props.disabled && 'opacity-50',
	]);


	return (
		!props.disabled ? (
			<Link {...props} className={cn} />
		) : (
			<a {...props} className={cn} />
		)
	);
}

export interface ButtonLinkProps extends LinkProps {
	disabled?: boolean;
}
