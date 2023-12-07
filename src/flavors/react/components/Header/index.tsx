import * as React from 'react'
import classNames from 'classnames'
import Conditional from '../misc/Conditional'

import { HeaderProps } from './types'
import IqLogo from './subcomponents/IqLogo'
import HamburgerButton from './subcomponents/HamburgerButton'
import LoggedOutNavigation from './subcomponents/LoggedOutNavigation'
import LoggedInNavigation from './subcomponents/LoggedInNavigation'
import useClassicHeader from './hook'

const Header: React.FC<HeaderProps> = ({
  isLogged = false,
  mapLoggedOutMenuItems,
  showAuthButtons = true,
  username = 'username',
  whiteVersion,
  mapLoggedInMenuItems,
  useLoggedOutAbsoluteLinks = true,
  customClass,
  registerLink,
  loginLink,
}) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    loggedoutNavigationLinks,
    loggedNavigationLinks,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    formattedUsername,
  } = useClassicHeader({
    mapLoggedOutMenuItems,
    username,
    mapLoggedInMenuItems,
  })

  const headerClass = classNames('header-iq', {
    'header-iq--logged': isLogged,
    'header-iq--menu-mobile-open': isMobileMenuOpen,
    'header-iq--submenu-open': isSubmenuOpen,
    'header-iq--white-version': isLogged && whiteVersion,
    [customClass]: !!customClass,
  })

  return (
    <header className={headerClass}>
      <nav className="header-iq__navbar">
        <div className="header-iq__container">
          <div className="header-iq__panel-left">
            <IqLogo isLogged={isLogged} />
          </div>

          <div className="header-iq__panel-right">
            <div className="header-iq__menu-holder">
              <Conditional
                condition={isLogged}
                renderIf={
                  <LoggedInNavigation
                    username={formattedUsername}
                    loggedMenuLinks={loggedNavigationLinks}
                  />
                }
                renderElse={
                  <LoggedOutNavigation
                    showAuthButtons={showAuthButtons}
                    registerLink={registerLink}
                    loginLink={loginLink}
                    links={loggedoutNavigationLinks}
                    openSubmenu={openSubmenu}
                    closeSubmenu={closeSubmenu}
                    isSubmenuOpen={isSubmenuOpen}
                    useAbsoluteLinks={useLoggedOutAbsoluteLinks}
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
  )
}

export default Header
