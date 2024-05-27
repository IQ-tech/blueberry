import React from 'react'
import classNames from 'classnames'

import Button from "../../Button";
import Arrow from "../../icons/generated/outline/OutlineAngleRightMini"

const LoggedOutNavigation = ({ links,  loginLink }) => {
  function onLogin() {
    const link = loginLink || "https://app.consumidorpositivo.com.br";

    if (typeof window !== undefined) {
      const parameters = window.location.search;
      window.open(link + parameters, "_blank");
    }
  }

  function onClickItem(link) {
    if (typeof window !== undefined) {
      const parameters = window.location.search;
      window.location.href = link + parameters;
    }
  }

  return (
    <div className="header-cp__logged-out-navigation">
      <ul className="header-cp__logged-out-navigation-list">
        {links.map(({ label, href, isActive }, index) => (
          <li
            key={`logged-out-navigation-list-item-${index}`}
            className="header-cp__logged-out-navigation-list-item"
          >
            <div
              className={classNames(
                "header-cp__logged-out-navigation-list-icon", {
                "header-cp__logged-out-navigation-list-icon--active": !!isActive,
            })}>
              <Arrow />
            </div>

            <Button
              type="text"
              expand="x"
              active={!!isActive}
              onClick={() => onClickItem(href)}
              title={label}
              key={`desk-navigation-link-${index}`}
            >
              {label}
            </Button>
          </li>
        ))}
      </ul>

      <div className="header-cp__auth-buttons">
        <div className="header-cp__auth-buttons__button">
          <Button
            type="secondary"
            expand="x"
            justify="center"
            onClick={onLogin}
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LoggedOutNavigation
