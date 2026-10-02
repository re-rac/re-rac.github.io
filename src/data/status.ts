/**
 * Hand-maintained estimate. Update by hand.
 *
 * The /status page and the home page's "Where it stands" lists both read this file, so they always agree. When
 * progress changes, edit the numbers and sentences here and set `updated` to the day you did it.
 *
 * - `planets`: each planet in the order you visit them, with one rough figure (how much of it works, as a player would
 *   judge it, rounded to 5) and an optional plain sentence. No planet goes above `ceiling`: the last tenth is kept
 *   for polish and testing, so 90 means "everything is in".
 * - `highlights`: the short lists on the home page. Keep them in line with `planets`.
 */

export interface Planet {
	name: string;
	/** How much of the planet works, as a player would judge it, 0–`ceiling`, rounded to 5. */
	percent: number;
	/** One plain sentence, when there is something specific to say. */
	text?: string;
}

/** The highest figure a planet shows until it has been polished and tested. */
export const ceiling = 90;

/** The day this file was last brought up to date (YYYY-MM-DD). */
export const updated = '2026-10-03';

const done = 'Everything on the planet is in. What’s left is polish and testing.';
const partly = 'Most of the planet works. Some of its enemies and machines are still to come.';

export const planets: Planet[] = [
	{ name: 'Veldin', percent: 90, text: done },
	{ name: 'Novalis', percent: 90, text: done },
	{ name: 'Aridia', percent: 90, text: done },
	{ name: 'Kerwan', percent: 90, text: done },
	{ name: 'Eudora', percent: 80, text: 'Everything on the planet is in and waiting for a first full play-through.' },
	{ name: 'Rilgar', percent: 55, text: partly },
	{ name: 'Blarg Station', percent: 45, text: partly },
	{ name: 'Umbris', percent: 45, text: partly },
	{ name: 'Batalia', percent: 50, text: partly },
	{ name: 'Gaspar', percent: 50, text: partly },
	{ name: 'Orxon', percent: 40, text: partly },
	{ name: 'Pokitaru', percent: 60, text: partly },
	{ name: 'Hoven', percent: 50, text: partly },
	{ name: 'Gemlik Base', percent: 50, text: partly },
	{ name: 'Oltanis', percent: 35, text: partly },
	{ name: 'Quartu', percent: 40, text: partly },
	{ name: 'Kalebo III', percent: 50, text: partly },
	{ name: 'Drek’s Fleet', percent: 40, text: partly },
	{ name: 'Veldin, the return', percent: 85, text: 'Drek’s base, the final fight and the ending are in, waiting for testing.' },
];

/** The home page's "Where it stands" lists: short summaries of `planets`. */
export const highlights = {
	working: [
		'Veldin, Novalis, Aridia and Kerwan, with everything on them.',
		'Ratchet’s moves, the wrench, the weapons and the gadgets.',
		'The main menu, saving, and flying between planets.',
		'Cutscenes, with their sound and music.',
	],
	toCome: ['The rest of the planets’ enemies and machines', 'Polish and testing on every planet', 'Windows and Linux', 'Mods'],
};

/** `updated` as "3 October 2026". */
export function formatUpdated(): string {
	const [y, m, d] = updated.split('-').map(Number);
	return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		timeZone: 'UTC',
	});
}
