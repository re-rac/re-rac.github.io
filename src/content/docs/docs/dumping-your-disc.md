---
title: Dumping your disc
description: How to make an image of your own Ratchet & Clank disc for ReRAC.
---

ReRAC needs an image of your own disc. It doesn't include the game, and this site doesn't link to copies of it.

Before you start, check that you have the supported disc: NTSC-U, SCUS-97199, version 1.00. See
[Supported versions](../supported-versions/).

## What the image must be

- A plain **`.iso`** image (ISO 9660, 2048-byte sectors).
- Not a raw `.bin`/`.cue` image, and not a compressed one such as CHD or CSO. ReRAC can't read those yet.
- Complete and undamaged. If it isn't, the launcher will tell you when you add it.

## With a computer's DVD drive

Ratchet & Clank is on a DVD, so any ordinary DVD drive can read it. Use a disc imaging tool that saves a plain ISO:

- **macOS:** in Disk Utility, choose *File → New Image → Image from* the disc, with the format *DVD/CD master*. This
  saves a `.cdr` file, which is already a plain ISO image: just rename it to `.iso`.
- **Linux:** copy the whole disc to a file, for example
  `dd if=/dev/sr0 of=ratchet-and-clank.iso bs=2048 status=progress`. Your drive may have a different device name.
- **Windows:** use a disc imaging program's "create image from disc" option and choose the ISO format.

## With your own PS2

Homebrew tools can also copy the disc on your own console. That works too, as long as you end up with a plain `.iso`.

When you add the image in the launcher, it checks the disc before copying anything. If there's a problem,
[Troubleshooting](../troubleshooting/) explains what the message means.
