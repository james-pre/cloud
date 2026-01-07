import { fetchAPI } from '@axium/client/requests';
import { getCurrentSession } from '@axium/client/user';

export const ssr = false;

export async function load({ parent }) {
	let { session } = (await parent?.()) ?? { session: null };
	session ||= await getCurrentSession().catch(() => null);

	if (!session?.user.isAdmin) return { session, auditEvents: [], versionInfo: [] };

	const yesterday = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	const [auditEvents, metadata, releases] = await Promise.all([
		fetchAPI('GET', 'admin/audit/events', { since: yesterday.toISOString() }),
		fetchAPI('GET', 'metadata'),
		fetch('https://api.github.com/repos/james-pre/axium/releases')
			.then(res => res.json())
			.catch(() => []),
	]);

	const versionInfo: { name: string; version: string; latest?: string }[] = [];
	for (const [name, version] of [['@axium/server', metadata.version], ...Object.entries(metadata.plugins)]) {
		if (!name.startsWith('@axium/')) {
			versionInfo.push({ name, version });
			continue;
		}

		const latest = releases.find((r: any) => r.tag_name.split('@')[0] === name.slice(7))?.tag_name.split('@')[1];
		versionInfo.push({ name, version, latest });
	}

	return { session, auditEvents, versionInfo };
}
