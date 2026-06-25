# Changelog

> **Colored Desert Enhanced** — maintained by Krish Chauhan.
> Based on the original [Colored Desert](https://github.com/SirSouza/Colored-Desert-VScode-theme) by DevAnorak.
> Versions 0.0.1–0.0.14 are DevAnorak's releases. 0.0.15+ are mine.

---

## 0.0.15 (Krish Chauhan)

Complete workbench audit and compatibility update for VS Code 1.86+.
Palette and syntax highlighting are preserved exactly; only workbench colors changed.

**Visibility fixes**
- `foreground`, `icon.foreground`, `settings.headerForeground` were `#ebdbb2` (near-identical to the `#f1e4bb` background). Changed to `#4b4b4b` so all workbench labels and icons are legible.
- `editorInfo.foreground` was `#ebdbb2` (invisible squiggle). Changed to `#0073b7`.
- `editorCodeLens.foreground` was `#ebdbb2` (invisible). Changed to `#6b6b6b`.
- `editorLineNumber.activeForeground` was `#ff77fd` (neon pink). Changed to `#4b4b4b`.
- `textLink.foreground` was `#ebdbb2` (invisible link text). Changed to `#0073b7`.
- `editorRuler.foreground` and `editorGroupHeader.tabsBorder` were `#ebdbb2` (invisible). Changed to `#c9b890`.
- `breadcrumb.focusForeground` and `breadcrumb.activeSelectionForeground` were `#f7f7f7` (near-white on light background). Changed to `#4b4b4b`.

**Light-theme consistency fixes**
- `list.hoverBackground` was `#3b3b3b` (dark panel in a light theme). Changed to `#decfa1` (warm tan).
- `list.hoverForeground` was `#c0c0c0` (goes with the old dark hover). Changed to `#4b4b4b`.
- `list.activeSelectionForeground` changed from `#ffffff` to `#ebdbb2` (warm cream on dark selection).
- `list.inactiveSelectionBackground` changed from `#ebdbb26c` to `#d3c6a3`; `list.inactiveSelectionForeground` from `#c0c0c0` to `#4b4b4b`.
- `editorWidget.foreground` was `#f839ff` (bright pink). Changed to `#4b4b4b`.
- `editorSuggestWidget.foreground` was `#ff00b3` (bright pink). Changed to `#4b4b4b`.
- `peekViewResult.fileForeground` was `#ff00bf`; `peekViewTitleLabel.foreground` was `#8b00ff`. Both changed to `#4b4b4b`.
- `notifications.background` was `#3c3836` and `notifications.foreground` was `#ebdbb2` (dark notification panel). Converted to light style matching the rest of the UI.
- `notificationsInfoIcon.foreground` changed from `#75e5ff` (cyan on cream, invisible) to `#0073b7`.
- `notificationsWarningIcon.foreground` changed from `#fbc800` (yellow on cream, low contrast) to `#946a00`.
- `debugToolBar.background` and `debugExceptionWidget.background` were `#504945` (dark panels). Changed to `#f1e4bb`.
- `editorMarkerNavigation.background` was `#4b4b4b` (dark). Changed to `#f1e4bb`.
- `walkThrough.embeddedEditorBackground` was `#00000050` (semi-transparent black card). Changed to `#e8ddb0` (warm beige).
- `statusBar.noFolderBackground` was `#be75c0bb` (semi-transparent purple, off-palette). Changed to `#b09d6c` (warm tan, matches debug bar).
- `editorIndentGuide.background` was `#4b4b4b` (too dark on the sandy background). Changed to `#4b4b4b33`.
- `editorIndentGuide.activeBackground` was `#ebdbb2` (invisible). Changed to `#4b4b4b99`.
- `scrollbarSlider.hoverBackground` and `scrollbarSlider.activeBackground` were near-black (`#000000d7`, `#000000a7`). Changed to `#4b4b4b77`/`#4b4b4b99`.
- `input.placeholderForeground` was `#131313` (very harsh black). Changed to `#6b6b6b`.
- `inputOption.activeForeground` was `#f56060` (red). Changed to `#4b4b4b`.
- `inputOption.activeBorder` was `#007acc00` (transparent). Changed to `#b09d6c`.
- `panelTitle.inactiveForeground` was `#38323285` (very faint). Changed to `#6b6b6b`.
- `tab.hoverForeground` was `#ffffff` (white on medium-tan hover). Changed to `#4b4b4b`. Hover background updated to `#d3c6a3`.
- `tab.activeBorderTop` changed from transparent to `#4b4b4b` to show an active-tab indicator.
- `progressBar.background` changed from `#a5a5a5` to `#4b4b4b` (more visible).
- `statusBarItem.hoverBackground` was `#ffffff00` (invisible). Changed to `#ffffff22`.

**Git decoration colors**
- Rationalised git colors to use the theme's own palette: added `#00a000` (green) for added/untracked, `#ff8300` (orange) for modified, `#ff2fc1` (magenta) for deleted, `#0093ff` (blue) for conflicting/submodule.

**Terminal**
- Removed alpha channels from all ANSI colors (non-standard; some terminals ignore alpha).
- `terminal.ansiCyan` now uses the theme's own teal `#29baba`.
- `terminal.ansiWhite` changed to warm off-white `#c0b9a0` instead of semi-transparent white.
- `terminal.ansiBlack` changed to `#262626` (warm near-black).
- Magenta colors changed from electric `#ff00ff` to more muted warm variants.
- `terminalCursor.foreground` changed from `#ffffff` to `#f1e4bb` (warm cream).
- `terminal.selectionBackground` updated to `#b09d6c40` (on-palette).

**New modern tokens added (VS Code 1.67–1.90)**
- `editorBracketHighlight.*` and `editorBracketPairGuide.*` — bracket pair colourisation using the existing syntax palette.
- `editorIndentGuide.background1` / `activeBackground1` — current indent guide tokens.
- `editorInlayHint.*` — inlay hint colors (warm sand background, dark text).
- `editorLightBulb.*` — code-action bulb colors.
- `editorHoverWidget.highlightForeground` / `statusBarBackground` — hover widget sub-tokens.
- `editorSuggestWidget.selectedForeground`, `selectedIconForeground`, `focusHighlightForeground`.
- `editorWidget.border`.
- `editorHint.*`.
- `editorOverviewRuler.*` — 14 new overview ruler lanes.
- `editorMarkerNavigation*.headerBackground`.
- `diffEditorGutter.*`, `diffEditorOverview.*`, `diffEditor.insertedLineBackground`, `removedLineBackground`, `diagonalFill`.
- `editorGroup.focusedEmptyBorder`, `editorGroupHeader.noTabsBackground`.
- `tab.unfocused*`, `tab.activeModifiedBorder`, `tab.inactiveModifiedBorder`.
- `symbolIcon.*` — all 29 symbol icon color tokens, matched to the syntax palette.
- `charts.*` — 8 chart color tokens.
- `commandCenter.*` — command center bar colors.
- `keybindingLabel.*` — keybinding pill colors.
- `profileBadge.*`, `extensionBadge.*`, `extensionButton.*`.
- `inputValidation.*` — error/warning/info validation states.
- `list.filterMatchBackground/Border`, `deemphasizedForeground`, `errorForeground`, `warningForeground`, `focusHighlightForeground`, `focusOutline`, `inactiveFocusBackground`, `inactiveSelectionFocusBorder`, `activeSelectionIconForeground`.
- `listFilterWidget.shadow`, `listFilterWidget.noMatchesOutline` (now uses error red).
- `tree.tableColumnsBorder`, `tree.tableOddRowsBackground`.
- `scm.historyItem*`.
- `testing.*` — 10 testing tokens.
- `problems.*` — 3 problem icon tokens.
- `search.resultsInfoForeground`.
- `settings.*` — 14 new settings-page tokens.
- `minimapSlider.*`, `minimap.foregroundOpacity`, `minimap.selectionOccurrenceHighlight`.
- `welcomePage.*`, `walkthrough.stepTitle.foreground`.
- `debugView.*`, `debugTokenExpression.*`.
- `panelInput.border`, `sash.hoverBorder`, `textLink.activeForeground`, `button.border`, `button.separatorBackground`.
- `dropdown.listBackground`, `terminal.tab.activeBorder`.
- `commandCenter.debuggingBackground`.

**Cleanup**
- Removed non-standard alpha from status bar borders and checkbox.
- Consolidated `badge.background` and `activityBarBadge.background` to clean hex (removed alpha byte).
- All duplicate `#ebdbb2`-on-`#f1e4bb` combinations resolved.
- Colors organised into labelled sections.

## 0.0.1

- Initial release
- Light theme inspired by desert colors

## 0.0.2

- Color changes
- Colors intensity adjustment
- Add Icon
- Add Banner

## 0.0.3

- Small fixes
- Colors adjusment for a better reading

## 0.0.4

- Change preview

## 0.0.5

- Change preview
- Fix colors for list.highlightForeground

## 0.0.6

- Small fixes

## 0.0.7

- backgound color changed to a better beige ton

## 0.0.8

- Chage the foreground for icons

## 0.0.9

- Small fixes

## 0.0.10

- Small fixes

## 0.0.11

- Fixed color icons in title bar

## 0.0.12

- editorSuggestWidget.selectedBackground from #ffffff to #8f8e8e

## 0.0.13

- Added a dark version and pastel-toned syntax highlighting for those who prefer it.

## 0.0.14

- Changed background color and some syntax colors to a better reading
