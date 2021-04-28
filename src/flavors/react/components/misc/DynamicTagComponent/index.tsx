import * as React from "react";

interface DynamicTagComponentProps extends React.HTMLAttributes<HTMLElement> {
  /** Html tag that this component root should have */
  tag: string;
}

const DynamicTagComponent: React.FC<DynamicTagComponentProps> = ({
  children = "Dynamic tag component",
  tag = "button",
  ...props
}) => React.createElement(tag, { ...props }, children);

export default DynamicTagComponent;
