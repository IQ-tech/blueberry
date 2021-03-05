import * as React from "react";
import classNames from "classnames";

const Section: React.FC = ({ children }) => {
  return <div className="iq-card__section">{children}</div>;
};

interface CardComponentType<T> extends React.FC<T> {
  Section: React.FC;
}

interface CardSize {
  width: string;
  height: string;
}

interface CardComponentProps {
  dark?: boolean;
  /** Receives a hex, rgba, etc to define a custom background color */
  customBackgroundColor?: string;
  /** Receives a hex, rgba, etc to define a custom text color */
  customTextColor?: string;
  /** custom fixed size (px, em, rem, etc...) */
  fixedSize?: CardSize;
}

const Card: CardComponentType<CardComponentProps> = ({
  fixedSize,
  children,
  customBackgroundColor,
  customTextColor,
  dark = false,
}) => {
  const inlineStyles = {
    ...(!!fixedSize ? fixedSize : {}),
    ...(!!customBackgroundColor
      ? { backgroundColor: customBackgroundColor }
      : {}),
    ...(!!customTextColor ? { color: customTextColor } : {}),
  };

  const rootClass = classNames("iq-card", {
    "iq-card--dark": !!dark,
  });

  return (
    <div className={rootClass} style={inlineStyles}>
      {children}
    </div>
  );
};

Card.Section = Section;

export default Card;
