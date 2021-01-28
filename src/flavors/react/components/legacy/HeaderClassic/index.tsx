import React from "react";
import classNames from "classnames";
import If from "../../misc/If";

import { HeaderClassicProps } from "./types";
import IqLogo from "./subcomponents/IqLogo";
import HamburgerButton from "./subcomponents/HamburgerButton";
import LoggedOutNavigation from "./subcomponents/LoggedOutNavigation";
import useClassicHeader from "./hooks";

const HeaderClassic: React.FC<HeaderClassicProps> = ({
  isLogged = false,
  filterLoggedMenuItems,
}) => {
  const {
    unloggedMenuItems,
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
    loggedoutNavigationLinks,
  } = useClassicHeader({ isLogged, filterLoggedMenuItems });

  const headerClass = classNames("header-classic", {
    "header-classic--logged": isLogged,
    "header-classic--menu-mobile-open": isMobileMenuOpen,
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
                renderIf={<p>username</p>}
                renderElse={
                  <LoggedOutNavigation links={loggedoutNavigationLinks} />
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
      my header
    </header>
  );
};

export default HeaderClassic;
