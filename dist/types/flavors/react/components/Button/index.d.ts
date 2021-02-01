import React from "react";
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /** Defines the button vertical size */
    size: "large" | "medium" | "small";
    /** Button main style */
    type: "primary" | "secondary" | "text" | "icon";
    /** Button color scheme */
    color: "default" | "inverted" | "danger";
    /** Disabled style and blocks onClick events */
    disabled: boolean;
    /** Adds a loading spinner to the button */
    loading: boolean;
    /** Defines how the button should expand */
    expand: "x" | "y" | "xy";
    icon: string;
    iconPosition: "left" | "right";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
//# sourceMappingURL=index.d.ts.map