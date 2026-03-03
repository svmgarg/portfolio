#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Streamlined deployment script for portfolio to GitHub Pages
.DESCRIPTION
    Syncs dependencies, builds, deploys, and verifies the deployment
.PARAMETER CommitMessage
    Custom commit message (optional)
.EXAMPLE
    .\deploy.ps1
    .\deploy.ps1 -CommitMessage "Update resume"
#>

param(
    [string]$CommitMessage = "Deploy latest build"
)

$ErrorActionPreference = "Stop"
$WarningPreference = "SilentlyContinue"

function Write-Step {
    param([string]$Message, [int]$Step)
    Write-Host ""
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
    Write-Host "STEP $Step: $Message" -ForegroundColor Cyan
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
}

function Write-Success {
    param([string]$Message)
    Write-Host "✅  $Message" -ForegroundColor Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "❌  $Message" -ForegroundColor Red
    exit 1
}

function Write-Warning-Custom {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

# Header
Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║     PORTFOLIO DEPLOYMENT SCRIPT        ║" -ForegroundColor Green
Write-Host "║          (GitHub Pages)                ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

# Step 1: Verify we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Error-Custom "package.json not found. Run this from portfolio root directory"
}
Write-Success "Found package.json - correct directory"

# Step 2: Sync dependencies
Write-Step "Syncing Dependencies" 1
Write-Host "Running: npm install" -ForegroundColor Gray
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Error-Custom "npm install failed - check for package conflicts"
}
Write-Success "Dependencies synced"

# Step 3: Build production bundle
Write-Step "Building Production Bundle" 2
Write-Host "Running: npm run build" -ForegroundColor Gray
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Error-Custom "npm run build failed"
}
Write-Success "Production build created"

# Step 4: Deploy to GitHub Pages
Write-Step "Deploying to GitHub Pages" 3
Write-Host "Running: npm run deploy" -ForegroundColor Gray
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Error-Custom "npm run deploy failed"
}
Write-Success "Deployed to gh-pages branch"

# Step 5: Wait for GitHub to recognize deployment
Write-Step "Waiting for GitHub Pages CDN" 4
Write-Host "Waiting 10 seconds for CDN to sync..." -ForegroundColor Gray
Start-Sleep -Seconds 10
Write-Success "CDN sync time allowed"

# Step 6: Verify deployment
Write-Step "Verifying Deployment" 5

try {
    Write-Host "Checking live site..." -ForegroundColor Gray
    $response = Invoke-WebRequest -Uri "https://svmgarg.github.io/portfolio/" `
        -UseBasicParsing `
        -TimeoutSec 10 `
        -ErrorAction Stop
    
    $html = $response.Content
    
    # Check for resume link
    $hasResume = $html -match "resume\.pdf"
    $bundleMatch = $html | Select-String "main\.[a-f0-9]+\.js" -AllMatches
    $bundleHash = if ($bundleMatch) { $bundleMatch.Matches[0].Value } else { "unknown" }
    
    Write-Host "Bundle hash: $bundleHash" -ForegroundColor Gray
    
    if ($hasResume) {
        Write-Host ""
        Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
        Write-Host "║    ✅  DEPLOYMENT SUCCESSFUL! ✅      ║" -ForegroundColor Green
        Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
        Write-Host ""
        Write-Host "📍 Live Site:" -ForegroundColor Green
        Write-Host "   https://svmgarg.github.io/portfolio/" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "📄 Resume Link:" -ForegroundColor Green
        Write-Host "   https://svmgarg.github.io/portfolio/resume.pdf" -ForegroundColor Cyan
        Write-Host ""
    } else {
        Write-Warning-Custom "Resume link not detected yet (CDN delay)"
        Write-Host "   Try again in 2-5 minutes" -ForegroundColor Yellow
        Write-Host "   Site: https://svmgarg.github.io/portfolio/" -ForegroundColor Cyan
    }
} catch {
    Write-Warning-Custom "Couldn't verify live site (network/timeout)"
    Write-Host "   Deployment likely succeeded - check manually in 2-5 minutes:" -ForegroundColor Yellow
    Write-Host "   https://svmgarg.github.io/portfolio/" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "🎉 Deployment process complete!" -ForegroundColor Green
Write-Host ""
