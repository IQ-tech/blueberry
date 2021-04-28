import * as React from "react";
declare type HeadingVariant = "heading-one" | "heading-two" | "heading-three" | "heading-four" | "heading-five" | "heading-six";
declare type BodyTextVariant = "body-large" | "body-medium" | "body-small" | "body-micro";
declare type NumberTextVariant = "number-large" | "number-medium" | "number-small" | "number-micro";
declare type TextVariant = HeadingVariant | BodyTextVariant | NumberTextVariant;
interface DynamicVariant {
    default: TextVariant;
    aboveSmall: TextVariant;
}
interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as: keyof React.ReactHTML;
    variant?: TextVariant | DynamicVariant;
    defaultColor?: "title" | "subtitle" | "common";
}
declare const Text: React.FC<TextProps>;
export default Text;
