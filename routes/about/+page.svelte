<script lang="ts">
	import { fetchAPI } from '@axium/client/requests';

	const { data } = $props();
	const pref = data.session?.user.preferences;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="about">
	<h1>About</h1>

	{#if pref?.debug}
		<h2>Debug Information</h2>

		{#await fetchAPI('GET', 'metadata')}
			<pre>Loading...</pre>
		{:then metadata}
			<pre>@axium/server v{metadata.version}</pre>

			<h3>Plugins</h3>
			<div class="plugins">
				{#each Object.entries(metadata.plugins) as [name, version]}
					<pre class="name">{name}</pre>
					<pre>{version}</pre>
				{:else}
					<i>No plugins installed.</i>
				{/each}
			</div>

			<h3>Routes</h3>
			<div class="routes">
				{#each Object.entries(metadata.routes) as [path, route]}
					<pre class="path">{path}</pre>
					<pre>{route.methods.join(', ')}</pre>
					<span>
						{#if Object.keys(route.params).length}
							<pre>&lbrace; {Object.entries(route.params)
									.map(([key, value]) => `${key}: ${value}`)
									.join(', ')} &rbrace;</pre>
						{/if}
					</span>
				{:else}
					<i>No routes defined.</i>
				{/each}
			</div>
		{:catch error}
			<div class="error">{error}</div>
		{/await}
	{/if}
</div>

<style>
	.about {
		padding: 1em;
		inset: 0;
		display: flex;
		flex-direction: column;
		gap: 1em;
	}

	.plugins {
		display: grid;
		grid-template-columns: max-content max-content;
		gap: 0.5em 1em;

		.name {
			text-align: right;
		}
	}

	.routes {
		display: grid;
		grid-template-columns: max-content max-content max-content;
		gap: 0.5em 1em;

		.name {
			text-align: right;
		}
	}

	pre {
		font-family: monospace;
		margin: 0;
	}
</style>
