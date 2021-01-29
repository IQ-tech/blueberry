import React, { useState } from "react";
import { loggedoutNavigationLinks } from "../data";

function capitalize(word: string): string {
  const lower = word.toLowerCase();
  return word.charAt(0).toUpperCase() + lower.slice(1);
}

function useClassicHeader({ isLogged, filterLoggedMenuItems, username }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  function goToHomePage(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    // redirect to homepage (if unlogged) or dashboard (if logged)
  }

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
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
    openSubmenu,
    closeSubmenu,
    isSubmenuOpen,
    formattedUsername: capitalize(username),
    loggedoutNavigationLinks: filterLoggedMenuItems
      ? filterLoggedMenuItems(loggedoutNavigationLinks)
      : loggedoutNavigationLinks,
  };
}

export default useClassicHeader;
