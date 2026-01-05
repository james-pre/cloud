<script lang="ts">
	import { UserMenu } from '@axium/client/components';

	const { children, data } = $props();
</script>

{#if data.theme}
	{@html `<style>:root{${data.theme}}</style>`}
{/if}

<a id="logo" href="/">J'Cloud</a>

<div id="user-menu">
	{#if data.session}
		<UserMenu user={data.session.user} />
	{:else}
		<a href="/login?after={location.pathname}">Login</a>
	{/if}
</div>

{@render children()}

<style>
	#logo {
		position: fixed;
		top: 1em;
		left: 1em;
	}

	#user-menu {
		position: fixed;
		top: 1em;
		right: 1em;
		z-index: 1000;
		border-radius: 0.5em;
		padding: 0.5em;
		border: 1px solid var(--border-accent);
		cursor: pointer;

		:global(div[popover]:popover-open) {
			position: fixed;
			right: anchor(right);
			top: calc(anchor(bottom) + 1em);
			width: fit-content;
			height: fit-content;
			cursor: default;
		}
	}

	:global {
		body {
			inset: 3em 0 0;
			position: absolute;
			margin: 0;
			padding: 1em 0 0;
		}

		a {
			text-decoration: none;
		}

		.header {
			position: absolute;
			inset: 0 0 10em;
			padding: 1em 2em;
		}

		.content {
			position: absolute;
			inset: 10em 10em 0;
			display: flex;
			flex-direction: column;
			gap: 1em;
		}

		textarea {
			border-radius: 0.5em;
		}

		textarea.big-input {
			resize: none;
			width: 50em;
			height: 15em;
		}
	}
</style>
