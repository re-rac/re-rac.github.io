/**
 * The one place for the site's GitHub names, URLs and download asset names.
 *
 * Change `org` here (or set the env vars below at build time) and every link, download button and release
 * fetch follows. The site itself is the repo `re-rac/re-rac.github.io`, served at https://re-rac.github.io.
 *
 * Build-time env overrides (all optional):
 *   RERAC_ORG       GitHub owner of the repos                 (default: "re-rac")
 *   SITE_URL        Origin the site is served from             (default: https://<org>.github.io)
 *   SITE_BASE       Path prefix, "/" for an org/user Pages site or a custom domain,
 *                   "/<repo>" for a project Pages site          (default: "/")
 *   GITHUB_TOKEN    Raises the GitHub API rate limit for the release fetch
 *   RELEASES_OFFLINE=1  Skip the release fetch and use the placeholder data
 */

const env = (typeof process !== 'undefined' ? process.env : {}) as Record<string, string | undefined>;

export const org = env.RERAC_ORG || 're-rac';
export const launcherRepo = 'rerac-launcher';
export const gameRepo = 'rerac';

export const siteUrl = (env.SITE_URL || `https://${org}.github.io`).replace(/\/+$/, '');
/** Always starts and ends with "/". */
export const siteBase = normaliseBase(env.SITE_BASE || '/');

export const siteName = 'ReRAC';
/** Follows the name in the home page title. */
export const siteSubtitle = 'Ratchet & Clank, rebuilt for PC';
/** The hero headline. */
export const siteTagline = 'Ratchet & Clank, rebuilt for PC.';
export const siteDescription =
	'ReRAC is a fan-made PC port of Ratchet & Clank, the 2002 PlayStation 2 classic. It runs natively on your computer, using your own copy of the game.';

/**
 * Which pieces of the art in src/assets/third-party/ the pages use. Both false ships only original art.
 *   logo        the Ratchet & Clank (2002) logo, shown small under the ReRAC logo in the home page hero
 *   background  the in-game scene in the home page hero's "monitor" panel
 */
export const thirdPartyArt = {
	logo: false,
	background: true,
};

/**
 * The home page download block. Both stay false until the launcher has real releases.
 *   launcherDownloadEnabled  true: the big button reads "Download the Launcher" and links to the installer for the
 *                            visitor's OS (from the release data). false: a disabled "Coming soon" button with no
 *                            link, and the OS-detection script is not loaded.
 *   showPlatformDownloads    true: under the button, the latest-release line, one card per platform and a short
 *                            note. false: none of these are rendered.
 */
export const launcherDownloadEnabled = false;
export const showPlatformDownloads = false;

export const repoUrl = (repo: string) => `https://github.com/${org}/${repo}`;
export const launcherRepoUrl = repoUrl(launcherRepo);
export const gameRepoUrl = repoUrl(gameRepo);
export const gameReadmeUrl = `${gameRepoUrl}#readme`;
export const launcherReleasesUrl = `${launcherRepoUrl}/releases`;

export type PlatformId = 'macos-arm64' | 'macos-x64' | 'windows-x64' | 'linux-x86_64';
export type OsFamily = 'macos' | 'windows' | 'linux';

export interface Platform {
	id: PlatformId;
	os: OsFamily;
	label: string;
	detail: string;
	/** Stable asset name every launcher release must attach. */
	asset: string;
	/** True only where the launcher and game have actually been built and run. */
	tested: boolean;
}

/** The stable asset names. A release that attaches these makes the buttons below work. */
export const platforms: Platform[] = [
	{
		id: 'macos-arm64',
		os: 'macos',
		label: 'macOS',
		detail: 'Apple Silicon',
		asset: 'rerac-launcher-macos-arm64.dmg',
		tested: true,
	},
	{
		id: 'macos-x64',
		os: 'macos',
		label: 'macOS',
		detail: 'Intel',
		asset: 'rerac-launcher-macos-x64.dmg',
		tested: false,
	},
	{
		id: 'windows-x64',
		os: 'windows',
		label: 'Windows',
		detail: 'x64 installer',
		asset: 'rerac-launcher-windows-x64.msi',
		tested: false,
	},
	{
		id: 'linux-x86_64',
		os: 'linux',
		label: 'Linux',
		detail: 'x86_64 AppImage',
		asset: 'rerac-launcher-linux-x86_64.AppImage',
		tested: false,
	},
];

export const latestDownloadUrl = (asset: string) =>
	`https://github.com/${org}/${launcherRepo}/releases/latest/download/${asset}`;

function normaliseBase(base: string): string {
	let b = base.trim();
	if (!b.startsWith('/')) b = '/' + b;
	if (!b.endsWith('/')) b = b + '/';
	return b.replace(/\/{2,}/g, '/');
}
