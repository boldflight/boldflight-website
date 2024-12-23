<script lang="ts">
	import { Sun, Moon, Menu } from 'lucide-svelte';

	let isDarkMode = $state(false);

	const apps = [
		{
			name: 'Manuscript',
			url: 'http://manuscript.faith',
			description: 'A searchable bible for deep thinkers'
		},
		{
			name: 'Contemplate',
			url: 'http://contemplate.faith',
			description: 'Daily spiritual habits for busy people'
		},
		{ name: 'Relay', url: 'http://relayx.ai', description: 'Social media for the rest of us' },
		{ name: 'SwiftOS', url: 'http://swiftos.dev', description: 'An intelligent OS for the future' }
	];

	$effect(() => {
		if (typeof window !== 'undefined') {
			isDarkMode =
				localStorage.getItem('theme') === 'dark' ||
				(!localStorage.getItem('theme') &&
					window.matchMedia('(prefers-color-scheme: dark)').matches);
		}
	});

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		const theme = isDarkMode ? 'dark' : 'light';
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}
</script>

<svelte:head>
	<title>Bold Flight - A Small but Mighty Studio</title>
	<meta name="description" content="Crafting apps and games that move the human spirit forward" />
</svelte:head>

<div class="bg-base-100 min-h-screen">
	<!-- Navbar -->
	<div class="navbar bg-base-100 fixed top-0 z-50 border-b">
		<div class="navbar-start">
			<div class="text-xl font-bold">Bold Flight</div>
		</div>
		<div class="navbar-end">
			<button
				class="btn btn-ghost mr-4"
				onclick={toggleTheme}
				aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
			>
				{#if isDarkMode}
					<Sun aria-hidden="true" />
				{:else}
					<Moon aria-hidden="true" />
				{/if}
			</button>

			<div class="hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="#home">Home</a></li>
					<li><a href="#apps">Apps</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>

			<div class="dropdown dropdown-end lg:hidden">
				<button class="btn btn-ghost" aria-label="Open menu">
					<Menu aria-hidden="true" />
				</button>
				<ul
					class="menu dropdown-content menu-sm rounded-box bg-base-100 z-[1] mt-3 w-52 p-2 shadow"
					tabindex="-1"
					role="menu"
				>
					<li role="none"><a href="#home" role="menuitem">Home</a></li>
					<li role="none"><a href="#apps" role="menuitem">Apps</a></li>
					<li role="none"><a href="#about" role="menuitem">About</a></li>
					<li role="none"><a href="#contact" role="menuitem">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Hero Section -->
	<section id="home" class="hero bg-base-200 min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Crafting code that moves the human spirit forward</h1>
				<!-- <p class="py-6 text-xl">Crafting apps and games that move the human spirit forward</p> -->
			</div>
		</div>
	</section>

	<!-- Apps Section -->
	<section id="apps" class="px-4 py-20">
		<div class="mx-auto max-w-6xl">
			<h2 class="mb-12 text-center text-4xl font-bold">Our Apps</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
				{#each apps as app}
					<div class="card bg-base-100 shadow-xl">
						<div class="card-body">
							<h3 class="card-title">{app.name}</h3>
							<p>{app.description}</p>
							<div class="card-actions justify-end">
								<a href={app.url} target="_blank" rel="noopener noreferrer" class="btn btn-primary"
									>Visit Site</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="bg-base-200 px-4 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-8 text-4xl font-bold">About Us</h2>
			<p class="text-xl">
				Bold Flight is a small but mighty studio committed to making apps and games that inspire,
				delight, and empower.
			</p>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="px-4 py-20">
		<div class="mx-auto max-w-4xl text-center">
			<h2 class="mb-8 text-4xl font-bold">Contact Us</h2>
			<p class="text-xl">
				Email: <a href="mailto:douglas@boldflight.com" class="link link-primary"
					>info@boldflight.com</a
				>
			</p>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer footer-center bg-base-200 text-base-content p-10">
		<div>
			<p>© 2024 Bold Flight LLC. All rights reserved.</p>
		</div>
	</footer>
</div>
