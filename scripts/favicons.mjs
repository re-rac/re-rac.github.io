// Generates the favicon set in public/ from src/assets/brand/rerac-icon.png:
//   favicon.ico (16, 32 and 48 px, PNG-encoded), favicon-32.png and apple-touch-icon.png (180 px).
// Run it after the icon changes:  node scripts/favicons.mjs
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('../src/assets/brand/rerac-icon.png', import.meta.url));
const out = (name) => new URL(`../public/${name}`, import.meta.url);
const png = (size) => sharp(src).resize(size, size, { kernel: 'lanczos3' }).png({ compressionLevel: 9 }).toBuffer();

// An ICO file whose images are stored as PNG, which every current browser reads.
function ico(images) {
	const header = Buffer.alloc(6 + 16 * images.length);
	header.writeUInt16LE(0, 0); // reserved
	header.writeUInt16LE(1, 2); // type: icon
	header.writeUInt16LE(images.length, 4);
	let offset = header.length;
	images.forEach(({ size, data }, i) => {
		const e = 6 + 16 * i;
		header.writeUInt8(size >= 256 ? 0 : size, e); // width
		header.writeUInt8(size >= 256 ? 0 : size, e + 1); // height
		header.writeUInt8(0, e + 2); // palette size
		header.writeUInt8(0, e + 3); // reserved
		header.writeUInt16LE(1, e + 4); // colour planes
		header.writeUInt16LE(32, e + 6); // bits per pixel
		header.writeUInt32LE(data.length, e + 8);
		header.writeUInt32LE(offset, e + 12);
		offset += data.length;
	});
	return Buffer.concat([header, ...images.map((i) => i.data)]);
}

const icoSizes = [16, 32, 48];
const icoImages = await Promise.all(icoSizes.map(async (size) => ({ size, data: await png(size) })));
await writeFile(out('favicon.ico'), ico(icoImages));
await writeFile(out('favicon-32.png'), await png(32));
await writeFile(out('apple-touch-icon.png'), await png(180));
console.log('wrote public/favicon.ico, public/favicon-32.png, public/apple-touch-icon.png');
