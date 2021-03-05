import * as React from "react";

interface TagComponentProps extends React.HTMLAttributes<HTMLElement> {
  /** Html tag that this component root should have */
  tag: string;
}

const TagComponent: React.FC<TagComponentProps> = ({
  children = "Dynamic tag component",
  tag = "button",
  ...props
}) => React.createElement(tag, { ...props }, children);

export default TagComponent;
