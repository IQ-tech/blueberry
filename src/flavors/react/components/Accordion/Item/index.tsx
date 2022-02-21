import * as React from "react";
import classNames from "classnames";
import OutlineAngleDownMini from "../../icons/generated/outline/OutlineAngleDownMini";
import { AccordionItemProps } from "../types";
import useAccordionItem from "./logic";

const Item: React.FC<AccordionItemProps> = ({
  accIndex,
  open,
  children,
  titleChild = "Accodion item",
  openedItems = [],
  onOpenItem,
  onCloseItem,
  colorScheme,
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
    [`iq-accordion__item--color-s-${colorScheme}`]: !!colorScheme,
  });

  return (
    <li className={componentClass}>
      <button className="iq-accordion__item-head" onClick={headClickHandler}>
        <h3 className="iq-accordion__head-content">{titleChild}</h3>
        <div className="iq-accordion__arrow-holder">
          <OutlineAngleDownMini />
        </div>
      </button>
      <div className="iq-accordion__item-body">{children}</div>
    </li>
  );
};

export default Item;
