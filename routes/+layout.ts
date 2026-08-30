import { getCurrentSession } from '@axium/client/user';

export const ssr = false;

export async function load() {
	const session = await getCurrentSession().catch(() => null);
	return { session };
}
