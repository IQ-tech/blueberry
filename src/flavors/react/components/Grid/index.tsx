import * as React from "react";
import classNames from "classnames";

/** Column sub-component */
type ColumnsSpan = number | "full" | "half" | "hide";
interface ColumnsConfig {
  phone?: ColumnsSpan,
  tablet?: ColumnsSpan,
  desktop?: ColumnsSpan
}
export interface SpanProps {
  columns?: ColumnsConfig
}
const Span: React.FC<SpanProps> = ({
  children,
  columns
}) => {
  const componentClass = classNames("iq-grid__span", {
    [`iq-grid__span--phone-${columns?.phone}`]: !!columns?.phone,
    [`iq-grid__span--tablet-${columns?.tablet}`]: !!columns?.tablet,
    [`iq-grid__span--desktop-${columns?.desktop}`]: !!columns?.desktop,
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
}
const Row: React.FC<RowProps> = ({ children, wrap = true, order }) => {
  const componentClass = classNames("iq-grid__row", {
    "iq-grid__row--no-wrap": !wrap,
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

/** Grid main component */
export interface GridProps {
  /** Use Fluid version of grid */
  fluid?: boolean;
  /** Renders a colored version of the grid for prototyping  */
  prototyping?: boolean;
}

interface GridComponentType<T> extends React.FC<T> {
  Span: React.FC<SpanProps>;
  Row: React.FC<RowProps>;
}

const Grid: GridComponentType<GridProps> = ({
  children,
  fluid = false,
  prototyping = false,
}) => {
  const componentClass = classNames("iq-grid", {
    "iq-grid--fluid": !!fluid,
    "iq-grid--prototyping": !!prototyping,
  });

  return <div className={componentClass}>{children}</div>;
};

Grid.Row = Row;
Grid.Span = Span;

export default Grid;
