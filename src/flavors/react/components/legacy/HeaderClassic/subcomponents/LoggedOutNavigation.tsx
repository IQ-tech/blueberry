import React from "react";
import classNames from "classnames";
import AuthButtons from "./AuthButttons";
import { NavigationLink } from "../types";

const LoggedOutNavigationLink = ({
  label,
  href,
  isActive,
  subLinks,
}: NavigationLink) => {
  const linkClass = classNames("header-classic__logged-out-navigation-link", {
    "header-classic__logged-out-navigation-link--active": !!isActive,
  });
  return (
    <li className="header-classic__logged-out-navigation-item">
      <a className={linkClass} href={href}>
        {label}
      </a>
    </li>
  );
};

const LoggedOutNavigation = ({ links }: { links: NavigationLink[] }) => {
  return (
    <div className="header-classic__logged-out-navigation">
      <ul className="header-classic__logged-out-navigation-list">
        {links.map((link, index) => (
          <LoggedOutNavigationLink
            {...link}
            key={`desk-navigation-link-${index}`}
          />
        ))}
      </ul>
      <AuthButtons />
    </div>
  );
};

export default LoggedOutNavigation;
