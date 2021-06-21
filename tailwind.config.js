let colors = require('tailwindcss/colors');


module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				trueGray: colors.trueGray,
			}
		},
	},
	variants: {},
	plugins: [],
};
