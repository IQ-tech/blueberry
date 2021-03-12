import * as React from "react";
import classNames from "classnames";

interface IconProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  iconMarkup?: string;
  iconName?: string;
  expand?: boolean;
}

const Icon: React.FC<IconProps> = ({ iconMarkup, iconName, expand }) => {
  const componentClass = classNames("iq-icon", {
    [`iq-icon--${iconName}`]: !!iconName,
    "iq-icon--expand": !!expand,
  });

  return (
    <div
      className={componentClass}
      dangerouslySetInnerHTML={{
        __html: iconMarkup,
      }}
    />
  );
};

export default Icon;
