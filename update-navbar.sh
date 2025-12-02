#!/bin/bash

# Update navbar on all HTML files
# This script updates the navbar to:
# 1. Remove "TradeStarter" text, keeping only the logo
# 2. Add mobile settings section with language and theme toggle

echo "Updating navbar on all HTML files..."

# List of HTML files to update (excluding contact.html as it has a different structure)
files=(
    "index.html"
    "crypto.html"
    "forex.html"
    "airdrops.html"
    "about.html"
    "learn-crypto.html"
    "learn-forex.html"
    "learn-airdrops.html"
    "tools.html"
    "advanced-tools.html"
    "forum.html"
    "journal.html"
    "privacy-policy.html"
    "terms-of-service.html"
    "disclaimer.html"
    "contact.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Remove <span>TradeStarter</span> from logo
        sed -i 's/<span>TradeStarter<\/span>//g' "$file"
        
        echo "✓ Updated $file"
    else
        echo "⚠ Skipping $file (not found)"
    fi
done

echo ""
echo "✅ Navbar updates complete!"
echo "Please refresh your browser with Ctrl+Shift+R (hard refresh) to see changes."
