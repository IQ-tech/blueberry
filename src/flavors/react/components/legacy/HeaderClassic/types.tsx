import React from 'react'

export interface HeaderClassicProps extends React.HTMLAttributes<HTMLElement> {
  /** Use absolute or relative links on loggedout menu */
  useLoggedOutAbsoluteLinks?: boolean
  /** Dislpays user name and a menu that redirects iq logged pages if true */
  isLogged?: boolean
  /** Displays goBack button before logo */
  showGoBack?: boolean
  /** Callback to run on goBack click */
  onGoBackClick?: () => void
  /** Displays sign in and sign up buttons if not isLogged */
  showAuthButtons?: boolean
  /** Displays notifications bell */
  showNotifications?: boolean
  /** Notifications number to show on the icon bell */
  notificationsNumber?: number
  /**  Callback to run on notification icon click */
  onNotificationClick?: () => void
  /** Username to be displayed if isLogged */
  username?: string
  /** Callback to run on open the mobile version of the menu */
  onOpenMenu?: (e: any) => any
  /** Callback function to run when user click on logout button */
  onLogout?: (e: any) => any
  /** filter displayed navigation itens, or set current page active item */
  mapLoggedOutMenuItems?: (links: NavigationLink[]) => NavigationLink[]
  /** filter logged menu items */
  mapLoggedInMenuItems?: (
    links: LoggedNavigationLink[]
  ) => LoggedNavigationLink[]
  /** Alternative link to register page */
  registerLink?: string
  /** Alternative link to login */
  loginLink?: string
  /** White background on logged navigation */
  whiteVersion?: boolean
  /** Custom class */
  customClass?: string
  /** Header variant */
  variant?: Variant
}

export interface NavigationLink {
  label: string
  ariaLabel: string
  href: string
  onClick?: (args: any) => any
  subLinks?: NavigationLink[]
  isActive?: boolean
}

export interface LoggedNavigationLink {
  label: string
  path: string
  separator?: boolean
  rawIcon?: string
}

export type Variant = 'newco' | 'iq'
