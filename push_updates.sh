#!/bin/bash
# Simplified Push Script
# This uses your system's git configuration.

echo "Adding changes..."
git add .

echo "Committing..."
git commit -m "Feat: Add favicon and Agile Culture project card"

echo "Pushing to GitHub..."
echo "If asked for a password, paste your Personal Access Token (ghp_...)"
git push origin main
