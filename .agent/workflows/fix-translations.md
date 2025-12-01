---
description: Fix Translation Files
---

# Fix Translation Files

## Problem
The user reported that changing languages wasn't translating the webpages.
Investigation revealed that `fr.json`, `de.json`, and `zh.json` were skeletal files containing only a few keys, while `en.json` and `es.json` were fully populated.

## Solution
Populate `fr.json`, `de.json`, and `zh.json` with the full structure of `en.json`, providing translations for all UI elements.

## Steps Taken
1.  Analyzed `en.json` to understand the required JSON structure.
2.  Generated full translation files for:
    -   **French (`fr.json`)**
    -   **German (`de.json`)**
    -   **Chinese (`zh.json`)**
3.  Verified `es.json` was already complete.

## Verification
-   Switch language to French, German, or Chinese.
-   Verify that Navigation, Hero sections, Features, Footer, and common UI elements are now translated.
-   *Note: Deep lesson content in `lesson-content.js` remains in English as it is hardcoded.*
