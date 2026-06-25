#!/usr/bin/env node

'use strict';

const { execSync, spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const pkg = require('./package.json');
const vsixName = `${pkg.name}-${pkg.version}.vsix`;
const vsixPath = path.join(__dirname, vsixName);

// ── helpers ──────────────────────────────────────────────────────────────────

function hasCode() {
  try {
    execSync('code --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function findAnyVsix() {
  return fs.readdirSync(__dirname).find(f => f.endsWith('.vsix'));
}

// ── preflight ─────────────────────────────────────────────────────────────────

if (!hasCode()) {
  console.error(`
  VS Code is not in your PATH.

  Fix: open VS Code → Ctrl+Shift+P → "Shell Command: Install 'code' command in PATH"
  Then run this installer again.
`);
  process.exit(1);
}

// ── package if needed ─────────────────────────────────────────────────────────

if (!fs.existsSync(vsixPath)) {
  const fallback = findAnyVsix();
  if (fallback) {
    console.log(`\n  Found ${fallback}, using that.\n`);
  } else {
    console.log('\n  No VSIX found — packaging the extension now...\n');
    try {
      execSync('npx --yes @vscode/vsce package --no-dependencies', {
        cwd: __dirname,
        stdio: 'inherit',
      });
    } catch {
      console.error('\n  Packaging failed. Make sure Node.js is up to date and try again.\n');
      process.exit(1);
    }

    if (!findAnyVsix()) {
      console.error(`\n  Packaging finished but no VSIX was created. Something went wrong.\n`);
      process.exit(1);
    }
  }
}

const target = fs.existsSync(vsixPath) ? vsixPath : path.join(__dirname, findAnyVsix());

// ── install ───────────────────────────────────────────────────────────────────

console.log(`\n  Installing ${path.basename(target)} into VS Code...\n`);

const result = spawnSync('code', ['--install-extension', target], { stdio: 'inherit' });

if (result.status === 0) {
  console.log(`
  ✔  Colored Desert Enhanced installed!

  Reload VS Code to apply the theme:
    Ctrl+Shift+P → "Reload Window"

  Then pick the theme:
    Ctrl+Shift+P → "Preferences: Color Theme" → Colored Desert Enhanced
`);
} else {
  process.exit(result.status ?? 1);
}
