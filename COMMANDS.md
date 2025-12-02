# Commands Reference

This file contains all commands available in the starter kit, including npm scripts, Git commands, and deployment commands.

> **Note:** This file should be updated whenever new commands, scripts, or npm scripts are added to the project. Keep it synchronized with all available commands.

## NPM Scripts

### Development

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm run start

# Run ESLint
npm run lint
```

## Git Commands

### Initial Setup

```bash
# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Starter kit with design system"

# Rename branch to main (if needed)
git branch -M main
```

### Connect to GitHub

```bash
# Add remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Or using SSH
git remote add origin git@github.com:YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Daily Git Workflow

```bash
# Check status
git status

# Add specific files
git add <file>

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

## Deployment Commands

### Vercel Deployment

#### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally (first time only)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy preview (for testing)
vercel

# Link project to existing Vercel project
vercel link
```

#### Option 2: Vercel GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically deploy on every push

#### Option 3: Quick Deploy Script

Create a simple script to deploy:

```bash
# Deploy and get preview URL
vercel && vercel --prod
```

### Vercel Environment Variables

```bash
# Add environment variable
vercel env add VARIABLE_NAME

# List environment variables
vercel env ls

# Remove environment variable
vercel env rm VARIABLE_NAME
```

## Combined Workflow: Push to GitHub + Deploy to Vercel

### Automated Script (Recommended)

Create a shell script `scripts/deploy.sh`:

```bash
#!/bin/bash

# Build the project
npm run build

# Add all changes
git add .

# Commit (you'll be prompted for message)
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"

# Push to GitHub
git push

# Deploy to Vercel
vercel --prod

echo "✅ Deployed to GitHub and Vercel!"
```

Make it executable:

```bash
chmod +x scripts/deploy.sh
```

Use it:

```bash
./scripts/deploy.sh
```

### Manual Workflow

```bash
# 1. Build and commit
npm run build
git add .
git commit -m "Update: Your changes"
git push

# 2. Deploy to Vercel (if using CLI)
vercel --prod

# Or if connected via GitHub, Vercel auto-deploys on push
```

## Design System Commands

These commands come from the integrated design system (`jonfitzsimmons/design-system`):

### Component Extraction (if needed)

```bash
# Extract component from design system
npm run ds:extract
```

Note: This requires the `scripts/extract-component.js` file from the design system repository.

## Project Management Commands

### Dependencies

```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency
npm install -D <package-name>

# Update dependencies
npm update

# Check for outdated packages
npm outdated

# Remove dependency
npm uninstall <package-name>
```

### Clean Up

```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Clean Next.js cache
rm -rf .next

# Reinstall everything
npm install
```

## Useful Aliases (Optional)

Add these to your `~/.zshrc` or `~/.bashrc`:

```bash
# Quick push and deploy
alias deploy='git add . && git commit -m "Update" && git push && vercel --prod'

# Quick dev start
alias dev='npm run dev'

# Quick build
alias build='npm run build'
```

After adding aliases, reload your shell:

```bash
source ~/.zshrc  # or ~/.bashrc
```

## Troubleshooting Commands

```bash
# Clear Next.js cache
rm -rf .next

# Clear npm cache
npm cache clean --force

# Reset git (careful!)
git reset --hard HEAD

# Check Vercel deployment status
vercel ls

# View deployment logs
vercel logs
```

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `git push` | Push to GitHub |
| `vercel --prod` | Deploy to Vercel production |
| `vercel` | Deploy preview to Vercel |

