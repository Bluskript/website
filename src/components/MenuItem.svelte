<script lang="ts">
	export let active: boolean = false;
	export let href: string | undefined = undefined;
</script>

<a class="menuitem" class:active {href}>
	<svg
		width="65"
		height="61"
		viewBox="0 0 65 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="side-graphic"
	>
		<path
			d="M65 5.44522V12.2517H8.43511V52.0934H65V55.5548H35.229L31.2595 61H4.46565L0 54.8741V31.9906H4.46565V25.1841H0V22.4615L4.46565 16.3357V5.44522L8.43511 0H31.2595L35.229 5.44522H65Z"
			fill="currentColor"
		/>
	</svg>
	<slot />
</a>

<style lang="postcss">
	.side-graphic {
		@apply text-highlight absolute -top-5.5 -left-1.5;
	}
	.menuitem {
		@apply cursor-pointer p-3 bg-highlight bg-opacity-25 rounded-md w-min min-w-80 transition-transform duration-200 text-white text-xs relative shadow-highlight no-underline;
		background-image: url('/stripe.svg');
		&:hover {
			@apply translate-x-2;
		}
		&.active,
		&:hover {
			@apply bg-opacity-30;
			filter: drop-shadow(0px 0px 6px var(--un-shadow-color));
			& > .side-graphic {
				@apply text-white;
			}
		}
	}
</style>
