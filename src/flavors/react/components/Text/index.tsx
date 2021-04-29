import * as React from "react";
import DynamicTagComponent from "../misc/DynamicTagComponent";
import classNames from "classnames";

type HeadingVariant =
  | "heading-one"
  | "heading-two"
  | "heading-three"
  | "heading-four"
  | "heading-five"
  | "heading-six";

type BodyTextVariant =
  | "body-large"
  | "body-medium"
  | "body-small"
  | "body-micro";

type NumberTextVariant =
  | "number-large"
  | "number-medium"
  | "number-small"
  | "number-micro";

type TextVariant = HeadingVariant | BodyTextVariant | NumberTextVariant;

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /* Component tag */
  as: keyof React.ReactHTML;
  /* Design system text Variant */
  variant?: TextVariant;
  /* sets variant on desktop */
  variantDesk?: TextVariant;
  /* Sets the default text color */
  defaultColor?: "title" | "subtitle" | "common";
}

const Text: React.FC<TextProps> = ({
  as = "p",
  variant = "body-medium",
  variantDesk,
  children,
  className,
  defaultColor,
  ...props
}) => {
  const rootClasses = classNames("iq-text", {
    [`iq-text--${variant}`]: !!variant,
    [`iq-text--desk-${variantDesk}`]: !!variantDesk,
    [`iq-text--color-${defaultColor}`]: !!defaultColor,
    [className]: !!className,
  });

  return (
    <DynamicTagComponent tag={as} className={rootClasses} {...props}>
      {children}
    </DynamicTagComponent>
  );
};

export default Text;
