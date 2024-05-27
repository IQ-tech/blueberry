import React from "react";

import Condition from "@mkt/ui/components/common/Condition"

import useClassicFooter from "../hooks/index";
import { ElementEventPayload } from '../types';

type linkType = {
  title: string;
  link?: string;
  target?: HTMLAnchorElement["target"];
}

interface LinksGroupsProps {
  category?: string;
  links?: linkType[];
}

const LinksGroup = ({ category = "", links = [] }: LinksGroupsProps) => {
  const { trackLink } = useClassicFooter();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement> | undefined) {
    const linkElement = e?.target as HTMLAnchorElement;
    const payload: ElementEventPayload = {
      elementType: "link",
      location: "footer",
      position: category,
      text: linkElement.text,
    };
    trackLink(payload);
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
              <Condition condition={!!link}>
                <a
                  href={link}
                  target={target}
                  rel="noopener"
                  className="footer-cp__link"
                  onClick={handleClick}
                >
                  {title}
                </a>
              </Condition>

              <Condition condition={!link}>
                <p className="footer-cp__text">{title}</p>
              </Condition>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default LinksGroup;
