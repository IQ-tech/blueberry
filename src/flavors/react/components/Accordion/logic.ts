import { useState } from "react";

export default function useAccordion({ onlyOneItemOpen }) {
  // store the index of all opened items
  const [openedItems, setOpenedItems] = useState<number[]>([]);

  function openItemHandler(itemIndex: number): void {
    if (onlyOneItemOpen) {
      setOpenedItems([itemIndex]);
    } else {
      setOpenedItems([...openedItems, itemIndex]);
    }
  }

  function closeItemHandler(itemIndex: number): void {
    const newOpenedItems = openedItems.filter((item) => item !== itemIndex);
    setOpenedItems(newOpenedItems);
  }

  return {
    openedItems,
    openItemHandler,
    closeItemHandler,
  };
}
