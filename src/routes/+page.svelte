<script lang="ts">
	let { data } = $props();

	const apps = [
		{ name: 'Manuscript', url: 'http://manuscript.faith', description: 'A powerful writing tool' },
		{
			name: 'Contemplate',
			url: 'http://contemplate.faith',
			description: 'Mindfulness and meditation'
		},
		{ name: 'Relay', url: 'http://relayx.ai', description: 'Advanced communication' }
	];
</script>

<svelte:head>
	<title>Bold Flight - A Small but Mighty Studio</title>
	<meta name="description" content="Building apps and games that move the human spirit forward" />
</svelte:head>

<div class="bg-base-100 min-h-screen">
	<!-- Navbar -->
	<div class="navbar bg-base-100 fixed top-0 z-50 border-b">
		<div class="navbar-start">
			<div class="text-xl font-bold">Bold Flight</div>
		</div>
		<div class="navbar-end">
			<div class="hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="#home">Home</a></li>
					<li><a href="#apps">Apps</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
			<div class="dropdown dropdown-end lg:hidden">
				<label tabindex="0" class="btn btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</label>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
				>
					<li><a href="#home">Home</a></li>
					<li><a href="#apps">Apps</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Hero Section -->
	<section id="home" class="hero bg-base-200 min-h-screen">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">A small but mighty studio</h1>
				<p class="py-6 text-xl">Building apps and games that move the human spirit forward</p>
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
			<p class="text-xl">App Studio is dedicated to creating apps that make life easier.</p>
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
