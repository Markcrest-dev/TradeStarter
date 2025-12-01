---
description: Navbar Update and i18n Integration
---

# Navbar Update and i18n Integration

The navbar has been updated across all pages to ensure consistency and support internationalization (i18n).

## Changes Made

1.  **Navbar Structure**: The `nav-container` in all HTML files has been replaced with the standardized version from `index.html`.
2.  **i18n Attributes**: `data-i18n` attributes have been added to all navigation links for translation.
3.  **Language Selector**: A language selector (`<select id="language-selector">`) has been added to the navbar.
4.  **Script Inclusion**: The `js/i18n-system.js` script has been added to the end of the body in all HTML files.

## Files Updated

-   `about.html`
-   `advanced-tools.html`
-   `airdrops.html`
-   `contact.html`
-   `crypto.html`
-   `disclaimer.html`
-   `forex.html`
-   `forum.html`
-   `index.html` (Reference)
-   `journal.html`
-   `learn-airdrops.html`
-   `learn-crypto.html`
-   `learn-forex.html`
-   `privacy-policy.html`
-   `terms-of-service.html`
-   `tools.html`

## Verification

-   Check that the navbar looks identical on all pages.
-   Verify that the language selector works and changes the language of the navbar elements.
-   Ensure that the `data-i18n` keys match the keys in `lang/en.json` (and other language files).
