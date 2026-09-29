---
title: Troubleshooting and logs
description: What ReRAC's error messages mean, what to do about them, and where to find the log files.
---

## Find the logs

If you ask for help, attach your log files. To open the folder, use **Help → Logs folder** in the launcher, or
**Settings → Folders → Open logs**.

Each time the launcher adds the game, checks it, exports assets or runs a game session, it writes a new file:

| File | Written when you |
|---|---|
| `extract-rac1-<time>.log` | add the game from your disc image |
| `verify-rac1-<time>.log` | check the game data |
| `export-rac1-<time>.log` | export assets |
| `rac1-<time>.log` | play |

Unless you moved the launcher's folder, the logs are here (these folders are hidden by default):

- **Windows:** `C:\Users\<YOUR_USER_NAME>\AppData\Local\rerac\logs`
- **Linux:** `/home/<YOUR_USER_NAME>/.local/share/rerac/logs` (or `$XDG_DATA_HOME/rerac/logs` if that's set)
- **macOS:** `/Users/<YOUR_USER_NAME>/Library/Application Support/rerac/logs`

If you moved it in **Settings → Folders**, they're in the `logs` folder inside it.

## Errors when adding the game

| Code | What it means | What to do |
|---|---|---|
| 10 | The image can't be read, or it's cut short | Check the file, or make the image again |
| 11 | It isn't a plain `.iso` (it's a `.bin`, CHD, CSO or another file) | Make a plain `.iso` ([how](../dumping-your-disc/)) |
| 20 | It's a different game | Pick your Ratchet & Clank image |
| 21 | It's Ratchet & Clank, but not a supported version | Use the [supported disc](../supported-versions/) |
| 30 | The game data couldn't be saved | Check that you can write to the launcher's folder |
| 31 | There isn't enough disk space | Free up about 4.5 GB, or move the launcher's folder |
| 40 | Some files don't match the original, so the image is damaged | Make the image again. The log lists the bad files |
| 99 | Something unexpected went wrong | Report it and attach the log |

## The game won't start

| What the launcher says | Why | What to do |
|---|---|---|
| "The game data is missing or incomplete." | The game data is gone, or adding the game didn't finish | Click **Re-extract** |
| "The game data doesn't match this ReRAC version." | This version of ReRAC needs the data prepared differently | Click **Re-extract** |
| "ReRAC couldn't start." | The launcher and this version of ReRAC don't match | Get the latest launcher, or choose another version |

If the game closes on its own, it has crashed. Please report it and attach the session log (`rac1-<time>.log`).

## macOS won't open the download

ReRAC isn't signed yet, so macOS may refuse to open it the first time. Right-click it in Finder and choose **Open**,
or allow it in **System Settings → Privacy & Security**.
