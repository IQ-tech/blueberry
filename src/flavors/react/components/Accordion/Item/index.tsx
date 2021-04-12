import * as React from "react";
import classNames from "classnames";

import useAccordionItem from "./logic";

export interface AccordionItemProps {
  /** if true, the Accoridon item starts opened */
  open?: boolean;
  /** index number inside the accordion (automatically assigned by the Accodion component)  */
  accIndex?: number;
  /** Item children */
  children: React.ReactNode;
  /** Item titleChildren */
  titleChildren?: React.ReactNode;
  /** List of all opened items */
  openedItems?: number[];
  /** event to open Item */
  onOpenItem?: (...args: any) => any;
  /** event to close panel */
  onCloseItem?: (...args: any) => any;
}

const Item: React.FC<AccordionItemProps> = ({
  accIndex,
  open,
  children,
  titleChildren = "Accodion item",
  openedItems = [],
  onOpenItem,
  onCloseItem,
}) => {
  const { isItemOpened, headClickHandler } = useAccordionItem({
    accIndex,
    openedItems,
    onOpenItem,
    onCloseItem,
    open,
  });

  const componentClass = classNames("iq-accordion__item", {
    "iq-accordion__item--open": isItemOpened,
  });

  return (
    <li className={componentClass}>
      <div className="iq-accordion__item-head" onClick={headClickHandler}>
        {titleChildren}
      </div>
      <div className="iq-accordion__item-body">{children}</div>
    </li>
  );
};

export default Item;
