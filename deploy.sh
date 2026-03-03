#!/bin/bash
# Streamlined deployment script for portfolio

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Functions
write_step() {
    echo ""
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${CYAN}STEP $1: $2${NC}"
    echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
}

write_success() {
    echo -e "${GREEN}✅  $1${NC}"
}

write_error() {
    echo -e "${RED}❌  $1${NC}"
    exit 1
}

write_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Header
echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║     PORTFOLIO DEPLOYMENT SCRIPT        ║${NC}"
echo -e "${GREEN}║          (GitHub Pages)                ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""

# Check directory
if [ ! -f "package.json" ]; then
    write_error "package.json not found. Run from portfolio root"
fi
write_success "Found package.json"

# Step 1: Sync dependencies
write_step "1" "Syncing Dependencies"
echo -e "${CYAN}Running: npm install${NC}"
npm install || write_error "npm install failed"
write_success "Dependencies synced"

# Step 2: Build
write_step "2" "Building Production Bundle"
echo -e "${CYAN}Running: npm run build${NC}"
npm run build || write_error "npm run build failed"
write_success "Production build created"

# Step 3: Deploy
write_step "3" "Deploying to GitHub Pages"
echo -e "${CYAN}Running: npm run deploy${NC}"
npm run deploy || write_error "npm run deploy failed"
write_success "Deployed to gh-pages branch"

# Step 4: Wait
write_step "4" "Waiting for GitHub Pages CDN"
echo "Waiting 10 seconds for CDN to sync..."
sleep 10
write_success "CDN sync time allowed"

# Step 5: Verify
write_step "5" "Verifying Deployment"
echo "Checking live site..."

SITE_URL="https://svmgarg.github.io/portfolio/"
HTTP_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL" --connect-timeout 5)

if [ "$HTTP_CODE" = "200" ]; then
    CONTENT=$(curl -s "$SITE_URL")
    if echo "$CONTENT" | grep -q "resume\.pdf"; then
        echo ""
        echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
        echo -e "${GREEN}║    ✅  DEPLOYMENT SUCCESSFUL! ✅      ║${NC}"
        echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "${GREEN}📍 Live Site:${NC}"
        echo -e "${CYAN}   $SITE_URL${NC}"
        echo ""
        echo -e "${GREEN}📄 Resume Link:${NC}"
        echo -e "${CYAN}   https://svmgarg.github.io/portfolio/resume.pdf${NC}"
        echo ""
    else
        write_warning "Resume link not detected yet (CDN delay)"
        echo "   Try again in 2-5 minutes"
    fi
else
    write_warning "Couldn't verify live site"
    echo "   Deployment likely succeeded - check manually in 2-5 minutes"
fi

echo ""
echo -e "${GREEN}🎉 Deployment process complete!${NC}"
echo ""
