<p align="center">
  <img src="src/assets/brand/rerac-logo.png" alt="ReRAC" width="420">
</p>

# ReRAC website

The website of **ReRAC**, the unofficial native PC port of Ratchet & Clank (PS2, 2002), served at
<https://re-rac.github.io>: a showcase home page with the ReRAC Launcher download, and the player documentation under
`/docs`. The game lives in [re-rac/rerac](https://github.com/re-rac/rerac) and the launcher in
[re-rac/rerac-launcher](https://github.com/re-rac/rerac-launcher).

It is a static [Astro](https://astro.build) site with [Starlight](https://starlight.astro.build) for the docs, and it
deploys to GitHub Pages.

> ReRAC is an unofficial fan project, not affiliated with or endorsed by Sony Interactive Entertainment or Insomniac
> Games. The site ships no game assets. The two pieces of game art it uses are listed in
> [`src/assets/third-party/README.md`](src/assets/third-party/README.md) and can be switched off.

## Running it

Needs Node 22.12 or later, and npm.

```sh
npm install        # install the pinned dependencies (package-lock.json)
npm run dev        # dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # serve dist/ locally
```

The build works offline: without network access (or without releases) it falls back to "Coming soon" data.

## Where things live

| Path | What |
|---|---|
| `src/config.ts` | **The one config file:** GitHub `org`, `launcherRepo`, `gameRepo`, `siteUrl`, base path, the stable download asset names per platform, the supported disc, and the `thirdPartyArt` toggles |
| `src/pages/index.astro` | Home page |
| `src/pages/docs/changelog.astro` | Changelog, built from both repos' GitHub releases (`/changelog` redirects here) |
| `src/content/docs/docs/*.md(x)` | Docs pages (Starlight). The sidebar is in `astro.config.ts` |
| `src/lib/releases.ts` | Build-time GitHub release fetch, with the fallback |
| `src/components/` | Home page parts: download CTA (the only client script: OS detection), space scene, panels, ticker |
| `src/starlight/` | Starlight overrides: site title, footer, header download button, single dark theme |
| `src/styles/` | `tokens.css` (colours, fonts) shared by home and docs; `site.css` (home); `starlight.css` (docs theme) |
| `src/data/screenshots.ts` | The home page screenshot slots; fill them here |
| `src/assets/brand/` | The ReRAC logo (`rerac-logo.png`, the wordmark in the hero, header and docs) and icon (`rerac-icon.png`, the favicon source) |
| `src/assets/third-party/` | All third-party art, with a README of each file's origin |
| `src/assets/fonts/` | Russo One and Exo 2 (SIL OFL 1.1, licence texts included) |
| `public/favicon.ico`, `favicon-32.png`, `apple-touch-icon.png` | Favicons, generated from the icon by `node scripts/favicons.mjs` |
| `public/og.png` | Social preview image with the ReRAC logo; its source is `scripts/og-image.html` |

## Configuration

Edit `src/config.ts`, or set these environment variables at build time:

| Variable | Default | Meaning |
|---|---|---|
| `RERAC_ORG` | `re-rac` | GitHub owner of the game and launcher repos |
| `SITE_URL` | `https://<org>.github.io` | Origin the site is served from |
| `SITE_BASE` | `/` | Path prefix: `/` for an org site (`https://re-rac.github.io`) or a custom domain, `/<repo>` for a project site (`https://<owner>.github.io/<repo>/`) |
| `GITHUB_TOKEN` | none | Raises the GitHub API rate limit; needed to read releases of private repos |
| `RELEASES_OFFLINE` | unset | `1` skips the release fetch entirely |
| `RELEASES_FIXTURES` | unset | Local preview only: a folder with `<repo>.json` files in the GitHub API shape, used instead of the network. Never set it in CI |

For example, a local build as a project site:

```sh
SITE_URL=https://example.github.io SITE_BASE=/rerac-site npm run build
```

## Release data

At build time (never in the browser), `src/lib/releases.ts` calls
`GET https://api.github.com/repos/{org}/{repo}/releases` for the launcher and the game repo.

- **Download buttons.** The latest non-prerelease launcher release decides which platforms are available. Each button
  links to the stable URL `https://github.com/{org}/{launcherRepo}/releases/latest/download/<asset>`, where `<asset>`
  is the stable name from `src/config.ts`:

  | Platform | Asset name every launcher release must attach |
  |---|---|
  | macOS, Apple Silicon | `rerac-launcher-macos-arm64.dmg` |
  | macOS, Intel | `rerac-launcher-macos-x64.dmg` |
  | Windows x64 | `rerac-launcher-windows-x64.msi` |
  | Linux x86_64 | `rerac-launcher-linux-x86_64.AppImage` |

  The version, the release date and each file's size come from the release. A platform whose asset is missing shows
  "Coming soon". In the browser, a small script detects macOS, Windows or Linux and points the big button at the
  matching installer; without JavaScript the button jumps to the platform list.
- **Changelog.** Both repos' releases (drafts excluded) are merged, grouped by publish date and labelled *Game* or
  *Launcher*. The notes are GitHub's own rendered, sanitised HTML (`body_html`).
- **Fallback.** If a fetch fails, times out (10 s), is rate-limited, or a repo is private or has no releases, the
  site builds with no release data: "Coming soon" buttons, "No releases yet" on the changelog, and no versions made up.

Because the data is baked in at build time, the site must be rebuilt when a release is published. The deploy workflow
does that nightly anyway, and the other repos can trigger it straight away (below).

## Deploying

`.github/workflows/deploy.yml` builds with npm and deploys with the official GitHub Pages actions
(`configure-pages`, `upload-pages-artifact`, `deploy-pages`). It runs on:

- a push to `main`;
- `workflow_dispatch` (Actions tab → *Deploy to GitHub Pages* → *Run workflow*);
- `repository_dispatch` with the type `release-published`;
- a nightly schedule (03:17 UTC).

One-time setup in this repo's settings:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. The site URL and base path come from the Pages configuration automatically. To override them (for example for a
   custom domain), set the repository variables `SITE_URL` and `SITE_BASE`. `RERAC_ORG` overrides the org.
3. While the game or launcher repo is private, the workflow's own token cannot see its releases. Add a fine-grained
   personal access token with read access to *Contents* of those repos as the secret `RELEASES_TOKEN`.

### Rebuild from another repository

When the game or the launcher publishes a release, it can ask this repo to rebuild. It needs a token that may send
`repository_dispatch` to this repo (a fine-grained token with *Contents: read and write* on this repo).

With the GitHub CLI:

```sh
gh api repos/re-rac/re-rac.github.io/dispatches -f event_type=release-published
```

With curl:

```sh
curl -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $SITE_DISPATCH_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/re-rac/re-rac.github.io/dispatches \
  -d '{"event_type":"release-published"}'
```

As a step in the other repo's release workflow:

```yaml
on:
  release:
    types: [published]
jobs:
  notify-site:
    runs-on: ubuntu-latest
    steps:
      - run: gh api repos/re-rac/re-rac.github.io/dispatches -f event_type=release-published
        env:
          GH_TOKEN: ${{ secrets.SITE_DISPATCH_TOKEN }}
```

This repo is `re-rac/re-rac.github.io`; a fork replaces that with its own owner and name.

## Editing content

- **Docs:** add or edit Markdown in `src/content/docs/docs/`, then add the page to the `sidebar` in
  `astro.config.ts`. Link between docs pages with relative links (`../faq/`) so they work under any base path.
- **Screenshots:** put your own captures of ReRAC in `src/assets/screenshots/` and list them in
  `src/data/screenshots.ts`. Until then the home page shows framed "Screenshot coming soon" slots.
- **Status:** the home page's *Current status* block is copied from the game README's *Current status* section; update
  both together.
