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
			top: 0.5em;
			right: 0.5em;
			z-index: 1000;
		}

		a {
			text-decoration: none;
		}

		textarea {
			border-radius: 0.5em;
		}
	}
</style>
