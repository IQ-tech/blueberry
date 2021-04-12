import * as React from "react";
import Item from "./Item"

interface AccordionType<T> extends React.FC<T> {
  Item: React.FC;
}

interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  /** Tells the accordion to keep only one item opened per time */
  onlyOneItemOpen?: boolean;
}

const Accordion: AccordionType<AccordionProps> = ({
  onlyOneItemOpen = false,
  children,
}) => {
  return <ul className="iq-accordion">{
    React.Children.map(children, (child) => {
      // @ts-ignore
      const hasProps = child.hasOwnPropery("props")
/*       return React.cloneElement(child, {

      }) */
      
    })
  }</ul>;
};

Accordion.Item = Item;

export default Accordion;
