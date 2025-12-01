#!/bin/bash

# Script to add nav-actions div and theme-system.js script to all HTML files

cd /home/mark/Desktop/Trademaster

# List of HTML files to update (excluding downloads directory)
html_files=(
  "about.html"
  "advanced-tools.html"
  "airdrops.html"
  "contact.html"
  "crypto.html"
  "disclaimer.html"
  "forex.html"
  "learn-airdrops.html"
  "learn-crypto.html"
  "learn-forex.html"
  "privacy-policy.html"
  "terms-of-service.html"
  "tools.html"
)

for file in "${html_files[@]}"; do
  echo "Processing $file..."
  
  # Add nav-actions div if it doesn't exist
  if ! grep -q 'nav-actions' "$file"; then
    # Find the line with </ul> before menu-toggle and add nav-actions
    sed -i '/<div class="menu-toggle">/i\            <!-- Nav Actions (Theme Toggle, etc.) -->\n            <div class="nav-actions"></div>\n' "$file"
    echo "  - Added nav-actions div"
  fi
  
  # Add theme-system.js script if it doesn't exist
  if ! grep -q 'theme-system.js' "$file"; then
    # Add after main.js script tag
    sed -i '/<script src="js\/main.js"><\/script>/a\    <script src="js/theme-system.js"></script>' "$file"
    echo "  - Added theme-system.js script"
  fi
done

echo "All files updated successfully!"
