import main from '@axium/server/svelte.config.js';

/** @type {import('@sveltejs/kit').Config} */
export default {
	...main,
	kit: {
		...main.kit,
		alias: {
			...main.kit.alias,
			$cmp: './src/components',
			$src: './src',
		},
	},
};
