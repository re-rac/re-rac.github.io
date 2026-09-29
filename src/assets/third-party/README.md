# Third-party art

Every piece of third-party artwork the site uses lives in this folder, and nowhere else. Everything else on the site
(the bolt, rivets, panels, hazard stripes, starfield, planets and icons) is original work drawn for this site, and the
ReRAC logo and icon in `src/assets/brand/` (also the source of the favicons and `public/og.png`) are the project's own.

**Not yet cleared for public release.** The owner decides which of these may be published. Until then the image
files are git-ignored (only this README is tracked): a fresh clone does not have them. To use them, add them to this
folder locally by copying them from the ReRAC Launcher repository (see the table below). Without them the site still
builds and the home page falls back as described below.

- `thirdPartyArt` in `src/config.ts` switches each piece on or off: `logo` (off by default) and `background` (on by
  default). With both off, the hero shows only the ReRAC logo and no picture. (Astro may still copy the files into
  `dist/_astro/`, unreferenced.)
- To keep them out of the build output entirely, delete the image files from this folder. The site still builds; the
  home page falls back the same way, per missing file.

| File | What it is | Where it came from | Used on |
|---|---|---|---|
| `rac1-logo.webp` | The Ratchet & Clank (2002) logo | Copied from the ReRAC Launcher repository, `src/assets/games/rac1-logo.webp` (user-supplied launcher art, approved by the user for the launcher and this site) | Home page hero, small under the ReRAC logo (off by default) |
| `rac1-bg.webp` | An in-game scene of Ratchet using the Swingshot above a city | Copied from the ReRAC Launcher repository, `src/assets/games/rac1-bg.webp` (same source and approval) | Home page hero "monitor" panel |

Ratchet & Clank and all related names and art are trademarks and copyright of their respective owners (Sony
Interactive Entertainment, Insomniac Games). ReRAC is not affiliated with them.

## Fonts

The fonts are third-party too, but are openly licensed and kept with their licence texts in `src/assets/fonts/`
(copied from the launcher repository): Russo One and Exo 2, both under the SIL Open Font License 1.1. See
`src/assets/fonts/LICENSES.md`.
