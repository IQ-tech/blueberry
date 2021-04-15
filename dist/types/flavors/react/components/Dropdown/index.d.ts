import * as React from "react";
interface DropdownProps {
    /** array of strings that will be the dropdown options */
    items: [];
    /** The selected item can contain a filled or transparent background */
    type: 'transparent' | 'background';
    /** There can be two types of total dropdown size */
    size: 'medium' | 'small';
    /** You can define a prefix for the selected item, the default is empty */
    prefix: string;
    /** You can pass a callback to receive which item was selected */
    callback: Function;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
