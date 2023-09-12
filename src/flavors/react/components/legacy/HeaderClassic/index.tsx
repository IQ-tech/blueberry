import * as React from 'react'
import classNames from 'classnames'
import Conditional from '../../misc/Conditional'

import { HeaderClassicProps } from './types'
import IqLogo from './subcomponents/IqLogo'
import HamburgerButton from './subcomponents/HamburgerButton'
import LoggedOutNavigation from './subcomponents/LoggedOutNavigation'
import LoggedInNavigation from './subcomponents/LoggedInNavigation'
import Notifications from './subcomponents/Notifications'
import GoBack from './subcomponents/GoBack'
import useClassicHeader from './hook'

const HeaderClassic: React.FC<HeaderClassicProps> = ({
  isLogged = false,
  mapLoggedOutMenuItems,
  showAuthButtons = true,
  showGoBack = false,
  onGoBackClick,
  showNotifications,
  notificationsNumber,
  onNotificationClick,
  username = 'username',
  whiteVersion,
  mapLoggedInMenuItems,
  useLoggedOutAbsoluteLinks = true,
  customClass,
  variant,
  loginLink,
  registerLink,
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
    variant,
    mapLoggedOutMenuItems,
    username,
    mapLoggedInMenuItems,
  })

  const headerClass = classNames('header-classic', {
    'header-classic--logged': isLogged,
    'header-classic--menu-mobile-open': isMobileMenuOpen,
    'header-classic--submenu-open': isSubmenuOpen,
    'header-classic--white-version': isLogged && whiteVersion,
    [customClass]: !!customClass,
  })

  return (
    <header className={headerClass}>
      <nav className="header-classic__navbar" aria-label="Navegação cabeçalho">
        <div className="header-classic__container">
          <div className="header-classic__panel-left">
            <Conditional
              condition={isLogged && showGoBack}
              renderIf={<GoBack onGoBackClick={onGoBackClick} />}
            />

            <IqLogo isLogged={isLogged} />
          </div>

          <div className="header-classic__panel-right">
            <Conditional
              condition={showNotifications && isLogged}
              renderIf={
                <Notifications
                  count={notificationsNumber}
                  onNotificationClick={onNotificationClick}
                />
              }
            />
            <div className="header-classic__menu-holder">
              <Conditional
                condition={isLogged}
                renderIf={
                  <LoggedInNavigation
                    username={formattedUsername}
                    loggedMenuLinks={loggedNavigationLinks}
                    variant={variant}
                  />
                }
                renderElse={
                  <LoggedOutNavigation
                    showAuthButtons={showAuthButtons}
                    links={loggedoutNavigationLinks}
                    openSubmenu={openSubmenu}
                    closeSubmenu={closeSubmenu}
                    isSubmenuOpen={isSubmenuOpen}
                    useAbsoluteLinks={useLoggedOutAbsoluteLinks}
                    variant={variant}
                    loginLink={loginLink}
                    registerLink={registerLink}
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

export default HeaderClassic
