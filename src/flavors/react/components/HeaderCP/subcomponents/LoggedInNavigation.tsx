import * as React from 'react'
import FirstLetterIcon from './FirstLetterIcon'
import classNames from 'classnames'
import Conditional from '../../misc/Conditional'
import { getAbsoluteLink } from '../helpers'

const LoggedInMenuHeader = ({ username, profileLink, profileLinkFunction }) => {
  return (
    <header className="header-cp__logged-in-menu-header">
      <FirstLetterIcon word={username} />
      <div className="header-cp__logged-in-menu-header-text">
        <p className="header-cp__logged-in-menu-header-name">{username}</p>
        <Conditional
          condition={!!profileLinkFunction}
          renderIf={
            <button
              onClick={profileLinkFunction}
              className="header-cp__logged-in-menu-header-profile header-cp__logged-in-menu-header-profile--button"
              data-clicked="logged-header-menu-profile-link"
            >
              Editar perfil
            </button>
          }
          renderElse={
            <a
              href={getAbsoluteLink(profileLink)}
              className="header-cp__logged-in-menu-header-profile"
              data-clicked="logged-header-menu-profile-link"
            >
              Editar perfil
            </a>
          }
        />
      </div>
    </header>
  )
}

const LoggedInNavigation = ({
  username,
  loggedMenuLinks,
  profileLinkFunction,
}) => {
  const getItemClass = (separator) =>
    classNames('header-cp__logged-links-item', {
      'header-cp__logged-links-item--separator': !!separator,
    })

  const profileLink = '/perfil/'

  return (
    <div className="header-cp__logged-in-navigation">
      <div className="header-cp__logged-in-desk-name-holder">
        <FirstLetterIcon word={username} customModifier="desk-external" />
        <p className="header-cp__logged-in-desk-name">{username}</p>

        <svg
          viewBox="0 0 9.7 5.7"
          className="header-cp__logged-in-arrow-down"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeWidth=".5"
            d="M8.8.4L4.9 4.2.9.4.4.9l4.5 4.5L9.4.9z"
          />
        </svg>
      </div>
      <div className="header-cp__logged-menu">
        <LoggedInMenuHeader
          username={username}
          profileLink={profileLink}
          profileLinkFunction={profileLinkFunction}
        />
        <div className="header-cp__logged-menu-actions">
          <ul className="header-cp__logged-links-list">
            {loggedMenuLinks.map(
              (
                { label, separator, rawIcon, path, onClick, isActive },
                index
              ) => (
                <li
                  className={getItemClass(separator)}
                  key={`logged-in-menu-item-${index}`}
                >
                  <ItemLink
                    path={path}
                    onClick={onClick}
                    label={label}
                    isActive={isActive}
                  >
                    <Conditional
                      condition={!!rawIcon}
                      renderIf={
                        <div
                          className="header-cp__logged-links-icon-holder"
                          dangerouslySetInnerHTML={{ __html: rawIcon }}
                        />
                      }
                    />
                    {label}
                  </ItemLink>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

const ItemLink = ({ path, label, onClick, children, isActive }) => {
  const linkClass = classNames('header-cp__logged-links-link', {
    'header-cp__logged-links-link--button': !path,
    'header-cp__logged-links-link--active': isActive,
  })
  return (
    <Conditional
      condition={!!path}
      renderIf={
        <a
          href={getAbsoluteLink(path)}
          className={linkClass}
          data-clicked={`header-logged-menu-item-${label}`}
          onClick={onClick}
        >
          {children}
        </a>
      }
      renderElse={
        <button
          className={linkClass}
          data-clicked={`header-logged-menu-item-${label}`}
          onClick={onClick}
        >
          {children}
        </button>
      }
    />
  )
}

export default LoggedInNavigation
