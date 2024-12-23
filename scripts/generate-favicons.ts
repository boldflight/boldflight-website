// scripts/generate-favicons.ts
import sharp from 'sharp';

const sizes = {
	192: 'icon-192.png',
	512: 'icon-512.png',
	180: 'apple-touch-icon.png',
	32: 'favicon.png'
};

async function generateFavicons() {
	const source = 'static/favicon/favicon.svg'; // Your source image
	const outputDir = 'static/favicon';

	for (const [size, filename] of Object.entries(sizes)) {
		await sharp(source)
			.resize(parseInt(size), parseInt(size))
			.png()
			.toFile(`${outputDir}/${filename}`);
	}
}

generateFavicons().catch(console.error);
