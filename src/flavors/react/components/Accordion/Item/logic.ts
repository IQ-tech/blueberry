import { useEffect } from 'react'

export default function useAccordionItem({
  accIndex,
  openedItems = [],
  onOpenItem,
  onCloseItem,
  open,
  openCallback,
  closeCallback,
}) {
  const isItemOpened = openedItems.includes(accIndex)

  useEffect(() => {
    if (open) {
      onOpenItem(accIndex)
    }
  }, [])

  function headClickHandler(): void {
    if (isItemOpened) {
      onCloseItem(accIndex)
      if (closeCallback) closeCallback()
    } else {
      onOpenItem(accIndex)
      if (openCallback) openCallback()
    }
  }

  return {
    isItemOpened,
    headClickHandler,
  }
}
