// Interop shim for `column-resizer`, used only by the Storybook dev server via
// a `resolve.alias` in `.storybook/main.ts`.
//
// `column-resizer` ships a UMD bundle whose `module.exports` is
// `{ __esModule: true, default: ColumnResizer }`. Vite 5's esbuild optimizer
// honored the `__esModule` flag and exposed the constructor as the ESM default,
// but vite 8's Rolldown optimizer does not — a default import resolves to the
// wrapper object instead, so DataTable's `new ColumnResizer(...)` throws
// "ColumnResizer is not a constructor" (and, if the dep is left unbundled, the
// raw UMD IIFE has no ESM default at all → "does not provide an export named
// default"). The library build (vite.config.ts) and vitest resolve the interop
// correctly and are unaffected; this shim only rewires the Storybook dev path.
//
// Import the real module by its explicit dist subpath. The alias that routes
// here is exact-anchored (`/^column-resizer$/`), so this bare subpath specifier
// is NOT rewritten and Vite serves the actual UMD file. Then unwrap nested
// `default`s until we reach the constructor, so this is robust to however the
// optimizer wraps it.
import * as columnResizerModule from 'column-resizer/dist/column-resizer.js';

let ColumnResizer = columnResizerModule.default ?? columnResizerModule;
while (
	ColumnResizer &&
	typeof ColumnResizer !== 'function' &&
	ColumnResizer.default
) {
	ColumnResizer = ColumnResizer.default;
}

export default ColumnResizer;
