import React, { useState } from "react";
import classNames from "classnames";

const LinksGroup = ({ category = "", links = [] }) => {
  const [isMobileGroupOpen, setiIsMobileGroupOpen] = useState(false);
  const componentClass = classNames("footer-classic__links-group", {
    "footer-classic__links-group--open": !!isMobileGroupOpen,
  });

  function toggleMobileMenu() {
    setiIsMobileGroupOpen(!isMobileGroupOpen);
  }

  return (
    <div className={componentClass}>
      <h2
        className="footer-classic__links-group-title"
        onClick={toggleMobileMenu}
      >
        {category}
      </h2>
      <ul className="footer-classic__links-list">
        {links.map(({ title, link }, index) => (
          <li
            className="footer-classic__links-group-item"
            key={`links-list-${category}-${index}`}
          >
            <h3>
              <a
                href={link}
                target="_blank"
                rel="noopener"
                className="footer-classic__links-group-link"
              >
                {title}
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksGroup;
