<script lang="ts">
	const policy = `Privacy Policy for Bold Flight Studio and its apps, Manuscript, Contemplate, Relay, and MBench.
    Effective Date: December 23, 2024
    Bold Flight LLC ("we," "us," or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we handle information collected through our mobile applications, Manuscript, Contemplate, Relay, and MBench (the "Apps").
    No Personal Data Collection:
    We want to assure you that Manuscript, Contemplate, Relay, and MBench do not collect any personally identifiable information from its users. This includes, but is not limited to:
    Names
    Addresses
    Email addresses
    Phone numbers
    Location data
    Device identifiers
    Usage data
    Third-Party Services:
    We use TelemetryDeck for generic usage reporting. https://telemetrydeck.com/privacy/. This service may collect anonymized data only for the purpose of improving the app or service.
    Changes to This Privacy Policy:
    We may update this Privacy Policy from time to time. Any changes will be posted within the app or on our website at boldflight.com. Your continued use of the Apps following the posting of any changes constitutes acceptance of those changes.
    Contact Us:
    If you have any questions about this Privacy Policy, please contact us at:
    Bold Flight LLC
    701 Tillery St Unit 12 2409
    Austin TX 78702
    douglas@boldflight.com`;
</script>

<svelte:head>
	<title>Bold Flight - Privacy</title>
	<meta name="description" content="Bold Flight Privacy" />
</svelte:head>

<div class="bg-base-100 min-h-screen">
	<!-- Privacy Section -->
	<section id="privacy" class="px-4 py-20">
		<div>
			<h2 class="mb-8 text-4xl font-bold">Privacy Policy</h2>
			<p class="whitespace-pre-line text-xl">
				{policy}
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
