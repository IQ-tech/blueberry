import React from "react";

// @ts-ignore
import socialLinks from "@mkt/cp/src/blueberry/core/data/social-media";

import useClassicFooter from "../hooks/index";
import { ElementEventPayload } from '../types';

const socialLinksArray = Object.keys(socialLinks).map(
  (key) => ({ type: key, ...socialLinks[key] })
);

const SocialIcons = () => {
  const { trackLink } = useClassicFooter();

  function handleClick(type: string) {
    const payload: ElementEventPayload = {
      elementType: "link",
      location: "footer",
      position: "Siga a gente",
      text: type,
    };
    trackLink(payload);
  };

  return (
    <div className="footer-cp__links-group">
      <p className="footer-cp__title">Siga a gente</p>
      <div className="footer-cp__links-box">
        {socialLinksArray.map(({ href, title, svg, type }, index) => (
          <a
            className="footer-cp__links-icon"
            key={`social-link-${index}`}
            target="_blank"
            rel="noopener"
            title={title}
            href={href}
            data-type={type}
            onClick={() => handleClick(type)}
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
