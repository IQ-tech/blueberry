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
  const componentClass = classNames("iq-flex-grid__span", {
    [`iq-flex-grid__span--phone-${columns?.phone}`]: !!columns?.phone,
    [`iq-flex-grid__span--tablet-${columns?.tablet}`]: !!columns?.tablet,
    [`iq-flex-grid__span--desktop-${columns?.desktop}`]: !!columns?.desktop,
    [`iq-flex-grid__span--const-${constant}`]: !!constant,
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
  const componentClass = classNames("iq-flex-grid__row", {
    "iq-flex-grid__row--no-wrap": !wrap,
    "iq-flex-grid__row--no-bottom-margin": !!noBottomMargin,
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
  return <div className="iq-flex-grid__cell">{children}</div>;
};

/** Grid main component */
export interface FlexGridProps {
  /** Use Fluid version of grid */
  fluid?: boolean;
  /** Renders a colored version of the grid for prototyping  */
  prototyping?: boolean;
  /** Can remove the grid margin top */
  noMarginTop?: boolean;
}

interface FlexGridComponentType<T> extends React.FC<T> {
  Span: React.FC<SpanProps>;
  Row: React.FC<RowProps>;
  Cell: React.FC;
}

const FlexGrid: FlexGridComponentType<FlexGridProps> = ({
  children,
  fluid = false,
  prototyping = false,
  noMarginTop = false,
}) => {
  const componentClass = classNames("iq-flex-grid", {
    "iq-flex-grid--fluid": !!fluid,
    "iq-flex-grid--prototyping": !!prototyping,
    "iq-flex-grid--no-margin-top": !!noMarginTop,
  });

  return <div className={componentClass}>{children}</div>;
};

FlexGrid.Row = Row;
FlexGrid.Span = Span;
FlexGrid.Cell = Cell;

export default FlexGrid;
