import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';


export default defineConfig({
	root: './src/',
	build: {
		outDir: '../dist/',
		emptyOutDir: true,
	},
	plugins: [
		reactRefresh(),
	],
});
