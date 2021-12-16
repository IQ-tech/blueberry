import React from 'react';

interface LinkProps {
  /** Define the link text */
  text: string;
  /** Define where the link will redirect */
  url: string;
}

const Link: React.FC<LinkProps> = ({ text, url }) => {
  return (
    <a href={url} className='iq-link' target="_blank" rel="noopener">
      {text}
    </a>
  );
};

export default Link;
