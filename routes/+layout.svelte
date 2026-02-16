<script lang="ts">
	import { UserMenu } from '@axium/client/components';

	const { children, data } = $props();
</script>

{#if data.theme}
	{@html `<style>:root{${data.theme}}</style>`}
{/if}

<a id="logo" href="/">J'Cloud</a>

<UserMenu user={data.session?.user} />

{@render children()}

<style>
	#logo {
		position: fixed;
		top: 1em;
		left: 1em;
	}

	:global {
		body {
			inset: 3em 0 0;
			position: absolute;
			margin: 0;
			padding: 1em 0 0;
		}

		.UserMenu {
			position: fixed;
			top: 1em;
			right: 1em;
			z-index: 1000;
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
