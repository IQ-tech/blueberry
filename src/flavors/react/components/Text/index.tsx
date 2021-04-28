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

interface DynamicVariant {
  default: TextVariant;
  aboveSmall: TextVariant;
}

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /* Component tag */
  as: keyof React.ReactHTML;
  /* Design system text Variant */
  variant?: TextVariant | DynamicVariant;
  /* Sets the default text color */
  defaultColor?: "title" | "subtitle" | "common";
}

const Text: React.FC<TextProps> = ({
  as = "p",
  variant,
  children,
  className,
  defaultColor,
  ...props
}) => {
  const getDefaultVariant = (): string => {
    if (typeof variant === "string") return variant;
    else if (typeof variant === "object") return variant?.default;
    else return "";
  };

  const aboveSmallVariant =
    typeof variant === "object" ? variant?.aboveSmall : "";
  const defaultVariant: string = getDefaultVariant();

  const rootClasses = classNames("iq-text", {
    [`iq-text--${defaultVariant}`]: !!defaultVariant,
    [`iq-text--above-small-${aboveSmallVariant}`]: !!aboveSmallVariant,
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
