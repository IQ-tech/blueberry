// @ts-ignore
import layout from "../tokens/layout.json";

const breakpoints = layout["breakpoints"];

export const minWidthQuery = (breakpoint: string): string =>
  `@media (min-width: ${breakpoint})`;

export const between = (breakpointA: string, breakpointB: string): string =>
  `@media (min-width: ${breakpointA}) and (max-width: ${breakpointB})`;

export const aboveXsmall: string = minWidthQuery(breakpoints["xsmall"]);
export const aboveSmall: string = minWidthQuery(breakpoints["small"]);
export const aboveMedium: string = minWidthQuery(breakpoints["medium"]);
export const aboveLarge: string = minWidthQuery(breakpoints["large"]);
export const aboveXLarge: string = minWidthQuery(breakpoints["xlarge"]);
