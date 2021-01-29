import React from "react";
import FirstLetterIcon from "./FirstLetterIcon";
import classNames from "classnames";
import { loggedMenuLinks } from "../data";

const LoggedInMenuHeader = ({ username }) => {
  return (
    <header className="header-classic__logged-in-menu-header">
      <FirstLetterIcon word={username} />
      <div className="header-classic__logged-in-menu-header-text">
        <p className="header-classic__logged-in-menu-header-name">{username}</p>
        <a href="#" className="header-classic__logged-in-menu-header-profile">
          Editar perfil
        </a>
      </div>
    </header>
  );
};

const LoggedInNavigation = ({ username }) => {
  const getItemClass = (separator) =>
    classNames("header-classic__logged-links-item", {
      "header-classic__logged-links-item--separator": !!separator,
    });

  return (
    <div className="header-classic__logged-in-navigation">
      <div className="header-classic__logged-in-desk-name-holder">
        <FirstLetterIcon word={username} customModifier="desk-external" />
        <p className="header-classic__logged-in-desk-name">{username}</p>
      </div>
      <div className="header-classic__logged-menu">
        <LoggedInMenuHeader username={username} />
        <div className="header-classic__logged-menu-actions">
          <div className="header-classic__add-new-bill">
            <a href="#" className="header-classic__add-new-bill-button">
              Adicionar nova conta
            </a>
          </div>
          <ul className="header-classic__logged-links-list">
            {loggedMenuLinks.map(({ label, separator }) => (
              <li className={getItemClass(separator)}>
                <a href="#" className="header-classic__logged-links-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoggedInNavigation;
