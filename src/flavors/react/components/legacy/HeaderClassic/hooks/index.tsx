import React from "react";

function useClassicHeader({ isLogged }: { isLogged: boolean | undefined }) {
  
  function goToHomePage(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    // redirect to homepage (if unlogged) or dashboard (if logged)
  }

  return { unloggedMenuItems: [], goToHomePage };
}

export default useClassicHeader;
