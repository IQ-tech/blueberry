export default function useAccordion({ onlyOneItemOpen }: {
    onlyOneItemOpen: any;
}): {
    openedItems: number[];
    openItemHandler: (itemIndex: number) => void;
    closeItemHandler: (itemIndex: number) => void;
};
