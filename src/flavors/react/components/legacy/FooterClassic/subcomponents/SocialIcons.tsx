import React from "react";

// @ts-ignore
import socialLinks from "core/data/social-media";

const socialLinksArray = Object.keys(socialLinks).map(
  (key) => socialLinks[key]
);

const SocialIcons = () => (
  <div className="footer-classic__social-icons">
    <p className="footer-classic__social-icons-title">Siga a gente</p>
    <div className="footer-classic__social-icons-box">
      {socialLinksArray.map(({ href, title, svg }, index) => (
        <a
          className="footer-classic__social-icon"
          key={`social-link-${index}`}
          target="_blank"
          rel="noopener"
          title={title}
          href={href}
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ))}
    </div>
  </div>
);

export default SocialIcons;
