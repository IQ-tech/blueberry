import React from "react";
import classNames from "classnames";
import If from "../../misc/If";

import { HeaderClassicProps } from "./types";
import IqLogo from "./subcomponents/IqLogo";
import HamburgerButton from "./subcomponents/HamburgerButton";
import LoggedOutNavigation from "./subcomponents/LoggedOutNavigation";
import LoggedInNavigation from "./subcomponents/LoggedInNavigation";
import useClassicHeader from "./hooks";

const HeaderClassic: React.FC<HeaderClassicProps> = ({
  isLogged = false,
  filterLoggedMenuItems,
  showAuthButtons = true,
  username = "username",
}) => {
  const {
    unloggedMenuItems,
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
    loggedoutNavigationLinks,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
  } = useClassicHeader({ isLogged, filterLoggedMenuItems });

  const headerClass = classNames("header-classic", {
    "header-classic--logged": isLogged,
    "header-classic--menu-mobile-open": isMobileMenuOpen,
    "header-classic--submenu-open": isSubmenuOpen,
  });

  return (
    <header className={headerClass}>
      <nav className="header-classic__navbar">
        <div className="header-classic__container">
          <div className="header-classic__panel-left">
            <IqLogo onClick={goToHomePage} />
          </div>

          <div className="header-classic__panel-right">
            <div className="header-classic__menu-holder">
              <If
                condition={isLogged}
                renderIf={<LoggedInNavigation username={username} />}
                renderElse={
                  <LoggedOutNavigation
                    showAuthButtons={showAuthButtons}
                    links={loggedoutNavigationLinks}
                    openSubmenu={openSubmenu}
                    closeSubmenu={closeSubmenu}
                    isSubmenuOpen={isSubmenuOpen}
                  />
                }
              />
            </div>
            <HamburgerButton
              isOpen={isMobileMenuOpen}
              onToggleMenu={toggleMobileMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderClassic;
