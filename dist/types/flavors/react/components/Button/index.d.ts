import * as React from "react";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /** Defines the button vertical size */
    size: "large" | "medium" | "small";
    /** Button main style */
    type: "primary" | "secondary" | "text";
    /** Button color scheme */
    color: "default" | "inverted" | "danger";
    /** Disabled style and blocks onClick events */
    disabled: boolean;
    /** Adds a loading spinner to the button */
    loading: boolean;
    /** Defines how the button should expand */
    expand: "x" | "y" | "xy";
    /** Icon to show */
    Icon: React.FC<any>;
    /** side to show icon */
    iconRight: boolean;
    /** Display round icon button */
    onlyIcon: boolean;
    /** adds a space between button text and icons */
    spaceBetween: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
