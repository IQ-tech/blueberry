const ReactIconTemplate = (componentName, iconSvg) => `
// This is a generated file, do not modify manually
import * as React from "react"
import Icon from "../../index";

export default function ${componentName}(props) {
  return (
    <Icon
      iconMarkup={'${iconSvg}'}
			iconName="${componentName}"
      {...props}
    />
  );
}
`;

module.exports = ReactIconTemplate;
