# Colored Desert Enhanced

I've been using **Colored Desert** by DevAnorak for a while — it's a warm, desert-toned VS Code theme with a vibe I haven't found anywhere else. But it had rough edges: invisible text in a few spots, neon colours leaking into neutral UI areas, dark panels sitting inside an otherwise all-light theme, terminal colours with broken alpha values. Small things, but they added up over time.

So I started tweaking. Then I kept tweaking. At some point it stopped being a few quick patches and became a full workbench audit — 400+ colour tokens audited or added across all three theme variants (light, dark, pastel). Bracket pair guides, inlay hints, the command palette, the testing panel, diff gutters, symbol icons — everything. It's genuinely my main VS Code theme now, and this is the version I actually use daily.

Original theme by DevAnorak. I just fixed it a lot.

---

## Install

### Download from GitHub Releases (easiest)

1. Go to the **Releases** tab of this repo on GitHub
2. Download the `.vsix` file from the latest release
3. Open VS Code → `Ctrl+Shift+P` → **Extensions: Install from VSIX…**
4. Pick the downloaded file
5. `Ctrl+Shift+P` → **Preferences: Color Theme** → pick a variant

### Build and install yourself

You need [Node.js](https://nodejs.org) (any LTS) and VS Code with `code` in your PATH.

```bash
git clone https://github.com/Krish-Chauhan/colored-desert-enhanced
cd colored-desert-enhanced
npm run package
node install.js
```

`npm run package` downloads `@vscode/vsce` automatically via `npx` — no global install needed.

---

## Make changes and redeploy

All theme work lives in three files:

| File | What it controls |
|------|-----------------|
| `themes/colored-desert.json` | Light variant |
| `themes/colored-desert-dark.json` | Dark variant |
| `themes/colored-desert-pastel.json` | Pastel variant |

**Live preview workflow:**

1. Open the repo folder in VS Code
2. Press `F5` — this opens an **Extension Development Host** window with your changes live
3. In the dev window: `Ctrl+Shift+P` → **Preferences: Color Theme** → pick a variant
4. Edit a theme JSON and save → `Ctrl+R` in the dev window to reload

**Release a new version:**

1. Bump the `"version"` field in `package.json`
2. Run `npm run package` — this creates `colored-desert-enhanced-<version>.vsix`
3. Commit and push your changes
4. On GitHub: **Releases** → **Draft a new release**
5. Create a tag matching the version (e.g. `v0.0.16`)
6. Drag the `.vsix` file into the release assets
7. Publish — anyone can now download it directly from the Releases tab

---

## Theme variants

| Variant | Base | Feel |
|---------|------|------|
| Colored Desert Enhanced | Light `#f1e4bb` | Warm sand, the classic |
| Colored Desert Dark Enhanced | Dark `#504945` | Same warmth, dark room |
| Colored Desert Pastel Enhanced | Light `#f3ecce` | Softer, cooler pastels |

---

## Color palette (light variant)

| Role | Hex |
|------|-----|
| Background | `#f1e4bb` |
| Main text | `#4b4b4b` |
| Teal (variables) | `#29baba` |
| Orange (types) | `#ff8300` |
| Blue (functions) | `#0093ff` |
| Green (operators) | `#0cbe20` |
| Pink (keywords) | `#ff2fc1` |
| Amber (constants) | `#903701` |

---

## Credits

Original theme by **DevAnorak** — MIT licensed.  
Extended and maintained by **Krish Chauhan**.
