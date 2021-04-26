import * as React from "react";
import classNames from "classnames";
import Conditional from "../misc/Conditional";

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

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  type = "primary",
  iconRight = false,
  children = "Button component",
  disabled = false,
  Icon = '',
  loading = false,
  color = "default",
  expand,
  onClick,
  onlyIcon = false,
  spaceBetween = false,
  ...props
}) => {
  const buttonClasses = classNames("iq-btn", {
    [`iq-btn--type-${type}`]: !!type,
    [`iq-btn--size-${size}`]: !!size,
    [`iq-btn--expand-${expand}`]: !!expand,
    [`iq-btn--color-${color}`]: !!color && color !== "default",
    "iq-btn--disabled": !!disabled,
    "iq-btn--loading": !!loading,
    "iq-btn--icn-right": !!iconRight && !onlyIcon,
    "iq-btn--only-icon": !!onlyIcon,
    "iq-btn--space-between": !!spaceBetween && !loading
  });

  function handleClick(e) {
    if (!disabled && !!onClick) onClick(e);
  }

  return (
    <button className={buttonClasses} onClick={handleClick} {...props}>
      <Conditional
        condition={!!Icon}
        renderIf={
          <div className="iq-btn__icon-slot">
            <Icon />
          </div>
        }
      />

      <Conditional
        condition={!onlyIcon}
        renderIf={<span className="iq-btn__text">{children}</span>}
      />
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
