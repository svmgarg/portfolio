# Portfolio Deployment Guide

## Quick Deployment (One Command)

```bash
npm run deploy
```

This is the standard way - it handles everything automatically.

---

## Full Streamlined Deployment Process

If you need to deploy manually or troubleshoot:

### Step 1: Sync Dependencies
```bash
npm install  # Always do this first to sync package-lock.json
git add package-lock.json
git commit -m "Update lock file" || true  # Ignore if nothing changed
```

### Step 2: Build Production Bundle
```bash
npm run build
```

### Step 3: Deploy to GitHub Pages
```bash
npm run deploy
```

### Step 4: Verify Deployment
- Check: https://github.com/svmgarg/portfolio/settings/pages
  - Confirm source is: **Branch: gh-pages**
- Wait 2-5 minutes for CDN
- Visit: https://svmgarg.github.io/portfolio/
- Test resume link: **View PDF Resume** → opens https://svmgarg.github.io/portfolio/resume.pdf

---

## Complete Atomic Deployment Script

Create this as `deploy.sh` (or `deploy.ps1` on Windows):

### For Windows (PowerShell):

```powershell
# deploy.ps1
param(
    [string]$CommitMsg = "Deploy portfolio"
)

Write-Host "=== PORTFOLIO DEPLOYMENT ===" -ForegroundColor Green
Write-Host ""

# Step 1: Sync dependencies
Write-Host "Step 1/4: Syncing dependencies..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) { Write-Host "❌ npm install failed"; exit 1 }

# Step 2: Build
Write-Host "Step 2/4: Building production bundle..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { Write-Host "❌ build failed"; exit 1 }

# Step 3: Deploy
Write-Host "Step 3/4: Deploying to GitHub Pages..." -ForegroundColor Cyan
npm run deploy
if ($LASTEXITCODE -ne 0) { Write-Host "❌ deploy failed"; exit 1 }

# Step 4: Verify
Write-Host "Step 4/4: Verifying deployment..." -ForegroundColor Cyan
Start-Sleep -Seconds 5

try {
    $html = (Invoke-WebRequest -Uri "https://svmgarg.github.io/portfolio/" -UseBasicParsing -TimeoutSec 10).Content
    $hasResume = $html -match "resume\.pdf"
    
    if ($hasResume) {
        Write-Host ""
        Write-Host "✅ DEPLOYMENT SUCCESSFUL!" -ForegroundColor Green
        Write-Host "Live site: https://svmgarg.github.io/portfolio/" -ForegroundColor Green
        Write-Host "Resume link: https://svmgarg.github.io/portfolio/resume.pdf" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Deployed but resume link not yet visible (CDN caching)" -ForegroundColor Yellow
        Write-Host "Try again in 2-5 minutes"
    }
} catch {
    Write-Host "⚠️  Deployment pushed, but couldn't verify live (network issue)" -ForegroundColor Yellow
}
```

**Usage:**
```bash
.\deploy.ps1
# or with custom message:
.\deploy.ps1 -CommitMsg "Update resume link"
```

---

## Pre-Deployment Checklist

Before deploying, verify:

- [ ] `npm install` completed successfully
- [ ] `npm run build` completes with no errors
- [ ] Changes are committed to local `main` branch
- [ ] GitHub Pages settings point to `gh-pages` branch
- [ ] No uncommitted changes in working directory

---

## Troubleshooting

### Issue: `npm ci can only install packages when...`
**Solution:** Run `npm install` to sync `package-lock.json`
```bash
npm install
git add package-lock.json
git commit -m "Sync lock file"
```

### Issue: Main branch push blocked
**Cause:** Branch protection rules require PR
**Solution:** Create PR or let `npm run deploy` handle it (pushes to gh-pages only)

### Issue: Old version still showing after deploy
**Cause:** GitHub Pages CDN caching
**Solution:** 
- Wait 5-10 minutes
- Try incognito/private window
- Or hard refresh (Ctrl+Shift+Delete)

### Issue: Resume.pdf returns 404
**Cause:** File not in `/public` folder
**Solution:** Ensure `public/resume.pdf` exists:
```bash
ls -la public/resume.pdf  # Should show file
```

---

## Files to Keep in Sync

These should always match:
- `package.json` - dependencies
- `package-lock.json` - locked versions (run `npm install` to sync)
- `src/content/home.json` - resume link reference
- `public/resume.pdf` - actual PDF file

---

## GitHub Pages Configuration

Always verify these settings:
1. Go to: https://github.com/svmgarg/portfolio/settings/pages
2. **Source** should be: `Deploy from a branch`
3. **Branch** should be: `gh-pages` / `root`

---

## Quick Reference

| Command | What It Does |
|---------|--------------|
| `npm install` | Syncs dependencies & lock file |
| `npm run build` | Creates production bundle in `build/` |
| `npm run deploy` | Builds + deploys `build/` to gh-pages |
| `npm start` | Starts dev server on localhost:3000 |

---

## Future Changes Process

When you make changes:

```bash
# 1. Make code changes in src/
# 2. Test locally: npm start
# 3. Commit: git add . && git commit -m "Your message"
# 4. Deploy: npm run deploy
# 5. Check live site in 2-5 minutes
```

That's it! The `npm run deploy` script does everything automatically.
