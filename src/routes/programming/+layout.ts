export interface Project {
	name: string;
}

/** @type {import('./$types').LayoutLoad} */
export function load(): { projects: Record<string, Project> } {
	return {
		projects: {
			harmony: {
				name: 'Harmony'
			},
			saber: {
				name: 'Saber'
			},
			'team-orion': {
				name: 'Team Orion - Soccer Robotics'
			},
			'vite-plugin-inline-css-modules': {
				name: 'vite-plugin-inline-css-modules'
			}
		}
	};
}
