---
title: Using the launcher
description: Versions of ReRAC, adding the game, playing, exporting assets, and where the launcher keeps its files.
---

The ReRAC Launcher sets up the game from your disc, keeps ReRAC up to date and starts it. This page covers everything
else it can do.

## Versions of ReRAC

The launcher can hold more than one version of ReRAC. You'll find them in **Settings → Version Management**:

- **Official:** released versions of ReRAC. There are none yet.
- **Development:** local builds, for developers. **Install from zip…** installs a packaged build, and
  **Add build folder…** uses a build folder as it is. See [For developers](../developers/).

Pick a version and click **Set active** to play it. If a version needs the game data prepared differently, the
launcher offers to re-extract it.

## Adding the game

Select **Ratchet & Clank** in the sidebar, choose **Install via ISO** and pick your disc image. The launcher then:

1. checks that it's a [supported disc](../supported-versions/);
2. copies the game data (about 4.5 GB) and checks every file against the original;
3. prepares the data so levels load faster.

You can cancel at any time. Next time, it simply starts over.

## Playing

Press **Play**. If the game can't start, the launcher tells you why, and offers **Re-extract** when the game data is
missing or incomplete.

## The ⋯ menu

- **Export assets…** saves the game's textures, sounds, models, levels and text from your own game data, as PNG, WAV,
  glTF and JSON files. The game itself never uses these copies.
- **Re-extract from ISO** adds the game again from your disc image.

## Folders

The launcher keeps everything in one folder, named `rerac`:

| System | Default folder |
|---|---|
| Windows | `C:\Users\<YOUR_USER_NAME>\AppData\Local\rerac` |
| Linux | `/home/<YOUR_USER_NAME>/.local/share/rerac` (or `$XDG_DATA_HOME/rerac`) |
| macOS | `/Users/<YOUR_USER_NAME>/Library/Application Support/rerac` |

Inside it:

| Folder | Holds |
|---|---|
| `versions/` | the installed versions of ReRAC |
| `games/rac1/data/` | the game data from your disc |
| `logs/` | the [log files](../troubleshooting/#find-the-logs) |
| `settings/` | your settings |

To move it, use **Settings → Folders**. Everything, logs included, moves with it.
