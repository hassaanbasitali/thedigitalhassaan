#!/bin/bash
# ================================================
# Hostinger Node.js Web App Deploy Script
# Run this after SSHing into your VPS/Node app
# ================================================

set -e

echo ">>> Node version: $(node --version)"
echo ">>> npm version: $(npm --version)"

echo ">>> Installing dependencies..."
npm install --legacy-peer-deps

echo ">>> Building Next.js standalone..."
npm run build

echo ">>> Copying static assets into standalone output..."
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

echo ">>> Build complete!"
echo ""
echo "To start the server, run:"
echo "  node .next/standalone/server.js"
echo ""
echo "To run with PM2 (recommended):"
echo "  pm2 start .next/standalone/server.js --name hassaan-portfolio"
echo "  pm2 save"
echo "  pm2 startup"
