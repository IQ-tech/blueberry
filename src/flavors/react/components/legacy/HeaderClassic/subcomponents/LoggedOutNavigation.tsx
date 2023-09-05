import React from 'react'
import classNames from 'classnames'
import AuthButtons from './AuthButtons'
import Conditional from '../../../misc/Conditional'

const LoggedOutNavigationLink = ({
  label,
  href,
  isActive,
  ariaLabel,
  subLinks = [],
  openSubmenu,
}) => {
  const hasSubmenu = !!subLinks.length

  const linkClass = classNames('header-classic__logged-out-navigation-link', {
    'header-classic__logged-out-navigation-link--active': !!isActive,
    'header-classic__logged-out-navigation-link--submenu': hasSubmenu,
  })

  function onClickItem(e) {
    if (hasSubmenu) {
      openSubmenu(e)
    }
  }

  return (
    <li className="header-classic__logged-out-navigation-item">
      <a
        className={linkClass}
        href={href}
        aria-label={ariaLabel}
        onClick={onClickItem}
        target="_blank"
        rel="noopener"
      >
        {label}
      </a>
      <Conditional
        condition={hasSubmenu}
        renderIf={
          <ul className="header-classic__submenu" data-subtext={label}>
            {subLinks.map(({ label, href, ariaLabel }, index) => (
              <li
                className="header-classic__subitem"
                key={`header-submenu-item-${index}`}
              >
                <a
                  href={href}
                  aria-label={ariaLabel}
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
  )
}

const LoggedOutNavigation = ({
  links,
  showAuthButtons = true,
  openSubmenu,
  closeSubmenu,
  isSubmenuOpen,
  useAbsoluteLinks,
  variant,
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
            useAbsoluteLinks={useAbsoluteLinks}
            key={`desk-navigation-link-${index}`}
          />
        ))}
      </ul>
      <Conditional
        condition={showAuthButtons}
        renderIf={<AuthButtons variant={variant} />}
      />
    </div>
  )
}

export default LoggedOutNavigation
