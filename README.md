# HKeyQuickPaste
HKeyQuickPaste: Save text snippets and paste them instantly with customizable keyboard shortcuts.
# HKeyQuickPaste

HKeyQuickPaste is a Chrome extension that allows you to save text snippets and paste them quickly using a customizable keyboard shortcut.

## Features

- Save multiple text snippets for easy access
- Paste saved text with a customizable hotkey (default: Alt+Shift+V)
- Use Left Alt , Left Shift
- Works seamlessly across all websites
- Syncs your snippets across devices using Chrome's storage API
- User-friendly interface for managing your text library

## Installation

1. Clone this repository or download the ZIP file.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the HKeyQuickPaste icon in your Chrome toolbar to open the popup.
2. Enter the text you want to save and click "Save".
3. Navigate to any webpage where you want to paste the text.
4. Press Alt+Shift+V (default shortcut) to paste the saved text.

## Customizing the Shortcut

The default shortcut is Alt+Shift+V. You can change this in the `manifest.json` file:

1. Open `manifest.json` in a text editor.
2. Locate the `commands` section:

```json
"commands": {
  "paste-saved-text": {
    "suggested_key": {
      "default": "Alt+Shift+V"
    },
    "description": "Paste saved text"
  }
}
