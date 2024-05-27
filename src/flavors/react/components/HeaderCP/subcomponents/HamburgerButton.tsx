import React from "react";
import classNames from "classnames";

const HamburgerButton = ({ isOpen, onToggleMenu }) => {
  const buttonTitle = isOpen ? "Fechar menu" : "Abrir menu";
  const componentClass = classNames("header-cp__hamburger", {
    "header-cp__hamburger--close": !!isOpen,
  });
  return (
    <button
      className={componentClass}
      onClick={onToggleMenu}
      aria-label={buttonTitle}
    >
      <div className="header-cp__hamburger-line header-cp__hamburger-line--one" />
      <div className="header-cp__hamburger-line header-cp__hamburger-line--two" />
      <div className="header-cp__hamburger-line header-cp__hamburger-line--three" />
    </button>
  );
};

export default HamburgerButton;
