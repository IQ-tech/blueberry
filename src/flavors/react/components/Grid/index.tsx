import React from "react";
import classNames from "classnames";

/** Column sub-component */
type ColumnSpan = number | "full" | "half" | "hide";
export interface ColumnProps {
  phone?: ColumnSpan;
  tablet?: ColumnSpan;
  desktop?: ColumnSpan;
}
const Column: React.FC<ColumnProps> = ({
  children,
  phone,
  tablet,
  desktop,
}) => {
  const componentClass = classNames("grid__column", {
    [`grid__column--phone-${phone}`]: !!phone,
    [`grid__column--tablet-${tablet}`]: !!tablet,
    [`grid__column--desktop-${desktop}`]: !!desktop,
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
  const componentClass = classNames("grid__row", {
    "grid__row--no-wrap": !wrap,
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
  Column: React.FC<ColumnProps>;
  Row: React.FC<RowProps>;
}

const Grid: GridComponentType<GridProps> = ({
  children,
  fluid = false,
  prototyping = false,
}) => {
  const componentClass = classNames("grid", {
    "grid--fluid": !!fluid,
    "grid--prototyping": !!prototyping,
  });

  return <div className={componentClass}>{children}</div>;
};

Grid.Row = Row;
Grid.Column = Column;

export default Grid;
