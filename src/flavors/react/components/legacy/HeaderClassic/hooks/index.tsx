import React, { useState } from "react";

function useClassicHeader({ isLogged }: { isLogged: boolean | undefined }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function goToHomePage(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    // redirect to homepage (if unlogged) or dashboard (if logged)
  }

  function toggleMobileMenu() {
    //verify if is mobile
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return {
    unloggedMenuItems: [],
    goToHomePage,
    isMobileMenuOpen,
    toggleMobileMenu,
  };
}

export default useClassicHeader;
