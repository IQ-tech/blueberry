import React from "react";
declare function useClassicHeader({ isLogged, filterLoggedMenuItems }: {
    isLogged: any;
    filterLoggedMenuItems: any;
}): {
    unloggedMenuItems: any[];
    goToHomePage: (e: React.MouseEvent<HTMLElement>) => void;
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    loggedoutNavigationLinks: any;
};
export default useClassicHeader;
//# sourceMappingURL=index.d.ts.map