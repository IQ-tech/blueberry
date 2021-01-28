import React, { useState } from "react";
import { loggedoutNavigationLinks } from "./data";

function useClassicHeader({ isLogged, filterLoggedMenuItems }) {
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
    loggedoutNavigationLinks: filterLoggedMenuItems
      ? filterLoggedMenuItems(loggedoutNavigationLinks)
      : loggedoutNavigationLinks,
  };
}

export default useClassicHeader;
