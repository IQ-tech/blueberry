import * as React from "react";
import Item from "./Item";
import { AccordionType, AccordionProps } from "./types";

import useAccordion from "./logic";

const Accordion: AccordionType<AccordionProps> = ({
  onlyOneItemOpen = false,
  children = [],
  colorScheme,
}) => {
  const { openedItems, openItemHandler, closeItemHandler } = useAccordion({
    onlyOneItemOpen,
  });

  return (
    <ul className="iq-accordion">
      {React.Children.map(children, (child, index) => {
        const hasProps = !!child.props;
        if (hasProps) {
          return React.cloneElement(child, {
            colorScheme,
            accIndex: index,
            openedItems,
            onOpenItem: openItemHandler,
            onCloseItem: closeItemHandler,
            ...child.props,
          });
        } else {
          return child;
        }
      })}
    </ul>
  );
};

Accordion.Item = Item;

export default Accordion;
