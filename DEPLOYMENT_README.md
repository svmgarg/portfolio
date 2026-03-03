# Shivam's Portfolio

A React-based portfolio site with automated GitHub Pages deployment.

## 🚀 Quick Start

### Local Development
```bash
npm install
npm start
# Opens http://localhost:3000
```

### Deploy to Production
```bash
npm run deploy
```

That's it! Deploys to: https://svmgarg.github.io/portfolio/

---

## 📚 Documentation

- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup & deployment guide
- **[DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)** - Detailed troubleshooting
- **[deploy.ps1](deploy.ps1)** - Windows deployment script
- **[deploy.sh](deploy.sh)** - Mac/Linux deployment script

---

## 📋 Key Information

| Aspect | Details |
|--------|---------|
| **Live Site** | https://svmgarg.github.io/portfolio/ |
| **Resume** | `/resume.pdf` |
| **Framework** | React 17 + Bootstrap |
| **Hosting** | GitHub Pages (gh-pages branch) |
| **Auto Deploy** | GitHub Actions on push to main |

---

## 🔧 Technology Stack

- **Frontend:** React, Bootstrap, React Icons
- **Build:** Create React App
- **Hosting:** GitHub Pages
- **Version Control:** Git/GitHub

---

## 📝 Commands

```bash
npm install          # Install dependencies
npm start            # Start dev server (localhost:3000)
npm run build        # Build production bundle
npm run deploy       # Build + Deploy to GitHub Pages
```

---

## 🎯 Deployment Workflow

**For quick deploys:**
```bash
npm run deploy
```

**For detailed feedback:**
```bash
./deploy.ps1           # Windows
bash deploy.sh         # Mac/Linux
```

**Automatic (recommended):**
Just push to `main` branch - GitHub Actions handles everything!

---

## 📞 Contact Information

- **Email:** svmgarg@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/svmgarg/
- **GitHub:** https://github.com/svmgarg/
- **Resume:** https://svmgarg.github.io/portfolio/resume.pdf

---

## ✨ Quick Verification After Deploy

1. Wait 2-5 minutes for CDN
2. Visit: https://svmgarg.github.io/portfolio/
3. Click "View PDF Resume" → should open PDF in new tab

---

**Last Deployed:** Check GitHub Actions tab for latest deployment status
