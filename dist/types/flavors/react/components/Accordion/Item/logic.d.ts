export default function useAccordionItem({ accIndex, openedItems, onOpenItem, onCloseItem, open, }: {
    accIndex: any;
    openedItems?: any[];
    onOpenItem: any;
    onCloseItem: any;
    open: any;
}): {
    isItemOpened: boolean;
    headClickHandler: () => void;
};
