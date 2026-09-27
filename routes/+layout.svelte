<script lang="ts">
	import { TopBar } from '@axium/client/components';

	const { children, data } = $props();
</script>

<TopBar user={data.session?.user} />

{@render children()}

<style>
	:global {
		a {
			text-decoration: none;
		}

		textarea {
			border-radius: 0.5em;
		}
	}
</style>
