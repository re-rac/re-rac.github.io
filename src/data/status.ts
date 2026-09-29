/**
 * Hand-maintained estimate. Update by hand.
 *
 * The /status page and the home page's "Where it stands" lists both read this file, so they always agree. When
 * progress changes, edit the numbers and lists here and set `updated` to the day you did it.
 *
 * - `planets`: a rough share of each planet's objects (enemies, crates, doors, characters…) that already work,
 *   rounded to the nearest 5 %. It is an estimate, not a measurement.
 * - `areas`: each item is 'done', 'progress' (works, with pieces missing) or 'todo'. An area's bar and its
 *   "x of y done" are counted from these states, so keep the lists honest and the bar follows.
 * - `highlights`: the short lists on the home page. Keep them in line with `areas`.
 */

export type ItemState = 'done' | 'progress' | 'todo';

export interface Planet {
	name: string;
	/** Rough share of the planet's objects that work, 0–100, rounded to 5. */
	percent: number;
}

export interface Area {
	name: string;
	items: { title: string; state: ItemState }[];
}

/** The day this file was last brought up to date (YYYY-MM-DD). */
export const updated = '2026-09-29';

export const planets: Planet[] = [
	{ name: 'Veldin', percent: 95 },
	{ name: 'Novalis', percent: 95 },
	{ name: 'Aridia', percent: 80 },
	{ name: 'Kerwan', percent: 65 },
	{ name: 'Eudora', percent: 75 },
	{ name: 'Rilgar', percent: 85 },
	{ name: 'Blarg Station', percent: 65 },
	{ name: 'Umbris', percent: 80 },
	{ name: 'Batalia', percent: 90 },
	{ name: 'Gaspar', percent: 95 },
	{ name: 'Orxon', percent: 80 },
	{ name: 'Pokitaru', percent: 65 },
	{ name: 'Hoven', percent: 70 },
	{ name: 'Gemlik Base', percent: 90 },
	{ name: 'Oltanis', percent: 65 },
	{ name: 'Quartu', percent: 75 },
	{ name: 'Kalebo III', percent: 80 },
	{ name: 'Drek’s Fleet', percent: 70 },
	{ name: 'Veldin (return)', percent: 80 },
];

export const areas: Area[] = [
	{
		name: 'Ratchet & movement',
		items: [
			{ title: 'Running, jumping, gliding and swinging', state: 'done' },
			{ title: 'Grinding, swimming and the rarer moves', state: 'progress' },
			{ title: 'The sparks, dust and voice lines around his moves', state: 'progress' },
			{ title: 'Each planet’s own camera angles', state: 'todo' },
			{ title: 'Jump and landing timing matched to the original', state: 'todo' },
			{ title: 'Nanotech health upgrades', state: 'todo' },
			{ title: 'Controller rumble', state: 'todo' },
		],
	},
	{
		name: 'Weapons & gadgets',
		items: [
			{ title: 'The Blaster, Devastator, R.Y.N.O. and Tesla Claw', state: 'done' },
			{ title: 'The Suck Cannon, Taunter and Morph-o-Ray', state: 'done' },
			{ title: 'The Bomb Glove, Mine Glove and Glove of Doom', state: 'progress' },
			{ title: 'The Walloper and the Visibomb', state: 'progress' },
			{ title: 'Auto-aim and lock-on', state: 'progress' },
			{ title: 'The Hydrodisplacer, Trespasser, Metal Detector and PDA', state: 'todo' },
			{ title: 'Gold weapons', state: 'todo' },
		],
	},
	{
		name: 'Enemies & bosses',
		items: [
			{ title: 'Enemies reacting to every weapon', state: 'done' },
			{ title: 'Enemies that patrol, hop and fly along set paths', state: 'progress' },
			{ title: 'The rest of each planet’s enemies', state: 'progress' },
			{ title: 'Burning, sparking and other hit effects', state: 'progress' },
			{ title: 'Enemy waves that keep coming', state: 'todo' },
			{ title: 'Boss fights and their health bars', state: 'todo' },
		],
	},
	{
		name: 'Menus, map & saves',
		items: [
			{ title: 'The pause menu and its pages', state: 'progress' },
			{ title: 'Health, bolts and ammo on screen', state: 'progress' },
			{ title: 'The in-game map', state: 'progress' },
			{ title: 'Help messages', state: 'progress' },
			{ title: 'The Gadgetron vendor', state: 'progress' },
			{ title: 'The title screen and main menu', state: 'todo' },
			{ title: 'Saving and loading', state: 'todo' },
			{ title: 'Skill points, challenge mode and cheats', state: 'todo' },
		],
	},
	{
		name: 'Planets & travel',
		items: [
			{ title: 'All 19 planets load and can be explored', state: 'done' },
			{ title: 'Each planet’s story, puzzles and characters', state: 'progress' },
			{ title: 'Bolt cranks, teleporters and moving platforms', state: 'todo' },
			{ title: 'Objects that appear when the story calls for them', state: 'todo' },
			{ title: 'Flying the ship between planets', state: 'todo' },
			{ title: 'Space combat', state: 'todo' },
			{ title: 'Hoverboard races', state: 'todo' },
		],
	},
	{
		name: 'Sound & visuals',
		items: [
			{ title: 'Lighting, sky and fog on every planet', state: 'done' },
			{ title: 'The sea, lava and water', state: 'done' },
			{ title: 'Glowing lights and shiny chrome', state: 'done' },
			{ title: 'Smoke, sparks, fire and other effects', state: 'progress' },
			{ title: 'Dripping water, flowing lava and the view underwater', state: 'progress' },
			{ title: 'Cutscenes and movies', state: 'progress' },
			{ title: 'Sound effects, music and voices', state: 'progress' },
			{ title: 'Reflections, soft shadows and flickering lights', state: 'todo' },
		],
	},
	{
		name: 'Clank & other characters',
		items: [
			{ title: 'Talking to characters', state: 'progress' },
			{ title: 'Characters who give Ratchet items and missions', state: 'progress' },
			{ title: 'The Clank and Giant Clank sections', state: 'todo' },
			{ title: 'The Hologuise disguise', state: 'todo' },
			{ title: 'Characters turning to look at Ratchet', state: 'todo' },
		],
	},
	{
		name: 'Launcher',
		items: [
			{ title: 'Setting the game up from your own disc', state: 'done' },
			{ title: 'Installing ReRAC and starting the game', state: 'done' },
			{ title: 'Stopping a running game from the launcher', state: 'todo' },
			{ title: 'Official downloads and automatic updates', state: 'todo' },
			{ title: 'Windows and Linux', state: 'todo' },
			{ title: 'A signed Mac app that opens without warnings', state: 'todo' },
			{ title: 'More disc image formats', state: 'todo' },
			{ title: 'Installing mods and switching them on or off', state: 'todo' },
		],
	},
];

/** The home page's "Where it stands" lists: short summaries of `areas`. */
export const highlights = {
	working: [
		'All 19 planets load, with their lighting, sky, water and effects.',
		'Ratchet’s moves, the wrench and most of the weapons.',
		'The pause menu, the HUD, the map and the Gadgetron vendor.',
		'Cutscenes, movies, sound effects and music.',
	],
	toCome: [
		'Planet travel and the ship',
		'The main menu, saving and loading',
		'The Clank, Giant Clank and Hologuise sections',
		'Hoverboard races and space combat',
	],
};

/** Counts for one area: done, in progress and the total. */
export function areaCounts(area: Area) {
	const done = area.items.filter((i) => i.state === 'done').length;
	const progress = area.items.filter((i) => i.state === 'progress').length;
	return { done, progress, total: area.items.length };
}

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
