import * as React from "react";
import Item, { AccordionItemProps } from "./Item";

import useAccordion from "./logic";

interface AccordionType<T> extends React.FC<T> {
  Item: React.FC<AccordionItemProps>;
}

interface AccordionProps {
  /** Tells the accordion to keep only one item opened per time */
  onlyOneItemOpen?: boolean;
  /** Accordion.Item[] */
  children?: JSX.Element[];
}

const Accordion: AccordionType<AccordionProps> = ({
  onlyOneItemOpen = false,
  children = [],
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
            ...child.props,
            accIndex: index,
            openedItems,
            onOpenItem: openItemHandler,
            onCloseItem: closeItemHandler,
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
