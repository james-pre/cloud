import { fetchAPI } from '@axium/client/requests';
import { getCurrentSession } from '@axium/client/user';
import { lt as ltVersion } from 'semver';

export const ssr = false;

export async function load({ parent }) {
	let { session } = (await parent?.()) ?? { session: null };
	session ||= await getCurrentSession().catch(() => null);

	if (!session?.user.isAdmin) return { session, auditEvents: [], outdatedPackages: [] };

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const [auditEvents, metadata] = await Promise.all([
		fetchAPI('GET', 'admin/audit/events', { since: yesterday.toISOString() }),
		fetchAPI('GET', 'metadata'),
	]);

	const outdatedPackages = metadata.versions.filter(pkg => pkg.latest && ltVersion(pkg.version, pkg.latest));

	return { session, auditEvents, outdatedPackages };
}
