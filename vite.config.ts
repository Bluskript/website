import { sveltekit } from '@sveltejs/kit/vite';
import transformDirective from '@unocss/transformer-directives';
import { presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss';
import Unocss from 'unocss/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		Unocss({
			presets: [
				presetUno(),
				presetIcons({
					extraProperties: {
						display: 'inline-block'
					}
				}),
				presetWebFonts({
					provider: 'google',
					fonts: {
						sans: 'Michroma'
					}
				}),
				presetTypography()
			],
			transformers: [transformDirective()],
			theme: {
				colors: {
					highlight: '#8CA5FF',
					background: '#00101E',
					darker: '#000910'
				}
			}
		})
	]
};

export default config;
