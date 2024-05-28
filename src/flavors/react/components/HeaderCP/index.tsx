import * as React from 'react'
import classNames from 'classnames'
import Conditional from '../misc/Conditional'

import { HeaderClassicProps } from './types'
import CpLogo from './subcomponents/CpLogo'
import HamburgerButton from './subcomponents/HamburgerButton'
import LoggedOutNavigation from './subcomponents/LoggedOutNavigation'
import LoggedInNavigation from './subcomponents/LoggedInNavigation'
import Notifications from './subcomponents/Notifications'
import GoBack from './subcomponents/GoBack'
import useClassicHeader from './hook'

const HeaderCP: React.FC<HeaderClassicProps> = ({
  isLogged = false,
  mapLoggedOutMenuItems,
  customLogoLinks,
  showGoBack = false,
  onGoBackClick,
  showNotifications,
  notificationsNumber,
  onNotificationClick,
  username = 'username',
  whiteVersion,
  customLoggedInMenuItems,
  mapLoggedInMenuItems,
  customClass,
  loginLink,
  profileLinkFunction,
}) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    loggedoutNavigationLinks,
    loggedNavigationLinks,
    isSubmenuOpen,
    formattedUsername,
  } = useClassicHeader({
    mapLoggedOutMenuItems,
    username,
    mapLoggedInMenuItems,
    customLoggedInMenuItems,
  })

  const headerClass = classNames('header-cp', {
    'header-cp--logged': isLogged,
    'header-cp--menu-mobile-open': isMobileMenuOpen,
    'header-cp--submenu-open': isSubmenuOpen,
    'header-cp--white-version': isLogged && whiteVersion,
    [`${customClass}`]: !!customClass,
  })

  return (
    <header className={headerClass}>
      <nav className="header-cp__navbar" aria-label="Navegação cabeçalho">
        <div className="header-cp__container">
          <div className="header-cp__panel-left">
            <Conditional
              condition={isLogged && showGoBack}
              renderIf={<GoBack onGoBackClick={onGoBackClick} />}
            />

            <CpLogo isLogged={isLogged} customLinks={customLogoLinks} />
          </div>

          <div className="header-cp__panel-right">
            <Conditional
              condition={!!showNotifications && isLogged}
              renderIf={
                <Notifications
                  count={notificationsNumber}
                  onNotificationClick={onNotificationClick}
                />
              }
            />
            <div className="header-cp__menu-holder">
              <Conditional
                condition={isLogged}
                renderIf={
                  <LoggedInNavigation
                    username={formattedUsername}
                    loggedMenuLinks={loggedNavigationLinks}
                    profileLinkFunction={profileLinkFunction}
                  />
                }
                renderElse={
                  <LoggedOutNavigation
                    links={loggedoutNavigationLinks}
                    loginLink={loginLink}
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

export default HeaderCP
