import * as React from "react";
import classNames from "classnames";
import Conditional from "../misc/Conditional";

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

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  type = "primary",
  iconPosition = "left",
  children = "Button component",
  disabled = false,
  icon = "",
  loading = false,
  color = "default",
  expand,
  onClick,
  ...props
}) => {
  const buttonClasses = classNames("iq-btn", {
    [`iq-btn--type-${type}`]: !!type,
    [`iq-btn--size-${size}`]: !!size,
    [`iq-btn--expand-${expand}`]: !!expand,
    [`iq-btn--color-${color}`]: !!color && color !== "default",
    "iq-btn--disabled": !!disabled,
    "iq-btn--loading": !!loading,
  });

  function handleClick(e) {
    if (!disabled && !!onClick) onClick(e);
  }

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {children}
      <Conditional
        condition={loading}
        renderIf={
          <div className="iq-btn__loading-overlay">
            <div className="iq-btn__loading-spinner" />
          </div>
        }
      />
    </button>
  );
};

export default Button;
