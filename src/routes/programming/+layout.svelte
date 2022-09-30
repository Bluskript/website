<script lang="ts">
	import { page } from '$app/stores';
	import MenuItem from '../../components/MenuItem.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div class="flex flex-col md:flex-row gap-2 flex-1">
	<div class="flex flex-col gap-1">
		{#each Object.entries(data.projects) as [path, { name }]}
			<MenuItem href={`/programming/${path}`} active={$page.url.pathname === `/programming/${path}`}
				>{name}</MenuItem
			>
		{/each}
	</div>
	<div class="flex-1 flex bg-stripes relative body">
		<slot />
	</div>
</div>

<style lang="postcss">
	.bg-stripes {
		background: url('/stripe.svg');
		@apply bg-highlight bg-opacity-10;
	}

	.body {
		@apply shadow-highlight;
		filter: drop-shadow(0px 0px 3px var(--un-shadow-color));
	}
</style>
