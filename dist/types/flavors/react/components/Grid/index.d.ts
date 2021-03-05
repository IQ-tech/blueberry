import * as React from "react";
/** Column sub-component */
declare type ColumnSpan = number | "full" | "half" | "hide";
export interface ColumnProps {
    phone?: ColumnSpan;
    tablet?: ColumnSpan;
    desktop?: ColumnSpan;
}
/** Row sub-component */
export interface RowProps {
    /** Automatically wrap content when columns exceed row space */
    wrap?: boolean;
    /** set row order */
    order?: number;
    /** Align all columns inside */
    justifyColumns?: "spaceBetween" | "right" | "left" | "center" | "spaceAround";
}
/** Grid main component */
export interface GridProps {
    /** Use Fluid version of grid */
    fluid?: boolean;
    /** Renders a colored version of the grid for prototyping  */
    prototyping?: boolean;
}
interface GridComponentType<T> extends React.FC<T> {
    Column: React.FC<ColumnProps>;
    Row: React.FC<RowProps>;
}
declare const Grid: GridComponentType<GridProps>;
export default Grid;
