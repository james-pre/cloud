import { sveltekit } from '@sveltejs/kit/vite';
import { searchForWorkspaceRoot, defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
	server: {
		strictPort: true,
		port: 443,
	},
	plugins: [sveltekit(), mkcert({ hosts: ['cloud.jamespre.dev'] })],
	fs: {
		allow: [searchForWorkspaceRoot(process.cwd())],
	},
	ssr: {
		external: ['@axium/server/sveltekit', '@axium/server/serve', '@axium/storage/server', '@axium/storage/plugin'],
	},
	optimizeDeps: {
		exclude: ['@axium/storage/sidebar'],
		include: ['@axium/client/components', '@axium/storage/components'],
	},
	build: {
		rollupOptions: {
			external: [/^@axium\/server(?!\/components)/],
		},
	},
});
