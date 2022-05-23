import React from "react";
import classNames from "classnames";
import AuthButtons from "./AuthButttons";
import Conditional from "../../misc/Conditional";

const LoggedOutNavigationLink = ({
  label,
  href,
  isActive,
  subLinks = [],
  openSubmenu,
}) => {
  const hasSubmenu = !!subLinks.length;

  const linkClass = classNames("header-iq__logged-out-navigation-link", {
    "header-iq__logged-out-navigation-link--active": !!isActive,
    "header-iq__logged-out-navigation-link--submenu": hasSubmenu,
  });

  function onClickItem(e) {
    if (hasSubmenu) {
      openSubmenu(e);
    }
  }

  return (
    <li className="header-iq__logged-out-navigation-item">
      <a
        className={linkClass}
        href={href}
        onClick={onClickItem}
        target="_blank"
        rel="noopener"
      >
        {label}
      </a>
      <Conditional
        condition={hasSubmenu}
        renderIf={
          <ul className="header-iq__submenu" data-subtext={label}>
            {subLinks.map(({ label, href }, index) => (
              <li
                className="header-iq__subitem"
                key={`header-submenu-item-${index}`}
              >
                <a
                  href={href}
                  className="header-iq__sublink"
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
  useAbsoluteLinks,
}) => {
  return (
    <div className="header-iq__logged-out-navigation">
      <button
        id="close-menu-submenu"
        className="header-iq__close-submenu"
        onClick={closeSubmenu}
      >
        Voltar
      </button>
      <ul className="header-iq__logged-out-navigation-list">
        {links.map((link, index) => (
          <LoggedOutNavigationLink
            {...link}
            openSubmenu={openSubmenu}
            closeSubmenu={closeSubmenu}
            isSubmenuOpen={isSubmenuOpen}
            useAbsoluteLinks={useAbsoluteLinks}
            key={`desk-navigation-link-${index}`}
          />
        ))}
      </ul>
      <Conditional condition={showAuthButtons} renderIf={<AuthButtons />} />
    </div>
  );
};

export default LoggedOutNavigation;
