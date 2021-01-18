import React from "react";
import classNames from "classnames";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Defines the button vertical size */
  size: "large" | "medium" | "small";
  /** Button main style */
  type: "primary" | "secondary" | "text" | "icon";
  /** Button color scheme */
  color: "default" | "inverted" | "danger";
  disabled: boolean;
  icon: string;
  iconPosition: "left" | "right";
  loading: boolean;
  expand: "x" | "y" | "xy";
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
    [`btn--color-${color}`]: !!color,
  });

  function handleClick(e) {
    if (!disabled && !!onClick) onClick(e);
  }

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
