import { useState } from 'react'
import { navigationMap } from './data'

function capitalize(word: string): string {
  const lower = word.toLowerCase()
  return word.charAt(0).toUpperCase() + lower.slice(1)
}

function getFirstTwoNames(fullName): string {
  if (!fullName) return ''
  const splittedName = fullName.split(' ')
  const firstTwoNames = splittedName.slice(0, 2)
  return firstTwoNames.join(' ')
}

function useClassicHeader({
  variant = 'iq',
  mapLoggedInMenuItems,
  mapLoggedOutMenuItems,
  username,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSubmenuOpen, setIsMobileSubmenuOpen] = useState(false)

  const capitalizedUsername = capitalize(username)
  const firstTwoNames = getFirstTwoNames(capitalizedUsername)

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  function openSubmenu(e) {
    e.preventDefault()
    setIsMobileSubmenuOpen(true)
  }

  function closeSubmenu() {
    setIsMobileSubmenuOpen(false)
  }

  const publicLinks = mapLoggedOutMenuItems
    ? mapLoggedOutMenuItems(navigationMap[variant]?.public)
    : navigationMap[variant]?.public

  const privateLinks = mapLoggedInMenuItems
    ? mapLoggedInMenuItems(navigationMap[variant]?.private)
    : navigationMap[variant]?.private

  return {
    unloggedMenuItems: [],
    isMobileMenuOpen,
    toggleMobileMenu,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    formattedUsername: firstTwoNames,
    loggedoutNavigationLinks: publicLinks,
    loggedNavigationLinks: privateLinks,
  }
}

export default useClassicHeader
