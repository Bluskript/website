<script>
	import { page } from '$app/stores';
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
	import '../app.postcss';
</script>

<div class="w-full h-full overflow-hidden absolute top-0 left-0">
	<img
		class="absolute -top-[10vh] -left-[10vw] w-[115vw] h-[115vh] max-w-none object-cover blur-sm contrast-130 saturate-40"
		src="/portfoliobg.png"
		alt="background"
		loading="lazy"
	/>
</div>
<div class="w-full h-full flex items-center justify-center">
	<div class="absolute top-0 left-0 w-full h-full z-0">
		<img
			src="/circuits1.svg"
			class="absolute top-0 w-full animate-pulse"
			alt="circuit background 1"
		/>
		<img
			src="/circuits1.svg"
			class="absolute bottom-0 right-0 w-full transform rotate-180"
			alt="circuit background 1"
		/>
	</div>
	<div class="flex gap-2 justify-center h-150 w-full z-1">
		<div class="hidden lg:flex flex-col gap-1">
			<div class="side-tile" />
			<div class="bg-highlight bg-opacity-50 w-4 h-4" />
			<div class="bg-highlight bg-opacity-25 w-4 h-4" />
			<div class="bg-highlight bg-opacity-5 w-4 h-4" />
		</div>
		<div
			class="border-highlight border-3 rounded-lg p-1 section-backdrop w-[95%] lg:w-60ch xl:w-70ch"
		>
			<div class="bg-background h-full rounded-md p-2 flex flex-col">
				<h1 class="text-3xl tracking-[0.3em]">BLUSK</h1>
				<div class="w-min my-2 flex flex-col">
					<hr class="h-0.5 border-none bg-highlight rounded-full w-full" />
					<nav class="navlinks">
						<a href="/programming" class:active={$page.url.pathname.startsWith('/programming')}
							>PROGRAMMING</a
						>
						//
						<a href="/music" class:active={$page.url.pathname === '/music'}>MUSIC</a> //
						<a href="/art" class:active={$page.url.pathname === '/art'}>ART</a>
					</nav>
				</div>
				<div class="bg-darker rounded-md p-3 flex-1 flex flex-col relative">
					<slot />
					<svg
						width="262"
						height="56"
						viewBox="0 0 262 56"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="absolute bottom-0 left-0 opacity-10 graphic-bottom"
					>
						<path
							d="M0 14V7V0H70L77 7V21.5H176L184.5 30H77V37.5H176L184.5 46H252L261.5 55.5H0V46H70V25L59 14H0Z"
							fill="currentColor"
						/>
						<path d="M0 41.5V19H58.5L64.5 25V41.5H0Z" fill="currentColor" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html, body) {
		@apply w-full h-full font-sans text-highlight;
	}

	.graphic-bottom {
		filter: drop-shadow(0px 0px 20px var(--un-shadow-color));
	}

	.section-backdrop {
		background: url('/graph-paper.svg');
		background-size: 40px;
		filter: drop-shadow(0px 0px 15px var(--un-shadow-color));
		@apply shadow-highlight;
	}

	.navlinks {
		@apply text-sm flex gap-2;
		& a:hover {
			@apply text-white;
		}

		& a.active {
			@apply text-white;
			&:hover {
				@apply text-highlight;
			}
		}
	}
</style>
