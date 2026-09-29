/**
 * Hand-maintained estimate. Update by hand.
 *
 * The /status page and the home page's "Where it stands" lists both read this file, so they always agree. When
 * progress changes, edit the numbers and sentences here and set `updated` to the day you did it.
 *
 * - `areas`: a few broad parts of the game, each with one rough figure (how playable it is, as a player would judge
 *   it, rounded to 5 and kept conservative) and one or two plain sentences on what works and what is missing.
 * - `highlights`: the short lists on the home page. Keep them in line with `areas`.
 */

export interface Area {
	name: string;
	/** How playable this part is, as a player would judge it, 0–100, rounded to 5. */
	percent: number;
	/** One or two plain sentences: what works, and what is still missing. */
	text: string;
}

/** The day this file was last brought up to date (YYYY-MM-DD). */
export const updated = '2026-09-29';

export const areas: Area[] = [
	{
		name: 'Playing as Ratchet',
		percent: 50,
		text: 'Running, jumping, gliding, the wrench and most of the weapons work. Some weapons, most of the gadgets and the exact feel of his jumps are still to come.',
	},
	{
		name: 'The planets',
		percent: 40,
		text: 'Every planet loads with its lighting, water and effects, and Veldin and Novalis are the furthest along. Many enemies, the bosses and the switches, lifts and platforms that open the way forward are still missing.',
	},
	{
		name: 'The story',
		percent: 15,
		text: 'Cutscenes play with their sound and music. Flying between planets, the Clank sections and the tasks characters give Ratchet are still to come.',
	},
	{
		name: 'Menus and saving',
		percent: 30,
		text: 'The pause menu, the map and the Gadgetron vendor mostly work. The main menu, saving and loading are still to come.',
	},
	{
		name: 'The launcher',
		percent: 40,
		text: 'It sets the game up from your own disc and starts it on a Mac. Downloads, updates, Windows and Linux, and mods are still to come.',
	},
];

/** The home page's "Where it stands" lists: short summaries of `areas`. */
export const highlights = {
	working: [
		'Every planet loads, with its lighting, water and effects.',
		'Ratchet’s moves, the wrench and most of the weapons.',
		'The pause menu, the map and the Gadgetron vendor.',
		'Cutscenes, with their sound and music.',
	],
	toCome: ['Flying between planets', 'Boss fights', 'The Clank sections', 'The main menu, saving and loading'],
};

/** `updated` as "29 September 2026". */
export function formatUpdated(): string {
	const [y, m, d] = updated.split('-').map(Number);
	return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}
