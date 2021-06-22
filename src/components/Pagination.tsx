import React from 'react';

import { joinClassNames } from '../misc/utils';
import { ChevronLeftSvg, ChevronRightSvg, FirstPageSvg, LastPageSvg } from '../misc/icons';


/// usePagination hook
function rangeArray (start: number, end: number) {
	return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function createPagination (opts: CreatePaginationOptions) {
	let { sibling = 3, current, total } = opts;

	let prev = Math.max(current - sibling, 1);
	let next = Math.min(current + sibling, total);
	let count = 1 + sibling * 2;

	let isNext = prev > 2;
	let isPrev = next < total - 2;

	if (!isNext && isPrev) {
		return rangeArray(1, count);
	}

	if (isNext && !isPrev) {
		return rangeArray(total - count + 1, total);
	}

	return rangeArray(prev, next);
}

export interface CreatePaginationOptions {
	sibling?: number;
	current: number;
	total: number;
}


/// <Pagination />
export function Pagination (props: PaginationProps) {
	let { current, total, sibling, onChange } = props;

	let pages = createPagination({ current, total, sibling });

	let isPrevMost = current <= 1;
	let isNextMost = current >= total;

	let handleClick: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
		let { page } = ev.currentTarget.dataset;
		onChange?.(Number(page));
	};

	console.log({ isPrevMost, isNextMost });


	return (
		<div className='w-max flex rounded border border-gray-300'>
			<PaginationButton
				aria-label='Go to first page'
				data-page={1}
				onClick={handleClick}
				disabled={isPrevMost}
			>
				<img src={FirstPageSvg} />
			</PaginationButton>
			<PaginationButton
				aria-label='Go to previous page'
				data-page={Math.max(current - 1, 1)}
				onClick={handleClick}
				disabled={isPrevMost}
			>
				<img src={ChevronLeftSvg} />
			</PaginationButton>

			{pages.map((page) => (
				<PaginationButton
					key={page}
					data-page={page}
					active={page === current}
					onClick={handleClick}
				>
					{page}
				</PaginationButton>
			))}

			<PaginationButton
				aria-label='Go to next page'
				data-page={Math.min(current + 1, total)}
				onClick={handleClick}
				disabled={isNextMost}
			>
				<img src={ChevronRightSvg} />
			</PaginationButton>
			<PaginationButton
				aria-label='Go to last page'
				data-page={total}
				onClick={handleClick}
				disabled={isNextMost}
			>
				<img src={LastPageSvg} />
			</PaginationButton>
		</div>
	);
}

export interface PaginationProps extends CreatePaginationOptions {
	onChange?: (page: number) => void;
}


/// <PaginationButton />
export function PaginationButton (props: PaginationButtonProps) {
	let { active = false, children, ...buttonProps } = props;

	let outerClassName = joinClassNames([
		'h-8 w-8 grid rounded',
		'focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-2',

		active && 'text-white bg-blue-700 active:bg-blue-700 hover:bg-blue-800 ring-blue-500',
		!active && 'text-current bg-transparent active:bg-gray-300 hover:bg-gray-300 ring-gray-400',
		props.disabled && 'opacity-50',
	]);

	let innerClassName = joinClassNames([
		'place-self-center',
	]);

	return (
		<button {...buttonProps} className={outerClassName}>
			<div className={innerClassName}>
				{children}
			</div>
		</button>
	);
}

export interface PaginationButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
> {
	active?: boolean;
}
