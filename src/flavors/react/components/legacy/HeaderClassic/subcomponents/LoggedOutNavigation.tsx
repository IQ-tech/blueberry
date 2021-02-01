import React from "react";
import classNames from "classnames";
import AuthButtons from "./AuthButttons";
import If from "../../../misc/If";

const LoggedOutNavigationLink = ({
  label,
  href,
  isActive,
  subLinks = [],
  openSubmenu,
  closeSubmenu,
  isSubmenuOpen,
}) => {
  const hasSubmenu = !!subLinks.length;

  const linkClass = classNames("header-classic__logged-out-navigation-link", {
    "header-classic__logged-out-navigation-link--active": !!isActive,
    "header-classic__logged-out-navigation-link--submenu": hasSubmenu,
  });

  function onClickItem(e) {
    if (hasSubmenu) {
      openSubmenu(e);
    }
  }

  return (
    <li className="header-classic__logged-out-navigation-item">
      <a
        className={linkClass}
        href={href}
        onClick={onClickItem}
        target="_blank"
        rel="noopener"
      >
        {label}
      </a>
      <If
        condition={hasSubmenu}
        renderIf={
          <ul className="header-classic__submenu" data-subtext={label}>
            {subLinks.map(({ label, href }, index) => (
              <li
                className="header-classic__subitem"
                key={`header-submenu-item-${index}`}
              >
                <a
                  href={href}
                  className="header-classic__sublink"
                  target="_blank"
                  rel="noopener"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        }
      />
    </li>
  );
};

const LoggedOutNavigation = ({
  links,
  showAuthButtons = true,
  openSubmenu,
  closeSubmenu,
  isSubmenuOpen,
}) => {
  return (
    <div className="header-classic__logged-out-navigation">
      <button
        id="close-menu-submenu"
        className="header-classic__close-submenu"
        onClick={closeSubmenu}
      >
        Voltar
      </button>
      <ul className="header-classic__logged-out-navigation-list">
        {links.map((link, index) => (
          <LoggedOutNavigationLink
            {...link}
            openSubmenu={openSubmenu}
            closeSubmenu={closeSubmenu}
            isSubmenuOpen={isSubmenuOpen}
            key={`desk-navigation-link-${index}`}
          />
        ))}
      </ul>
      <If condition={showAuthButtons} renderIf={<AuthButtons />} />
    </div>
  );
};

export default LoggedOutNavigation;