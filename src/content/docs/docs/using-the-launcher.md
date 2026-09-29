---
title: Using the launcher
description: Game versions, installing the game data from your disc image, playing, exporting assets and the launcher's folders.
---

The **ReRAC Launcher** installs and updates versions of ReRAC, extracts the game data from your own disc image, and
starts the game. Mod management is planned. It is built with [Tauri](https://v2.tauri.app/).

## Game versions

A *version* is one downloadable build of the game. You manage them in **Settings → Version Management**:

- **Official:** released versions, downloadable here once they are published (coming later).
- **Development:** local builds. **Install from zip…** installs a packaged build; **Add build folder…** uses an unpacked
  build folder in place.

Pick a version and **Set active**. The active version's extractor and game are the ones the launcher runs.

## Installing the game data

Select **Ratchet & Clank** in the sidebar and choose **Install via ISO**, then pick the image of your disc. The
extractor then:

1. **identifies** the disc (serial, region, version) and refuses unsupported ones;
2. **copies** the data, about 4.5 GB, checking every file's size and SHA-1 as it goes;
3. **prepares** it: builds a cache of decompressed data so levels load faster.

Cancelling is safe: a half-finished extraction is never mistaken for a complete one, and the next run starts clean.

## Playing

Press **Play**. The launcher starts the game with the extracted data and shows *Running…* until it exits. If the game
cannot start, the launcher says why, and offers **Re-extract** when the data is missing, incomplete or made for
another version.

## The ⋯ menu

The game screen's **⋯** menu has:

- **Export assets…** writes your extracted data in usable formats: textures (PNG), audio (WAV), models and levels
  (glTF), collision, and text (JSON). The game never reads the exports.
- **Re-extract from ISO** runs the extraction again from your disc image.

## Folders

The launcher keeps everything in one data folder, named `rerac`:

| System | Default data folder |
|---|---|
| Windows | `C:\Users\<YOUR_USER_NAME>\AppData\Local\rerac` |
| Linux | `/home/<YOUR_USER_NAME>/.local/share/rerac` (or `$XDG_DATA_HOME/rerac`) |
| macOS | `/Users/<YOUR_USER_NAME>/Library/Application Support/rerac` |

Inside it:

| Folder | Holds |
|---|---|
| `versions/` | installed game versions |
| `games/rac1/data/` | the extracted game data |
| `logs/` | one log file per extraction, verification, export and game session |
| `settings/` | settings |

You can move the data folder in **Settings → Folders**; everything, logs included, moves with it.
