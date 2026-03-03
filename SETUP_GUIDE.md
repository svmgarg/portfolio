# 🚀 STREAMLINED DEPLOYMENT SETUP

## What You Need to Know

This portfolio uses GitHub Pages for hosting. We've streamlined the deployment to prevent future headaches.

---

## FASTEST WAY TO DEPLOY

### For Local Development:

```bash
npm run deploy
```

That's it. One command. It handles:
- ✅ Syncs dependencies
- ✅ Builds production bundle  
- ✅ Deploys to gh-pages
- ✅ Done in ~2 minutes

---

## OR USE THE CUSTOM SCRIPTS

### Windows (PowerShell):
```powershell
.\deploy.ps1
```

### Mac/Linux (Bash):
```bash
bash deploy.sh
```

These scripts do the same thing but with:
- ✅ Step-by-step progress
- ✅ Error checking at each step
- ✅ Automatic verification
- ✅ Pretty colored output

---

## AUTOMATED DEPLOYMENT (BEST FOR FUTURE)

GitHub Actions automatically deploys when you push to `main`:

1. **Make changes** to your code
2. **Commit and push to main:**
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```
3. **GitHub Actions runs automatically:**
   - Install dependencies
   - Build production bundle
   - Deploy to gh-pages
   - Done! ✨

**Watch deployment progress:**
- Go to: https://github.com/svmgarg/portfolio/actions
- See real-time logs

---

## PRE-DEPLOYMENT CHECKLIST

Always do this before deploying:

```bash
# 1. Ensure lock file is synced
npm install

# 2. Test locally first
npm start
# (Visit http://localhost:3000 and test resume link)

# 3. Stop dev server (Ctrl+C)

# 4. Commit changes 
git add -A
git commit -m "Your changes"

# 5. Deploy
npm run deploy
```

---

## VERIFICATION AFTER DEPLOYMENT

After deploying, check:

1. **Wait 2-5 minutes** for GitHub Pages CDN
2. **Visit:** https://svmgarg.github.io/portfolio/
3. **Test resume link:** Click "View PDF Resume" → opens in new tab
4. **Verify endpoint:** https://svmgarg.github.io/portfolio/resume.pdf

If shows old version:
- Try **incognito/private window**
- Or **hard refresh** (Ctrl+Shift+Delete → clear cache → visit site)

---

## KEY FILES

| File | Purpose |
|------|---------|
| `package.json` | Dependencies & build scripts |
| `package-lock.json` | Locked dependency versions (KEEP SYNCED) |
| `src/content/home.json` | Resume link reference |
| `public/resume.pdf` | Actual resume file |
| `.github/workflows/deploy.yml` | Auto-deployment on push |
| `deploy.ps1` | Windows deployment script |
| `deploy.sh` | Mac/Linux deployment script |

---

## TROUBLESHOOTING

### "npm ci can only install packages when..."
```bash
npm install
git add package-lock.json
git commit -m "Sync lock file"
```

### "Changes pushed but not live"
- **Cause:** GitHub Pages needs time
- **Solution:** Wait 5-10 minutes, try incognito window

### "Resume.pdf not found (404)"
- **Cause:** File missing from public/ folder
- **Solution:** Ensure `public/resume.pdf` exists
  ```bash
  ls public/resume.pdf
  ```

### "Can't push to main"
- **Cause:** Branch protection rule (requires PR)
- **Solution:** Create PR or use GitHub Actions (auto-deploy on merge)

---

## GITHUB PAGES CONFIGURATION

Always verify these settings:

**Go to:** https://github.com/svmgarg/portfolio/settings/pages

Check:
- ✅ **Source:** "Deploy from a branch"
- ✅ **Branch:** "gh-pages"  
- ✅ **Folder:** "/ (root)"

---

## QUICK REFERENCE

| Task | Command |
|------|---------|
| View local site | `npm start` |
| Build for production | `npm run build` |
| Deploy to live | `npm run deploy` |
| Deploy with script | `.\deploy.ps1` (Windows) or `bash deploy.sh` (Mac/Linux) |
| Check GitHub Actions | Visit Actions tab on GitHub |

---

## DEPLOYMENT FLOW DIAGRAM

```
┌─────────────┐
│ Make Changes│
│  in src/    │
└──────┬──────┘
       │
       v
┌──────────────────────────┐
│ Test Locally             │
│ npm start                │
│ (http://localhost:3000)  │
└──────┬───────────────────┘
       │
       v
┌──────────────────────────┐
│ Commit to Git            │
│ git commit -m "Changes"  │
└──────┬───────────────────┘
       │
       v
    ╔══╩════════════════════════════════╗
    ║  CHOOSE YOUR DEPLOYMENT METHOD     ║
    ╚════════════════════╤═══════════════╝
                         │
         ┌───────────────┼───────────────┐
         v               v               v
┌─────────────────┐ ┌──────────────┐ ┌───────────────┐
│ Run Deploy.ps1  │ │ Run Deploy.sh │ │ Push to main  │
│  (Windows)      │ │ (Mac/Linux)   │ │ (Auto via     │
└────────┬────────┘ └──────┬───────┘ │  Actions)     │
         │                 │          └───────┬───────┘
         └─────────────┬───┘                  │
                       v                      v
            ┌──────────────────────────────────────┐
            │  npm install + npm run build         │
            │  npm run deploy                      │
            │  → Pushes build/ to gh-pages         │
            └──────────────┬───────────────────────┘
                           │
                           v
            ┌──────────────────────────────────────┐
            │   GitHub Pages Deployment            │
            │   [Takes 2-5 min for CDN]            │
            └──────────────┬───────────────────────┘
                           │
                           v
         ┌─────────────────────────────────────┐
         │ 🎉 LIVE AT                          │
         │ https://svmgarg.github.io/portfolio/│
         └─────────────────────────────────────┘
```

---

## KEY TAKEAWAYS

1. **Use `npm run deploy`** - It's the safest way
2. **Keep `package-lock.json` in sync** - Always run `npm install`
3. **Wait 2-5 minutes** - GitHub Pages CDN takes time
4. **Test in incognito** - Avoids browser caching issues
5. **Use GitHub Actions** - Best for team workflows (auto on push to main)

That's it! You're all set for smooth deployments. 🚀
