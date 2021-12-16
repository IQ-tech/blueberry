import React from 'react';

interface LinkProps {
  /** Define where the link will redirect to*/
  url: string;
}

const Link: React.FC<LinkProps> = ({ url,  children, ...props }) => {
  return (
    <a href={url} className='iq-link' {...props}>
      {children}
    </a>
  );
};

export default Link;
