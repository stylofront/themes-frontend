# Quick GitHub Pages Setup Guide

Follow these steps to deploy your theme generator to GitHub Pages:

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the settings

## Step 2: Set Environment Variables

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add the following secrets:

### Required Secret

**Name:** `NEXT_PUBLIC_SITE_URL`  
**Value:** Your GitHub Pages URL
- **For this repository** (`stylofront/themes-frontend`): `https://stylofront.github.io/themes-frontend`
- If repository is `yourusername/yourusername.github.io`: `https://yourusername.github.io`
- If repository is `yourusername/repo-name`: `https://yourusername.github.io/repo-name`

### Optional Secret

**Name:** `NEXT_PUBLIC_GOOGLE_FONTS_API_KEY`  
**Value:** Your Google Fonts API key (optional)
- Get it from: https://developers.google.com/fonts/docs/developer_api
- If not set, the app will use cached fonts

## Step 3: Push Your Code

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Wait for it to complete (usually 2-5 minutes)
4. Your site will be live at your GitHub Pages URL!

## Troubleshooting

### If deployment fails:

1. Check the **Actions** tab for error messages
2. Verify all secrets are set correctly
3. Make sure `NEXT_PUBLIC_SITE_URL` matches your repository structure
4. Ensure WASM files are committed (check `public/wasm/` directory)

### If site shows 404:

1. Verify `NEXT_PUBLIC_SITE_URL` is correct
2. Check if you need to set `basePath` in `next.config.js` (for subdirectory deployments)
3. Wait a few minutes for DNS propagation

## Local Testing

Test the static export locally:

```bash
# Build WASM
npm run wasm-build

# Build Next.js
npm run build

# Serve locally
npx serve out
```

Visit `http://localhost:3000` to test.

## Need Help?

See the full [Deployment Guide](DEPLOYMENT.md) for detailed instructions.

