import { useState, useEffect } from "react";

export default function useDropdown({ callback, items }) {
  const [openedDropdown, setOpenedDropdown] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<string>('')

  useEffect(() => {
    const defaultSelectedItem = !!selectedItem ? selectedItem : items[0]
    setSelectedItem(defaultSelectedItem)
  }, [])

  function toggleDropdown() {
    setOpenedDropdown(!openedDropdown)
  }

  function setCurrentSelectedItem(e) {
    const value = e.target.textContent
    setSelectedItem(value)

    if (!!callback) {
      return callback(value)
    }
  }

  return {
    openedDropdown,
    toggleDropdown,
    selectedItem,
    setCurrentSelectedItem
  }
}