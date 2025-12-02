# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `your-username.github.io` for a user site, or any name for a project site)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)

### 2. Push Your Code

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 4. Wait for Deployment

- After pushing, GitHub Actions will automatically build and deploy your site
- You can check the progress in the **Actions** tab
- Once complete, your site will be available at:
  - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/` (for project sites)
  - `https://YOUR_USERNAME.github.io/` (if repo is named `YOUR_USERNAME.github.io`)

### 5. Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public/` folder with your domain name
2. Configure your DNS settings to point to GitHub Pages
3. In GitHub repository Settings > Pages, add your custom domain

## Important Notes

- The site builds as a static export (no server-side features)
- Images are unoptimized for compatibility
- All routes are exported as static HTML files
- The `.nojekyll` file ensures GitHub Pages doesn't process the site with Jekyll

## Troubleshooting

- **Build fails**: Check the Actions tab for error messages
- **404 errors**: Make sure `trailingSlash: true` is in `next.config.mjs`
- **Images not loading**: Verify images are in the `public/` folder
- **Styles not working**: Ensure all CSS files are properly imported

## Manual Deployment

If you want to test locally first:

```bash
# Build the static site
pnpm run build

# The output will be in the `out/` directory
# You can preview it with a static server
npx serve out
```

