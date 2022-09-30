<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex-1 px-2">
	<article class="prose text-base">
		<svelte:component this={data.component} />
	</article>
</div>
<img src="/sidebar-frame1.svg" class="w-10 h-full hidden lg:block" alt="sidebar-frame1" />
<div class="flex flex-col border-l-4 border-highlight border-opacity-50 w-48">
	<div class="p-2 flex-1 w-full">
		<p class="text-sm">LINKS</p>
		{#each data.metadata.links as link}
			<a target="_blank" class="hover:underline flex items-center justify-center gap-2" href={link}>
				<span class="truncate inline text-xs flex-1">{link}</span>
				<span class="i-mdi-open-in-new text-sm" />
			</a>
		{/each}
	</div>
	<div
		class="h-32 p-3 relative border-t-4 border-highlight border-opacity-50 flex items-center justify-center"
	>
		<img
			src="/sidebar-frame2.svg"
			class="absolute top-0 left-0 h-10 w-full hidden lg:block"
			alt="sidebar-frame2"
		/>
		<img src={data.metadata.logo} class="h-full" alt={`${data.metadata.name} Logo`} />
	</div>
</div>
