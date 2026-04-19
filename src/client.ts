import { extendLocale } from '@axium/client';
import type {} from '@axium/client/locales';
import en from '../locales/en.json' with { type: 'json' };
import './common.js';
import type { Theme } from './common.js';

type en = typeof en;

declare module '@axium/client/locales' {
	interface Locale extends en {}
}

extendLocale('en', en);

export const themeStyles: Record<Theme, string> = Object.assign(Object.create(null), {
	light: `
	--fg-light: 10%;
	--bg-light: 70%;
	--light-step: -6%;
	`,
	forest: `
	--hue: 150;
	--fg-light: 75%;
	--bg-light: 20%;
	`,
	midnight: `
	--fg-light: 60%;
	--bg-light: 2.5%;
	--light-step: 2.5%;
	`,
	beach: `
	--hue: 50;
	--fg-light: 30%;
	--bg-light: 60%;
	--light-step: -4%;
	`,
	cherry: `
	--hue: 330;
	--fg-light: 80%;
	--bg-light: 20%;
	`,
	volcano: `
	--hue: 10;
	--fg-light: 80%;
	--bg-light: 10%;
	--light-step: 5%;
	`,
});
