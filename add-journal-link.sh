#!/bin/bash

# Script to add Trading Journal link to Tools dropdown in all HTML files

cd /home/mark/Desktop/Trademaster

# HTML snippet to add
JOURNAL_LINK='                        <a href="journal.html" class="dropdown-item">\n                            <i class="fas fa-book"></i>\n                            <div>\n                                <strong>Trading Journal</strong>\n                                <span>Track your trades</span>\n                            </div>\n                        </a>'

# List of HTML files to update (excluding journal.html itself)
html_files=(
  "index.html"
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
  
  # Check if journal link already exists
  if grep -q "Trading Journal" "$file"; then
    echo "  - Journal link already exists, skipping"
  else
    # Add journal link after the advanced-tools.html dropdown item
    # Find the line with </a> after advanced-tools.html and add the journal link after it
    sed -i '/<a href="advanced-tools.html" class="dropdown-item">/,/<\/a>/{
      /<\/a>/a\                        <a href="journal.html" class="dropdown-item">\n                            <i class="fas fa-book"></i>\n                            <div>\n                                <strong>Trading Journal</strong>\n                                <span>Track your trades</span>\n                            </div>\n                        </a>
    }' "$file"
    echo "  - Added journal link"
  fi
done

echo "All files updated successfully!"
