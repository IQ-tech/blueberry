import React from "react";
import classnames from "classnames";

import FooterMenuLink from "./FooterMenuLink";

const FooterMenu = ({ title, isOpen, handleItemClick, index, links }) => {
  const footerMenuClasses = classnames({
    "footer-menu": true,
    "is-open": isOpen,
  });

  return (
    <div className={footerMenuClasses}>
      <button
        className="footer-menu__button"
        data-menu={index}
        data-clicked={`footer-item-${index}`}
        onClick={handleItemClick}
      >
        {title}
      </button>
      <ul className="footer-menu__sub">
        {links.map(({ title, link }, index) => (
          <FooterMenuLink key={index} title={title} link={link} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
