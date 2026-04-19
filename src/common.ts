import { addPreference } from '@axium/core';
import { zKeys } from '@axium/core/locales';
import * as z from 'zod';

const themes = ['default', 'light', 'forest', 'midnight', 'beach', 'cherry', 'volcano'] as const;

export type Theme = (typeof themes)[number];

declare module '@axium/core/preferences' {
	export interface Preferences {
		theme: Theme;
	}
}

addPreference('theme', z.literal(themes).default('default').register(zKeys, { key: 'preference.theme', prefix: 'themes' }));
