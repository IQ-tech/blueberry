export default function useDropdown({ callback, items }: {
    callback: any;
    items: any;
}): {
    openedDropdown: boolean;
    toggleDropdown: () => void;
    selectedItem: string;
    setCurrentSelectedItem: (e: any) => any;
};
