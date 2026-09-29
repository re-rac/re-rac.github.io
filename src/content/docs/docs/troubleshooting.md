---
title: Troubleshooting and logs
description: What the ReRAC extractor and game error codes mean, and where the launcher's log files are.
---

## Find the logs

When you ask for help, attach your log files. Open the folder from the launcher with **Help → Logs folder**, or
**Settings → Folders → Open logs**.

Every extraction, verification, asset export and game session writes its own file there:

| File | Written by |
|---|---|
| `extract-rac1-<time>.log` | an extraction from your disc image |
| `verify-rac1-<time>.log` | a verification of the game data |
| `export-rac1-<time>.log` | an asset export |
| `rac1-<time>.log` | a game session |

The launcher itself writes no log of its own. There is no support-package export; attach the files instead.

With the default data folder, the logs are in:

- **Windows:** `C:\Users\<YOUR_USER_NAME>\AppData\Local\rerac\logs`
- **Linux:** `/home/<YOUR_USER_NAME>/.local/share/rerac/logs` (or `$XDG_DATA_HOME/rerac/logs` when that is set)
- **macOS:** `/Users/<YOUR_USER_NAME>/Library/Application Support/rerac/logs`

These folders are hidden by default. If you moved the data folder (**Settings → Folders**), the logs moved with it into
`<your data folder>/logs`.

## Extraction errors

The extractor reports one of these codes when it cannot finish:

| Code | Meaning | What to do |
|---|---|---|
| 10 | The image cannot be opened or read, or it is **truncated** | Check the file and its permissions; make the image again |
| 11 | Not an ISO 9660 image: a raw `.bin`, CHD, CSO or another file | Make a plain 2048-byte-sector `.iso` ([how](../dumping-your-disc/)) |
| 20 | An image of a disc that is not Ratchet & Clank | Pick the right image |
| 21 | Ratchet & Clank, but an unsupported build or region | Only NTSC-U SCUS-97199 v1.00 is supported for now ([details](../supported-versions/)) |
| 30 | Writing the game data failed | Check the data folder's permissions |
| 31 | Not enough disk space | Free about 4.5 GB, or move the data folder |
| 40 | Verification failed: a file's size or SHA-1 is wrong | The image is damaged; make it again. The log names the bad files |
| 99 | An internal error | Report it with the log |

## The game will not start

| What the launcher says | Why | What to do |
|---|---|---|
| "The game data is missing or incomplete." | The data folder is missing, or the extraction did not finish | **Re-extract** |
| "The game data doesn't match this ReRAC version." | The data was extracted for another data format | **Re-extract** |
| "ReRAC couldn't start." | The launcher and the game version do not match | Update the launcher or pick another version |

Any other stop is a crash. Attach the session log (`rac1-<time>.log`) when you report it.

## macOS blocks the download

Builds are not signed yet, so macOS Gatekeeper may quarantine a downloaded file and refuse to open it. Open it once
from Finder with **right-click → Open**, or allow it in **System Settings → Privacy & Security**.
