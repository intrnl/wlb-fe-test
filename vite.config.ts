import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';


export default defineConfig({
	base: '/wlb-fe-test/',
	root: './src/',
	build: {
		outDir: '../dist/',
		emptyOutDir: true,
	},
	plugins: [
		reactRefresh(),
	],
});
