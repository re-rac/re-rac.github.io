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
export const updated = '2026-10-05';

const done = 'Everything on the planet is in. What’s left is polish and testing.';
const untested = 'Everything on the planet is in and waiting for a first full play-through.';

export const planets: Planet[] = [
	{ name: 'Veldin', percent: 90, text: done },
	{ name: 'Novalis', percent: 90, text: done },
	{ name: 'Aridia', percent: 90, text: done },
	{ name: 'Kerwan', percent: 90, text: done },
	{ name: 'Eudora', percent: 80, text: untested },
	{ name: 'Rilgar', percent: 75, text: untested },
	{ name: 'Blarg Station', percent: 75, text: untested },
	{ name: 'Umbris', percent: 75, text: untested },
	{ name: 'Batalia', percent: 75, text: untested },
	{ name: 'Gaspar', percent: 75, text: untested },
	{ name: 'Orxon', percent: 75, text: untested },
	{ name: 'Pokitaru', percent: 75, text: untested },
	{ name: 'Hoven', percent: 75, text: untested },
	{ name: 'Gemlik Base', percent: 75, text: untested },
	{ name: 'Oltanis', percent: 75, text: untested },
	{ name: 'Quartu', percent: 75, text: untested },
	{ name: 'Kalebo III', percent: 75, text: untested },
	{ name: 'Drek’s Fleet', percent: 75, text: untested },
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
	toCome: ['A full play-through of the other planets', 'Polish and testing', 'Windows and Linux', 'Mods'],
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
