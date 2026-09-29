---
title: FAQ
description: Frequently asked questions about ReRAC, the unofficial native PC port of Ratchet & Clank.
---

## About the project

### What is ReRAC?

An unofficial native PC port of Ratchet & Clank (2002, PlayStation 2), in Rust, on the Bevy engine.
The game's systems are rebuilt from a decompilation of the original code and run as native code on your PC.

### Is it an emulator?

No. It is not an emulator, not a static recompiler, and it does not model the PS2 hardware. Where the PS2 hardware
causes a visible effect, the port reproduces the result natively.

### Is it official?

No. ReRAC is an unofficial fan project. It is not affiliated with or endorsed by Sony Interactive Entertainment or
Insomniac Games.

### Can I play it now?

Not yet. It is early and in active development, and not playable from start to finish. All 19 levels load and render,
and Novalis is the most complete level. Among the missing pieces: planet travel and the ship, the main menu and saving
and loading, the Clank, Giant Clank and Hologuise sections, the hoverboard and races, and ship combat. Neither the game
nor the launcher has been released.

### Is it open source?

Not yet. For now no licence is granted for the game or the launcher code. The bundled fonts are under the SIL Open Font
License.

## The disc

### Does ReRAC include the game?

No. It contains no game assets and no copy of the game's code. You need your own, legally obtained PlayStation 2 disc,
and the launcher extracts the data from an image of it.

### Which disc do I need?

Ratchet & Clank (2002) for PlayStation 2, **NTSC-U, SCUS-97199, version 1.00**. See
[Supported game versions](../supported-versions/).

### Will my PAL or Japanese disc work?

Not for now. PAL (SCES-50916), NTSC-J (SCPS-15037) and demo discs are refused.

### My disc is a Greatest Hits copy. Will it work?

Only if its boot executable is the v1.00 one. Greatest Hits discs share the serial SCUS-97199; the extractor checks the
boot executable's SHA-1 to tell them apart.

### Where can I download the game?

Not here. ReRAC works only with a disc you own. See [Dumping your own disc](../dumping-your-disc/).

### Does ReRAC read my disc image every time?

No. The extractor reads it once and writes a data folder. The game reads only that folder.

## Platforms and the launcher

### Which systems does it run on?

macOS on Apple Silicon is the development platform and the only one tested. Windows and Linux are planned but untested.

### Why a launcher?

It does the one-time extraction from your disc image, installs and updates game versions, and starts the game. Mod
management is planned on top of it.

### Can I export the game's textures, audio or models?

Yes, from your own extracted data: the launcher's **⋯ → Export assets…** writes PNG, WAV, glTF and JSON files.

### Are mods supported?

Planned, not yet. See [Mods](../mods/).

### Something went wrong. Where are the logs?

See [Troubleshooting and logs](../troubleshooting/).
