import React from "react";
import classNames from "classnames";

const HamburgerButton = ({ isOpen, onToggleMenu }) => {
  const componentClass = classNames("header-iq__hamburger", {
    "header-iq__hamburger--close": !!isOpen,
  });

  return (
    <button className={componentClass} onClick={onToggleMenu}>
      <div className="header-iq__hamburger-line header-iq__hamburger-line--one" />
      <div className="header-iq__hamburger-line header-iq__hamburger-line--two" />
      <div className="header-iq__hamburger-line header-iq__hamburger-line--three" />
    </button>
  );
};

export default HamburgerButton;
