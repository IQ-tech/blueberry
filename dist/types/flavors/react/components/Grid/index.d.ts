import * as React from "react";
/** Column sub-component */
declare type SpanConstant = "full" | "half" | "hide";
declare type ColumnsSpan = number | SpanConstant;
interface ColumnsConfig {
    phone?: ColumnsSpan;
    tablet?: ColumnsSpan;
    desktop?: ColumnsSpan;
}
export interface SpanProps {
    /** Number of columns this component should span (desktop has 12 columns total, tablet 8 columns and phone 4 columns) */
    columns?: ColumnsConfig;
    /** Define a size constant regardless of screen breakpoint */
    constant?: SpanConstant;
}
/** Row sub-component */
export interface RowProps {
    /** Automatically wrap content when columns exceed row space */
    wrap?: boolean;
    /** set row order */
    order?: number;
    /** Align all columns inside */
    justifyColumns?: "spaceBetween" | "right" | "left" | "center" | "spaceAround";
    /** Adds a margin to the bottom of the row */
    noBottomMargin?: boolean;
}
/** Grid main component */
export interface GridProps {
    /** Use Fluid version of grid */
    fluid?: boolean;
    /** Renders a colored version of the grid for prototyping  */
    prototyping?: boolean;
    /** Can remove the grid margin top */
    noMarginTop?: boolean;
}
interface GridComponentType<T> extends React.FC<T> {
    Span: React.FC<SpanProps>;
    Row: React.FC<RowProps>;
    Cell: React.FC;
}
declare const Grid: GridComponentType<GridProps>;
export default Grid;
