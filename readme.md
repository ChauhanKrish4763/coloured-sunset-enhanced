# Colored Desert Enhanced

An enhanced fork of **Colored Desert** by DevAnorak (MIT licensed).
Original palette, original syntax highlighting, original vibe —
with a complete workbench audit, modern VS Code token coverage, and a cleaner terminal palette.

---

## Install from a GitHub Release

1. Go to the **Releases** page of this repo
2. Download the `.vsix` file from the latest release
3. Open VS Code
4. `Ctrl+Shift+P` → **Extensions: Install from VSIX…**
5. Pick the downloaded file
6. `Ctrl+Shift+P` → **Preferences: Color Theme** → **Colored Desert Enhanced**

---

## Build and install it yourself

You need [Node.js](https://nodejs.org) (any LTS version) and VS Code with `code` in your PATH.

```bash
# clone the repo
git clone https://github.com/Krish-Chauhan/colored-desert-enhanced
cd colored-desert-enhanced

# package it into a .vsix
npm run package

# install it directly into VS Code
node install.js
```

`npm run package` calls `@vscode/vsce` — it will download automatically via `npx`, no global install needed.

The packaged file will be named `colored-desert-enhanced-<version>.vsix`.

---

## Make changes and redeploy

All theme color work lives in two files:

| File | What it controls |
|------|-----------------|
| `themes/colored-desert.json` | The main light theme (workbench + syntax) |
| `themes/colored-desert-dark.json` | Dark variant |
| `themes/colored-desert-pastel.json` | Pastel variant |

**Workflow:**

1. Edit `themes/colored-desert.json` in VS Code
2. Press `F5` — this opens an **Extension Development Host** window with your theme live
3. Change the theme in the dev window: `Ctrl+Shift+P` → **Preferences: Color Theme**
4. Every time you save the file, reload the dev window (`Ctrl+R`) to see updates
5. When you are happy, bump the version in `package.json`
6. Run `npm run package` to build the new `.vsix`

**Releasing on GitHub:**

1. Commit all your changes and push to GitHub
2. Go to your repo → **Releases** → **Draft a new release**
3. Create a tag matching the version (e.g. `v0.0.16`)
4. Attach the `.vsix` file to the release
5. Publish

Anyone who wants the theme downloads the `.vsix` from Releases and installs it as described above.

---

## Color palette reference

| Role | Hex |
|------|-----|
| Background | `#f1e4bb` |
| Sidebar / panels | `#f1e4bb` |
| Active sidebar row | `#e0d3ad` |
| Section headers | `#d3c6a3` |
| Main dark text | `#4b4b4b` |
| Teal (variables) | `#29baba` |
| Orange (types) | `#ff8300` |
| Blue (functions) | `#0093ff` |
| Green (operators) | `#0cbe20` |
| Pink (keywords) | `#ff2fc1` |
| Dark amber (constants) | `#903701` |
| Red (strings) | `#ff0000` at ~67% opacity |

---

## Credits

Original theme by **DevAnorak**. Licensed under MIT.
Extended and maintained by **Krish Chauhan**.
