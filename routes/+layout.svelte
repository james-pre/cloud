<script lang="ts">
	import { UserMenu, PWAIndicator } from '@axium/client/components';

	const { children, data } = $props();
</script>

<a id="logo" href="/">J'Cloud</a>

<div id="top-corner">
	<PWAIndicator />
	<UserMenu user={data.session?.user} />
</div>

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

		#top-corner {
			position: fixed;
			top: 0.5em;
			right: 0.5em;
			z-index: 1000;
			display: inline-flex;
			gap: 1em;
			align-items: center;
		}

		a {
			text-decoration: none;
		}

		textarea {
			border-radius: 0.5em;
		}
	}
</style>
