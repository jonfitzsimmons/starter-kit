#!/bin/bash

# Deploy script for starter-kit
# This script builds, commits, pushes to GitHub, and deploys to Vercel

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if there are any changes to commit
if [ -z "$(git status --porcelain)" ]; then
    echo "ℹ️  No changes to commit, skipping git operations"
else
    # Add all changes
    echo "📝 Staging changes..."
    git add .

    # Get commit message (use first argument or prompt)
    if [ -z "$1" ]; then
        read -p "Enter commit message: " commit_message
    else
        commit_message="$1"
    fi

    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "$commit_message"

    # Push to GitHub
    echo "⬆️  Pushing to GitHub..."
    git push
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
if command -v vercel &> /dev/null; then
    vercel --prod
    echo "✅ Successfully deployed to Vercel!"
else
    echo "⚠️  Vercel CLI not found. Install it with: npm i -g vercel"
    echo "   Or deploy manually at: https://vercel.com"
fi

echo "🎉 Deployment complete!"

