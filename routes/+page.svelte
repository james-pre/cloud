<script lang="ts">
	import { Version } from '@axium/client/components';
	import { Severity, type AuditEvent } from '@axium/core/audit';

	const { data } = $props();
</script>

<svelte:head>
	<title>J'Cloud Home</title>
</svelte:head>

<div id="boxes">
	{#if data.session?.user.isAdmin}
		<div class="box">
			<h3>Recent Audit Log Activity</h3>
			<p>
				{(Object.entries(Object.groupBy(data.auditEvents!, e => e.severity)) as any as [Severity, AuditEvent<any>[]][])
					.map(([severity, events]) => `${events.length} ${Severity[severity].toUpperCase()} events`)
					.join(', ') || 'All clear'}.
			</p>
		</div>
		<div class="box">
			<h3>Updates Needed</h3>
			{#each data.outdatedPackages as { name, version: v, latest }}
				<p>
					{name}
					<Version {v} {latest} />
				</p>
			{:else}
				<p>All packages are up to date.</p>
			{/each}
		</div>
	{/if}
</div>

<style>
	#boxes {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 1em;
		position: fixed;
		inset: 3em min(10em, 20%) 1em;
	}

	.box {
		background-color: var(--bg-menu);
		border-radius: 1em;
		padding: 1em;
		height: fit-content;
	}

	@media (width < 700px) {
		#boxes {
			inset: 5em 1em 1em;
			display: flex;
			flex-direction: column;
			gap: 1em;
			align-content: center;
		}
	}
</style>
