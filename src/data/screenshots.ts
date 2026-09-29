/**
 * Screenshot slots on the home page. Only slots with an image are shown, and the whole row stays hidden until
 * at least one has one.
 *
 * To fill a slot: add the image under src/assets/screenshots/ (your own capture of ReRAC, not art from
 * the internet), import it here and set `image` and `alt`. Example:
 *
 *   import novalis from '../assets/screenshots/novalis.webp';
 *   { label: 'Novalis', caption: '...', image: novalis, alt: 'Ratchet on the Novalis cliffs, rendered by ReRAC' }
 */
import type { ImageMetadata } from 'astro';

export interface ScreenshotSlot {
	label: string;
	caption: string;
	image?: ImageMetadata;
	alt?: string;
}

export const screenshots: ScreenshotSlot[] = [
	{ label: 'Slot 01', caption: 'In-game capture, coming soon' },
	{ label: 'Slot 02', caption: 'In-game capture, coming soon' },
	{ label: 'Slot 03', caption: 'In-game capture, coming soon' },
];
