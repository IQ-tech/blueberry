declare function useClassicHeader({ isLogged, filterLoggedMenuItems, username }: {
    isLogged: any;
    filterLoggedMenuItems: any;
    username: any;
}): {
    unloggedMenuItems: any[];
    isMobileMenuOpen: boolean;
    toggleMobileMenu: () => void;
    openSubmenu: (e: any) => void;
    closeSubmenu: () => void;
    isSubmenuOpen: boolean;
    formattedUsername: string;
    loggedoutNavigationLinks: any;
};
export default useClassicHeader;
//# sourceMappingURL=index.d.ts.map