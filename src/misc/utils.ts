let WIDTH_CLASSNAMES = ['w-1/5', 'w-1/4', 'w-2/4', 'w-3/4'];

export function randomWidth () {
	let index = Math.floor(Math.random() * WIDTH_CLASSNAMES.length);
	let className = WIDTH_CLASSNAMES[index];

	return className;
}

export function getRandom (min: number, max: number) {
	return Math.random() * (max - min) + min;
}
