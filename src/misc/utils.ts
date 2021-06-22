export function getRandom (min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function joinClassNames (classNames: Array<string | false | void>) {
	return classNames.filter(Boolean).join(' ');
}
