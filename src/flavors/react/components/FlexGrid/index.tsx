import React from "react";
import classNames from "classnames";

// Row
interface RowProps {
  justifySelf?: string;
}
const Row: React.FC<RowProps> = ({ children }) => {
  return <div className="flex-grid__row">{children}</div>;
};

// Column
interface ColumnProps {
  xs?: number;
}
const Column: React.FC<ColumnProps> = ({ children }) => {
  return <div className="flex-grid__column">{children}</div>;
};

// Grid main component
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
