import * as React from "react";
import classNames from "classnames";
import TagComponent from "../../misc/TagComponent";

// props used by all heading components (H1, H2, H3 ..)
interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Defines de base color for the heading */
  type: "primary" | "secondary" | "tertiary";
  /** Custom color to be aplied to the heading (Hex, RGB, RGBA...) */
  customColor?: string;
}

interface BaseHeadingCompProps extends HeadingProps {
  tag: string;
}

const BaseHeadingComp: React.FC<BaseHeadingCompProps> = ({
  tag,
  type = "primary",
  customColor,
  ...props
}) => {
  const componentClass = classNames(`iq-${tag}`, {
    [`iq-${tag}--${type}`]: !!type,
  });

  const customInlineStyles = {
    style: {
      color: customColor,
    },
  };

  const propsToPass = customColor
    ? { ...props, ...customInlineStyles }
    : { ...props };

  return <TagComponent tag={tag} className={componentClass} {...propsToPass} />;
};

/** Heading components */

export const H1: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h1" {...props} />;
};

export const H2: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h2" {...props} />;
};

export const H3: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h3" {...props} />;
};

export const H4: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h4" {...props} />;
};

export const H5: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h5" {...props} />;
};

export const H6: React.FC<HeadingProps> = (props) => {
  return <BaseHeadingComp tag="h6" {...props} />;
};
