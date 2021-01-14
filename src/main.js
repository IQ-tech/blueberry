/** Lib entry point */

// Styles entry-file (will generate a .css file)
import "./core/main.styl";

// Design tokens
export { default as colors } from "./core/tokens/colors.json";
export { default as layout } from "./core/tokens/layout.json";
export { default as typography } from "./core/tokens/typography.json";

// React components lib
export * from "./flavors/react";
