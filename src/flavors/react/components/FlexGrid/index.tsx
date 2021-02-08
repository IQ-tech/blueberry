import React from "react";
import classNames from "classnames";

/** Column sub-component */
type ColumnSpan = number | "full" | "half";
interface ColumnProps {
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
  const componentClass = classNames("flex-grid__column", {
    [`flex-grid__column--phone-${phone}`]: !!phone,
    [`flex-grid__column--tablet-${tablet}`]: !!tablet,
    [`flex-grid__column--desktop-${desktop}`]: !!desktop,
  });
  return <div className={componentClass}>{children}</div>;
};

/** Row sub-component */
interface RowProps {
  /** Automatically wrap content when columns exceed row space */
  wrap?: boolean;
}
const Row: React.FC<RowProps> = ({ children, wrap = true }) => {
  const componentClass = classNames("flex-grid__row", {
    "flex-grid__row--no-wrap": !wrap,
  });

  return <div className={componentClass}>{children}</div>;
};

/** Grid main component */
interface GridProps {
  /** Use Fluid version of grid */
  fluid: boolean;
  /** Renders a colored version of the grid for prototyping  */
  prototyping: boolean;
}

interface GridComponentType<T> extends React.FC<T> {
  Column: React.FC<ColumnProps>;
  Row: React.FC<RowProps>;
}

const FlexGrid: GridComponentType<GridProps> = ({
  children,
  fluid = false,
  prototyping = true,
}) => {
  const componentClass = classNames("flex-grid", {
    "flex-grid--fluid": !!fluid,
    "flex-grid--prototyping": !!prototyping,
  });

  return <div className={componentClass}>{children}</div>;
};

FlexGrid.Row = Row;
FlexGrid.Column = Column;

export default FlexGrid;
