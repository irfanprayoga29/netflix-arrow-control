# Netflix Video Control

A script to control Netflix video playback with arrow keys using Tampermonkey.

## Installation Instructions

### Step 1: Install Tampermonkey
1. Open Google Chrome.
2. Go to the [Tampermonkey extension page](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) on the Chrome Web Store.
3. Click the "Add to Chrome" button.
4. Confirm the installation by clicking "Add extension".

### Step 2: Create a New Script in Tampermonkey
1. Click the Tampermonkey icon in the Chrome toolbar.
2. Select "Dashboard" from the dropdown menu.
3. In the Tampermonkey Dashboard, click the "Create a new script" button.

### Step 3: Add the Script
1. Copy the following code:
    ```javascript
    // ==UserScript==
    // @name         Netflix Video Control
    // @namespace    http://tampermonkey.net/
    // @version      0.1
    // @description  Control Netflix video with arrow keys
    // @author       You
    // @match        *://*.netflix.com/*
    // @grant        none
    // ==/UserScript==

    (function() {
        'use strict';
        document.addEventListener('keydown', function(event) {
            var video = document.querySelector('video');
            if (!video) return;
            if (event.code === 'ArrowRight') {
                video.currentTime += 5;
            } else if (event.code === 'ArrowLeft') {
                video.currentTime -= 5;
            }
        });
    })();
    ```
2. Paste the copied code into the Tampermonkey editor.
3. Click the "File" menu and select "Save" or press `Ctrl+S` (Windows) or `Cmd+S` (Mac).

### Step 4: Use the Script
1. Open Netflix and play any video.
2. Use the right arrow key to skip forward 5 seconds.
3. Use the left arrow key to rewind 5 seconds.

## Troubleshooting
If the script does not work, ensure that:
- Tampermonkey is enabled in your browser.
- The script is active and correctly installed in the Tampermonkey dashboard.
- You are on a Netflix video page when using the arrow keys.

For further assistance, visit the [Tampermonkey documentation](https://www.tampermonkey.net/documentation.php) or check the [issues](https://github.com/tampermonkey/tampermonkey/issues) on GitHub.
