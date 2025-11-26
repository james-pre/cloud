import { themeStyles } from '$src/client';
import '$src/common.js';
import { getCurrentSession } from '@axium/client/user';
import type { Session, User } from '@axium/core';

export const ssr = false;

export async function load() {
	let session: (Session & { user: User }) | null;
	try {
		session = await getCurrentSession();
	} catch {
		session = null;
	}

	const theme: string | undefined = themeStyles[session?.user.preferences.theme!];

	return { session, theme };
}
