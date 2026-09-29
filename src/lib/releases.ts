/**
 * Build-time GitHub release data. Nothing here runs in the browser.
 *
 * Every fetch is best effort: when the network is down, the repo is private or has no releases yet, or the
 * API rate limit is hit, the functions return empty data and the pages show "Coming soon" instead of a
 * version. Nothing is ever invented.
 */
import { gameRepo, launcherRepo, org, platforms, type Platform } from '../config';

export interface ReleaseAsset {
	name: string;
	size: number;
	downloadUrl: string;
}

export interface Release {
	repo: string;
	tag: string;
	name: string;
	/** ISO date string. */
	publishedAt: string;
	htmlUrl: string;
	/** GitHub-rendered (and GitHub-sanitised) HTML of the release notes. */
	bodyHtml: string;
	prerelease: boolean;
	assets: ReleaseAsset[];
}

export interface PlatformDownload extends Platform {
	/** Present only when the latest launcher release carries this platform's stable asset. */
	size?: number;
	available: boolean;
}

export interface LauncherInfo {
	/** The latest non-draft, non-prerelease launcher release, if there is one. */
	latest?: Release;
	downloads: PlatformDownload[];
}

const cache = new Map<string, Promise<Release[]>>();

/** All published (non-draft) releases of `repo`, newest first. Empty on any failure. */
export function fetchReleases(repo: string): Promise<Release[]> {
	let p = cache.get(repo);
	if (!p) {
		p = load(repo);
		cache.set(repo, p);
	}
	return p;
}

async function load(repo: string): Promise<Release[]> {
	// Local preview only: read GitHub-API-shaped JSON from <dir>/<repo>.json instead of the network.
	const fixtures = process.env.RELEASES_FIXTURES;
	if (fixtures) {
		const { readFile } = await import('node:fs/promises');
		try {
			const raw = JSON.parse(await readFile(`${fixtures}/${repo}.json`, 'utf8'));
			console.warn(`[releases] RELEASES_FIXTURES: using local sample data for ${repo} (never deploy this)`);
			return parse(repo, raw);
		} catch {
			return [];
		}
	}
	if (process.env.RELEASES_OFFLINE === '1') {
		console.info(`[releases] RELEASES_OFFLINE=1: using placeholder data for ${org}/${repo}`);
		return [];
	}
	const url = `https://api.github.com/repos/${org}/${repo}/releases?per_page=50`;
	const headers: Record<string, string> = {
		// "full" returns both the markdown body and GitHub's rendered, sanitised body_html.
		Accept: 'application/vnd.github.full+json',
		'X-GitHub-Api-Version': '2022-11-28',
		'User-Agent': 'rerac-site-build',
	};
	if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

	try {
		const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
		if (!res.ok) {
			console.warn(`[releases] ${org}/${repo}: HTTP ${res.status}; using placeholder data`);
			return [];
		}
		const releases = parse(repo, await res.json());
		console.info(`[releases] ${org}/${repo}: ${releases.length} release(s)`);
		return releases;
	} catch (err) {
		console.warn(`[releases] ${org}/${repo}: fetch failed (${(err as Error).message}); using placeholder data`);
		return [];
	}
}

function parse(repo: string, raw: unknown): Release[] {
	if (!Array.isArray(raw)) return [];
	return raw
		.filter((r: any) => r && !r.draft && r.published_at)
		.map(
			(r: any): Release => ({
				repo,
				tag: String(r.tag_name ?? ''),
				name: String(r.name || r.tag_name || ''),
				publishedAt: String(r.published_at),
				htmlUrl: String(r.html_url ?? ''),
				bodyHtml: String(r.body_html ?? ''),
				prerelease: Boolean(r.prerelease),
				assets: Array.isArray(r.assets)
					? r.assets.map((a: any) => ({
							name: String(a.name),
							size: Number(a.size) || 0,
							downloadUrl: String(a.browser_download_url ?? ''),
						}))
					: [],
			}),
		)
		.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getLauncherInfo(): Promise<LauncherInfo> {
	const releases = await fetchReleases(launcherRepo);
	// `releases/latest/download/...` resolves to the newest non-prerelease, so match that here.
	const latest = releases.find((r) => !r.prerelease);
	const downloads = platforms.map((p): PlatformDownload => {
		const asset = latest?.assets.find((a) => a.name === p.asset);
		return { ...p, available: Boolean(asset), size: asset?.size };
	});
	return { latest, downloads };
}

export interface ChangelogEntry extends Release {
	kind: 'Game' | 'Launcher';
}

export interface ChangelogDay {
	/** YYYY-MM-DD */
	date: string;
	entries: ChangelogEntry[];
}

/** Both repos' releases, merged and grouped by UTC publish date, newest first. */
export async function getChangelog(): Promise<ChangelogDay[]> {
	const [game, launcher] = await Promise.all([fetchReleases(gameRepo), fetchReleases(launcherRepo)]);
	const all: ChangelogEntry[] = [
		...game.map((r) => ({ ...r, kind: 'Game' as const })),
		...launcher.map((r) => ({ ...r, kind: 'Launcher' as const })),
	].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

	const days: ChangelogDay[] = [];
	for (const e of all) {
		const date = e.publishedAt.slice(0, 10);
		const last = days[days.length - 1];
		if (last && last.date === date) last.entries.push(e);
		else days.push({ date, entries: [e] });
	}
	return days;
}

export function formatBytes(n: number): string {
	if (!n) return '';
	const units = ['B', 'KB', 'MB', 'GB'];
	let i = 0;
	let v = n;
	while (v >= 1000 && i < units.length - 1) {
		v /= 1000;
		i++;
	}
	return `${v >= 100 || i === 0 ? Math.round(v) : v.toFixed(1)} ${units[i]}`;
}

export function formatDate(iso: string): string {
	const d = new Date(iso.length === 10 ? iso + 'T00:00:00Z' : iso);
	return d.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}
