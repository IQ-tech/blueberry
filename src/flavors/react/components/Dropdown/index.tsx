import * as React from "react";
import classNames from "classnames";

interface DropdownProps {
  type: 'transparent' | 'background',
  size: 'medium' | 'small',
  items: []
}

const Dropdown: React.FC<DropdownProps> = ({ type, size, items }) => {

  const typesClassesConfig = {
    'transparent': '--transparent',
    'background': '--background'
  }

  const sizeClassesConfig = {
    'medium': '--medium',
    'small': '--small'
  }

  const currentTypeClass = typesClassesConfig[type]
  const currentSizeClass = sizeClassesConfig[size]

  const dropdownClass = classNames("iq-dropdown", {
    [`iq-dropdown${currentTypeClass}`]: type,
    [`iq-dropdown${currentSizeClass}`]: size
  })

  return (
    <ul className={dropdownClass}>
      {items.map(({ label }, index) => {
        return (
          <li className="iq-dropdown__item" key={`dropdown-key-${index}`}>
            <button>{ label }</button>
          </li>
        )
      })}
    </ul>
  );
};

export default Dropdown;
