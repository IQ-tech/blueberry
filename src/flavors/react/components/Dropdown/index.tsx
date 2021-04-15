import * as React from "react";
import classNames from "classnames";

import logic from './logic';

interface DropdownProps {
  /** array of strings that will be the dropdown options */
  items: [],
  /** The selected item can contain a filled or transparent background */
  type: 'transparent' | 'background',
  /** There can be two types of total dropdown size */
  size: 'medium' | 'small',
  /** You can define a prefix for the selected item, the default is empty */
  prefix: string,
  /** You can pass a callback to receive which item was selected */
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
