# GitHub Pages Deployment Guide

This guide will help you deploy the StyloFront Theme Generator to GitHub Pages.

## Prerequisites

1. A GitHub account
2. A repository for this project
3. GitHub Pages enabled in your repository settings

## Step 1: Repository Setup

1. Create a new repository on GitHub (or use an existing one)
2. Push your code to the repository
3. Go to **Settings** → **Pages** in your repository
4. Under **Source**, select **GitHub Actions**

## Step 2: Environment Variables

Set up the following secrets in your GitHub repository:

1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Add the following secrets (if needed):

### Required Secrets

- `NEXT_PUBLIC_SITE_URL` - Your GitHub Pages URL
  - For root repository: `https://yourusername.github.io`
  - For subdirectory: `https://yourusername.github.io/repository-name`
  - Example: `https://hiteshodedara.github.io/themes-frontend`

### Optional Secrets

- `NEXT_PUBLIC_GOOGLE_FONTS_API_KEY` - Google Fonts API key (optional)
  - Get your API key from: https://developers.google.com/fonts/docs/developer_api
  - If not provided, the app will use cached fonts or fallback fonts

## Step 3: Local Environment Setup

Create a `.env.local` file in the root directory for local development:

```env
# Site URL - Update with your GitHub Pages URL
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io

# Google Fonts API Key (optional)
NEXT_PUBLIC_GOOGLE_FONTS_API_KEY=your_google_fonts_api_key_here
```

**Note:** Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 4: Build WASM Module

Before deploying, make sure the WASM module is built:

```bash
npm run wasm-build
```

This will compile the Rust WASM module and place it in `public/wasm/`.

## Step 5: Deploy

### Automatic Deployment

The GitHub Actions workflow will automatically deploy when you push to the `main` or `master` branch:

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. The workflow will:
   - Install dependencies
   - Build the WASM module
   - Build the Next.js app
   - Deploy to GitHub Pages

3. Check the **Actions** tab in your repository to see the deployment progress

### Manual Deployment

You can also trigger the workflow manually:

1. Go to **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Step 6: Verify Deployment

1. Wait for the deployment to complete (usually 2-5 minutes)
2. Visit your GitHub Pages URL
3. The site should be live!

## Configuration Options

### Deploying to a Subdirectory

If your repository name is not the root (e.g., `themes-frontend`), you need to update `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/themes-frontend' : '',
```

And update your `NEXT_PUBLIC_SITE_URL` secret:
```
https://yourusername.github.io/themes-frontend
```

### Custom Domain

If you're using a custom domain (e.g., `theme.stylofront.site`):

1. **Configure in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter your domain (e.g., `theme.stylofront.site`)
   - GitHub will automatically create a CNAME file

2. **Set Environment Variable**:
   - Update `NEXT_PUBLIC_SITE_URL` secret to your custom domain
   - Example: `https://theme.stylofront.site`
   - The workflow will automatically detect custom domains and set `basePath` to empty

3. **DNS Configuration**:
   - Configure your DNS records as per GitHub Pages documentation
   - Add CNAME record pointing to `yourusername.github.io`

**Note**: The `basePath` is automatically set based on your domain:
- Custom domain → `basePath: ''` (empty)
- GitHub Pages subdirectory → `basePath: '/themes-frontend'`

## Troubleshooting

### Build Fails

- Check the **Actions** tab for error logs
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 20+)

### WASM Not Loading

- Ensure `npm run wasm-build` completed successfully
- Check that `public/wasm/` contains the compiled files
- Verify the WASM files are committed to git

### 404 Errors

- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that `basePath` is correct if using a subdirectory
- Verify all routes are properly exported

### Environment Variables Not Working

- Ensure secrets are set in GitHub repository settings
- Check that secret names match exactly (case-sensitive)
- Verify the workflow file uses the correct secret names

## Local Testing

Test the static export locally before deploying:

```bash
# Build the project
npm run build

# The output will be in the `out` directory
# You can serve it locally with:
npx serve out
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

