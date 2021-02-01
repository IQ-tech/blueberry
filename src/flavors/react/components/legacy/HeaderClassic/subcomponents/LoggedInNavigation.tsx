import React from "react";
import FirstLetterIcon from "./FirstLetterIcon";
import classNames from "classnames";
import { loggedMenuLinks } from "../data";
import If from "../../../misc/If";
import AddBillsButton from "./AddBillsButton";

const LoggedInMenuHeader = ({ username }) => {
  return (
    <header className="header-classic__logged-in-menu-header">
      <FirstLetterIcon word={username} />
      <div className="header-classic__logged-in-menu-header-text">
        <p className="header-classic__logged-in-menu-header-name">{username}</p>
        <a
          href="/app/profile/"
          className="header-classic__logged-in-menu-header-profile"
          data-clicked="logged-header-menu-profile-link"
        >
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

        <svg
          viewBox="0 0 9.7 5.7"
          className="header-classic__logged-in-arrow-down"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth=".5"
            d="M8.8.4L4.9 4.2.9.4.4.9l4.5 4.5L9.4.9z"
          />
        </svg>
      </div>
      <div className="header-classic__logged-menu">
        <LoggedInMenuHeader username={username} />
        <div className="header-classic__logged-menu-actions">
          <div className="header-classic__add-new-bill">
            <AddBillsButton />
          </div>
          <ul className="header-classic__logged-links-list">
            {loggedMenuLinks.map(
              ({ label, separator, rawIcon, path }, index) => (
                <li
                  className={getItemClass(separator)}
                  key={`logged-in-menu-item-${index}`}
                >
                  <a
                    href={path}
                    className="header-classic__logged-links-link"
                    data-clicked={`header-logged-menu-item-${label}`}
                  >
                    <If
                      condition={!!rawIcon}
                      renderIf={
                        <div
                          className="header-classic__logged-links-icon-holder"
                          dangerouslySetInnerHTML={{ __html: rawIcon }}
                        />
                      }
                    />
                    {label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LoggedInNavigation;
