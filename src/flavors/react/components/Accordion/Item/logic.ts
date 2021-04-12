import { useEffect } from "react";

export default function useAccordionItem({
  accIndex,
  openedItems = [],
  onOpenItem,
  onCloseItem,
  open,
}) {
  const isItemOpened = openedItems.includes(accIndex);

  useEffect(() => {
    if (open) {
      onOpenItem(accIndex);
    }
  }, []);

  function headClickHandler(): void {
    if (isItemOpened) {
      onCloseItem(accIndex);
    } else {
      onOpenItem(accIndex);
    }
  }

  return {
    isItemOpened,
    headClickHandler,
  };
}
