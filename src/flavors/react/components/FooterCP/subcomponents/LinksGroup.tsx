import React from "react";

import { ElementEventPayload } from '../types';

type linkType = {
  title: string;
  link?: string;
  target?: HTMLAnchorElement["target"];
}

interface LinksGroupsProps {
  category?: string;
  links?: linkType[];
  handleClick?: (param: any) => void
}

const LinksGroup = ({ category = "", links = [], handleClick }: LinksGroupsProps) => {

  function onClick(e: React.MouseEvent<HTMLAnchorElement> | undefined) {
    const linkElement = e?.target as HTMLAnchorElement;
    const payload: ElementEventPayload = {
      elementType: "link",
      location: "footer",
      position: category,
      text: linkElement.text,
    };

    if (handleClick) {
      handleClick(payload)
    }
  };

  return (
    <div className="footer-cp__links-group">
      <h2 className="footer-cp__title">
        {category}
      </h2>
      <ul className="footer-cp__links-list">
        {links.map(({ title, link, target }, index) => (
          <li key={`links-list-${category}-${index}`}>
            <h3>
              {!!link && 
                <a
                  href={link}
                  target={target}
                  rel="noopener"
                  className="footer-cp__link"
                  onClick={onClick}
                >
                  {title}
                </a>
              }

              {!link &&
                <p className="footer-cp__text">{title}</p>
              }
            </h3>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default LinksGroup;
