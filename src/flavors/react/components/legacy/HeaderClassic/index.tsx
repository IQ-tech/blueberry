import React from "react";
import classNames from "classnames";
import If from "../../misc/If";
import { IqLogo, HamburgerButton } from "./Subcomponents";

import useClassicHeader from "./hooks";

interface HeaderClassicProps extends React.HTMLAttributes<HTMLElement> {
  /** Dislpays user name and a menu that redirects iq logged pages if true */
  isLogged?: boolean;
  /** Displays sign in and sign up buttons if not isLogged */
  showAuthButtons?: boolean;
  /** Displays notifications bell */
  showNotifications?: boolean;
  /** Notifications number to show on the icon bell */
  notificationsNumber?: number;
  /** Username to be displayed if isLogged */
  userName?: string;
  /** Callback to run on open the mobile version of the menu */
  onOpenMenu?: (e: any) => any;
  /** Callback function to run when user click on logout button */
  onLogout?: (e: any) => any;
}

const HeaderClassic: React.FC<HeaderClassicProps> = ({ isLogged = false }) => {
  const headerClass = classNames("header-classic", {
    "header-classic--logged": !!isLogged,
  });

  const {
    unloggedMenuItems,
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
  } = useClassicHeader({ isLogged });

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
                <div className="header-classic__navigation">navigation</div>
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
