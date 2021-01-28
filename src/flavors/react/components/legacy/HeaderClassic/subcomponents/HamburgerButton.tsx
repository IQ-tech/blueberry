import React from "react";
import classNames from "classnames";

const HamburgerButton = ({ isOpen, onToggleMenu }) => {
  const componentClass = classNames("header-classic__hamburger", {
    "header-classic__hamburger--close": !!isOpen,
  });

  return (
    <button className={componentClass} onClick={onToggleMenu}>
      <div className="header-classic__hamburger-line header-classic__hamburger-line--one" />
      <div className="header-classic__hamburger-line header-classic__hamburger-line--two" />
      <div className="header-classic__hamburger-line header-classic__hamburger-line--three" />
    </button>
  );
};

export default HamburgerButton;
