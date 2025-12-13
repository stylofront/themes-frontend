# Fix: README Showing Instead of Site

If your GitHub Pages site is showing the README.md file instead of your Next.js app, follow these steps:

## Quick Fix

1. **Go to your repository on GitHub**
2. **Click Settings** → **Pages**
3. **Under "Source"**, make sure it says **"GitHub Actions"** (NOT "Deploy from a branch")
4. **If it's set to a branch**, change it to **"GitHub Actions"**
5. **Save the settings**

## Verify the Workflow

1. Go to the **Actions** tab in your repository
2. Check if the "Deploy to GitHub Pages" workflow has run successfully
3. If it hasn't run or failed:
   - Click on the workflow
   - Check for any errors
   - If needed, click "Run workflow" to trigger it manually

## After Changing Settings

1. Wait 1-2 minutes for GitHub to update
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Hard refresh the page (Ctrl+F5)
4. Your site should now show instead of the README

## Why This Happens

- GitHub Pages can serve from:
  - **A branch** (like `main` or `gh-pages`) - shows raw files like README.md
  - **GitHub Actions** - serves the built Next.js site from the `out` directory

- If it's set to a branch, it will show the README.md file
- If it's set to GitHub Actions, it will serve your built Next.js app

## Still Not Working?

1. Check the **Actions** tab - make sure the deployment completed successfully
2. Verify the workflow file exists at `.github/workflows/deploy.yml`
3. Make sure you've pushed to the `prod` branch (or update the workflow to use your branch)
4. Check that the build completed without errors

