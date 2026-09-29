---
title: Supported game versions
description: ReRAC supports only Ratchet & Clank NTSC-U SCUS-97199 version 1.00 for now. Here is what it accepts and refuses.
---

## Supported disc

| Game | Region | Serial | Version |
|---|---|---|---|
| Ratchet & Clank (2002, PlayStation 2) | NTSC-U | SCUS-97199 | 1.00 |

That is the only supported disc for now. The extractor identifies your disc by its serial and by the SHA-1 of its boot
executable, and refuses anything else.

## Refused, for now

- **PAL** (SCES-50916) and **NTSC-J** (SCPS-15037) discs, and the **demo discs**.
- **Greatest Hits** discs whose boot executable differs from v1.00. Greatest Hits discs share the serial SCUS-97199,
  so the serial alone does not decide it.
- **Later releases:** the PS3 HD collection, the PS4 and PS Now versions, and the 2016 game.
- **The sequels.** Ratchet & Clank 2, 3 and Deadlocked are recognised by name and refused.

A refused Ratchet & Clank disc gives error **21** ("Ratchet & Clank, but an unsupported build or region"). A disc
image of another game gives error **20**. See [Troubleshooting](../troubleshooting/) for every code.

:::note[An unknown build of the right disc?]
If the extractor meets a Ratchet & Clank build it does not know, its log contains a line starting with
`new build DB row:`. Include that line (or the whole log) when you report it.
:::

## ReRAC's own versions

The launcher installs **versions** of ReRAC itself: one downloadable game build each.

- **Official** versions will be downloadable from the launcher once they are published (coming later).
- **Development** versions are local builds, installed from a zip or a build folder. See
  [For developers](../developers/).

Each version brings its own extractor, and records which discs it supports and which data format it needs. If you
switch to a version that needs a different data format, the launcher offers to re-extract.
