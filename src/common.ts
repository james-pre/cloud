import { addPreference } from '@axium/core';
import * as z from 'zod';

const themes = {
	Default: 'default',
	Light: 'light',
	Forest: 'forest',
	Midnight: 'midnight',
	Beach: 'beach',
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

declare module '@axium/core/preferences' {
	export interface Preferences {
		theme: Theme;
	}
}

addPreference({
	name: 'theme',
	schema: z.enum(themes),
	initial: 'default',
	label: 'Theme',
});
