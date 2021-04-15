import * as React from "react";
import classNames from "classnames";

import logic from './logic';

interface DropdownProps {
  items: [],
  type: 'transparent' | 'background',
  size: 'medium' | 'small',
  prefix: string,
  callback: Function
}

const Dropdown: React.FC<DropdownProps> = ({ callback, prefix, type, size, items }) => {

  const {
    openedDropdown,
    toggleDropdown,
    selectedItem,
    setCurrentSelectedItem
  } = logic({ callback, items })

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
    ['iq-dropdown--opened']: openedDropdown,
    [`iq-dropdown${currentTypeClass}`]: type,
    [`iq-dropdown${currentSizeClass}`]: size,
  })

  return (
    <div className={dropdownClass}>
      <button className="iq-dropdown__selected" onClick={toggleDropdown}>
        {prefix} {selectedItem} 
      </button>
      <ul className="iq-dropdown__items">

        {items.map((item, index) => {
          return (
            <li className="iq-dropdown__items-item" key={`dropdown-key-${index}`} onClick={setCurrentSelectedItem}>
              <button>{item}</button>
            </li>
          )
        })}

      </ul>
    </div>
  );
};

export default Dropdown;
