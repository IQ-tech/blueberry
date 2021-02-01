import { useState } from "react";
import { loggedoutNavigationLinks } from "../data";

function capitalize(word: string): string {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

function getFirstTwoNames(fullName): string {
  if (!fullName) return "";
  const splittedName = fullName.split(" ");
  const firstTwoNames = splittedName.slice(0, 2);
  return firstTwoNames.join(" ");
}

function useClassicHeader({ isLogged, filterLoggedMenuItems, username }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  const capitalizedUsername = capitalize(username);
  const firstTwoNames = getFirstTwoNames(capitalizedUsername);

  function toggleMobileMenu() {
    //verify if is mobile
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function openSubmenu(e) {
    e.preventDefault();
    setIsMobileSubmenuOpen(true);
  }

  function closeSubmenu() {
    setIsMobileSubmenuOpen(false);
  }

  return {
    unloggedMenuItems: [],
    isMobileMenuOpen,
    toggleMobileMenu,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    formattedUsername: firstTwoNames,
    loggedoutNavigationLinks: filterLoggedMenuItems
      ? filterLoggedMenuItems(loggedoutNavigationLinks)
      : loggedoutNavigationLinks,
  };
}

export default useClassicHeader;
