import type { SvelteComponentTyped } from 'svelte';

/** @type {import('./$types').PageLoad} */
export async function load({ params: { project } }: { params: { project?: string } }) {
	const { default: component, metadata } = (await import(`../projects/${project}.svx`)) as {
		metadata: {
			name: string;
			links: string[];
			logo: string;
		};
		default: typeof SvelteComponentTyped;
	};
	return {
		component,
		metadata
	};
}
