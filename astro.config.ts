import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { gameRepoUrl, launcherRepoUrl, siteBase, siteDescription, siteName, siteUrl } from './src/config';

// Astro wants the base without a trailing slash (except the root).
const base = siteBase === '/' ? '/' : siteBase.replace(/\/$/, '');

export default defineConfig({
	site: siteUrl,
	base,
	trailingSlash: 'ignore',
	redirects: {
		'/changelog': `${siteBase}docs/changelog/`,
	},
	integrations: [
		starlight({
			title: siteName,
			description: siteDescription,
			titleDelimiter: '·',
			disable404Route: true,
			favicon: '/favicon.ico',
			customCss: ['./src/styles/fonts.css', './src/styles/tokens.css', './src/styles/starlight.css'],
			components: {
				SiteTitle: './src/starlight/SiteTitle.astro',
				ThemeProvider: './src/starlight/ThemeProvider.astro',
				ThemeSelect: './src/starlight/ThemeSelect.astro',
				Footer: './src/starlight/Footer.astro',
				SocialIcons: './src/starlight/SocialIcons.astro',
			},
			social: [
				{ icon: 'github', label: 'Game repository', href: gameRepoUrl },
				{ icon: 'rocket', label: 'Launcher repository', href: launcherRepoUrl },
			],
			head: [
				{ tag: 'meta', attrs: { name: 'theme-color', content: '#070b1f' } },
				{ tag: 'link', attrs: { rel: 'icon', href: `${siteBase}favicon-32.png`, type: 'image/png', sizes: '32x32' } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${siteBase}apple-touch-icon.png` } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${siteUrl}${siteBase}og.png` } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
			],
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ label: 'Overview', slug: 'docs' },
						{ label: 'Getting started', slug: 'docs/getting-started' },
						{ label: 'Supported versions', slug: 'docs/supported-versions' },
						{ label: 'Dumping your disc', slug: 'docs/dumping-your-disc' },
					],
				},
				{
					label: 'Playing',
					items: [
						{ label: 'Using the launcher', slug: 'docs/using-the-launcher' },
						{ label: 'Controls', slug: 'docs/controls' },
						{ label: 'Troubleshooting and logs', slug: 'docs/troubleshooting' },
						{ label: 'FAQ', slug: 'docs/faq' },
					],
				},
				{
					label: 'More',
					items: [
						{ label: 'Mods', slug: 'docs/mods', badge: { text: 'Planned', variant: 'caution' } },
						{ label: 'For developers', slug: 'docs/developers' },
						{ label: 'Changelog', link: '/docs/changelog/' },
					],
				},
			],
		}),
	],
});
