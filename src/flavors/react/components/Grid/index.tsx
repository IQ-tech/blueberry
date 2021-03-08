import * as React from "react";
import classNames from "classnames";

/** Column sub-component */
type SpanConstant = "full" | "half" | "hide";
type ColumnsSpan = number | SpanConstant;
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
const Span: React.FC<SpanProps> = ({ children, columns, constant }) => {
  const componentClass = classNames("iq-grid__span", {
    [`iq-grid__span--phone-${columns?.phone}`]: !!columns?.phone,
    [`iq-grid__span--tablet-${columns?.tablet}`]: !!columns?.tablet,
    [`iq-grid__span--desktop-${columns?.desktop}`]: !!columns?.desktop,
    [`iq-grid__span--const-${constant}`]: !!constant,
  });
  return <div className={componentClass}>{children}</div>;
};

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
const Row: React.FC<RowProps> = ({
  children,
  wrap = true,
  order,
  noBottomMargin = false,
}) => {
  const componentClass = classNames("iq-grid__row", {
    "iq-grid__row--no-wrap": !wrap,
    "iq-grid__row--no-bottom-margin": !!noBottomMargin,
  });

  const inlinestyle = {
    ...(order ? { order } : {}),
  };

  return (
    <div className={componentClass} style={inlinestyle}>
      {children}
    </div>
  );
};

/** Optional Grid Cell Component */

const Cell: React.FC = ({ children }) => {
  return <div className="iq-grid__cell">{children}</div>;
};

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

const Grid: GridComponentType<GridProps> = ({
  children,
  fluid = false,
  prototyping = false,
  noMarginTop = false,
}) => {
  const componentClass = classNames("iq-grid", {
    "iq-grid--fluid": !!fluid,
    "iq-grid--prototyping": !!prototyping,
    "iq-grid--no-margin-top": !!noMarginTop,
  });

  return <div className={componentClass}>{children}</div>;
};

Grid.Row = Row;
Grid.Span = Span;
Grid.Cell = Cell;

export default Grid;
