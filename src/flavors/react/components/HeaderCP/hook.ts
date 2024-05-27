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
  mapLoggedInMenuItems,
  mapLoggedOutMenuItems,
  customLoggedInMenuItems,
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
    const browserWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth

    if (browserWidth > 720) return
    e.preventDefault()
    setIsMobileSubmenuOpen(true)
  }

  function closeSubmenu() {
    setIsMobileSubmenuOpen(false)
  }

  const publicLinks = mapLoggedOutMenuItems
    ? mapLoggedOutMenuItems(navigationMap?.publicLinks)
    : navigationMap?.publicLinks

  const loggedInMenu = customLoggedInMenuItems || navigationMap?.privateLinks

  const privateLinks = mapLoggedInMenuItems
    ? mapLoggedInMenuItems(loggedInMenu)
    : loggedInMenu

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
