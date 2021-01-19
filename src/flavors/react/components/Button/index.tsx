import React from "react";
import classNames from "classnames";
import If from "../misc/If";

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
  const buttonClasses = classNames("btn", {
    [`btn--type-${type}`]: !!type,
    [`btn--size-${size}`]: !!size,
    [`btn--expand-${expand}`]: !!expand,
    [`btn--color-${color}`]: !!color && color !== "default",
    "btn--disabled": !!disabled,
    "btn--loading": !!loading,
  });

  function handleClick(e) {
    if (!disabled && !!onClick) onClick(e);
  }

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {children}
      <If
        condition={loading}
        renderIf={
          <div className="btn__loading-overlay">
            <div className="btn__loading-spinner" />
          </div>
        }
      />
    </button>
  );
};

export default Button;
