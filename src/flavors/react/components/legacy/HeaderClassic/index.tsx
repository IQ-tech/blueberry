import React, { Fragment } from "react";
import classNames from "classnames";
import If from "../../misc/If";

import { HeaderClassicProps } from "./types";
import { IqLogo, HamburgerButton, DesktopNavigation } from "./Subcomponents";
import useClassicHeader from "./hooks";

const HeaderClassic: React.FC<HeaderClassicProps> = ({
  isLogged = false,
  filterLoggedMenuItems,
}) => {
  const headerClass = classNames("header-classic", {
    "header-classic--logged": !!isLogged,
  });

  const {
    unloggedMenuItems,
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
    loggedoutNavigationLinks,
  } = useClassicHeader({ isLogged, filterLoggedMenuItems });

  return (
    <header className={headerClass}>
      <nav className="header-classic__navbar">
        <div className="header-classic__container">
          <div className="header-classic__panel-left">
            <IqLogo onClick={goToHomePage} />
          </div>
          <div className="header-classic__panel-right">
            <If
              condition={isLogged}
              renderIf={<p>username</p>}
              renderElse={
                <Fragment>
                  <DesktopNavigation links={loggedoutNavigationLinks} />
                </Fragment>
              }
            />
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
