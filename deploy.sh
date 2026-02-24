#!/bin/bash
# ================================================
# Hostinger VPS Deploy Script — thedigitalhassaan
# Run this after SSHing into your VPS
# ================================================

set -e

echo ">>> Installing dependencies..."
npm install --frozen-lockfile

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
echo "To run with PM2 (recommended for VPS):"
echo "  pm2 start .next/standalone/server.js --name hassaan-portfolio"
echo "  pm2 save"
echo "  pm2 startup"
