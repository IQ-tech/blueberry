declare function useClassicHeader({ mapLoggedInMenuItems, mapLoggedOutMenuItems, username, }: {
    mapLoggedInMenuItems: any;
    mapLoggedOutMenuItems: any;
    username: any;
}): {
    unloggedMenuItems: any[];
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    openSubmenu: (e: any) => void;
    closeSubmenu: () => void;
    isSubmenuOpen: boolean;
    getAbsoluteLink: (relativePath: string) => string;
    formattedUsername: string;
    loggedoutNavigationLinks: any;
    loggedNavigationLinks: any;
};
export default useClassicHeader;
