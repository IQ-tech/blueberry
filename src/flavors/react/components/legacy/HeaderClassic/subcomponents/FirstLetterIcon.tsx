import React from "react";
import classNames from "classnames";

const FirstLetterIcon = ({
  word,
  customModifier = "",
}: {
  word: string;
  customModifier?: string;
}) => {
  const firstLetter = word.charAt(0);
  const componentClass = classNames("header-classic__letter-circle", {
    [`header-classic__letter-circle--${customModifier}`]: !!customModifier,
  });

  return <div className={componentClass}>{firstLetter}</div>;
};

export default FirstLetterIcon