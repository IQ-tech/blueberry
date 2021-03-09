import * as React from "react";
import classNames from "classnames";

interface IconProps {
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  iconMarkup?: string;
  iconName?: string;
}

const Icon: React.FC<IconProps> = ({
  width = "100%",
  height = "100%",
  style = {},
  iconMarkup,
  iconName,
}) => {
  const componentStyles = {
    ...style,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...(!!width ? { width } : {}),
    ...(!!height ? { height } : {}),
  };

  const componentClass = classNames("iq-icon", {
    [`iq-icon--${iconName}`]: !!iconName,
  });

  return (
    <div
      className={componentClass}
      style={componentStyles}
      dangerouslySetInnerHTML={{
        __html: iconMarkup,
      }}
    />
  );
};

export default Icon;
