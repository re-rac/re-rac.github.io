---
title: Dumping your own disc
description: General guidance for making a disc image of your own Ratchet & Clank disc for ReRAC.
---

ReRAC needs an image of **your own, legally obtained** disc. It does not include the game, and this site does not
link to downloads of it. Make the image yourself, from a disc you own.

## What the image must be

- A plain **`.iso`** image with 2048-byte sectors (an ISO 9660 image).
- **Not** a raw 2352-byte-sector `.bin`/`.cue` image, and **not** a compressed format such as CHD or CSO. The extractor
  refuses these (error 11) for now.
- Complete. A truncated image is refused (error 10), and a damaged one fails the SHA-1 check (error 40).
- Of the [supported disc](../supported-versions/): NTSC-U, SCUS-97199, version 1.00.

## With a PC or Mac DVD drive

Ratchet & Clank is a PS2 DVD, so an ordinary DVD drive reads it. Use any disc imaging tool that writes a plain ISO
image. Some common ways:

- **macOS:** Disk Utility → *File → New Image → Image from* the disc, format *DVD/CD master*. That writes a `.cdr`
  file, which is a plain ISO image: rename it to `.iso`.
- **Linux:** copy the whole disc device to a file, for example
  `dd if=/dev/sr0 of=ratchet-and-clank.iso bs=2048 status=progress` (your drive may have another device name).
- **Windows:** use a disc imaging program's "create image from disc" function, and choose the ISO format.

## With your own PS2 console

Homebrew tools can also copy a disc from your own console. That works too, as long as the result is a plain
2048-byte-sector `.iso` of your own disc.

## Check it

When you **Install via ISO** in the launcher, the extractor first identifies the disc (serial, region and version)
before copying anything. If it is refused, the launcher shows why; see [Troubleshooting](../troubleshooting/).
