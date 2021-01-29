import { NavigationLink, LoggedNavigationLink } from "./types";
import { loggedMenuItemsIcons } from "./icons";

export const loggedoutNavigationLinks: NavigationLink[] = [
  {
    label: "Gerencie suas contas",
    href: "https://www.iq.com.br/",
    isActive: true,
  },
  {
    label: "Cartões de crédito",
    href: "https://www.iq.com.br/cartoes/",
  },
  {
    label: "Blog",
    href: "https://www.iq.com.br/conteudo",
    subLinks: [
      {
        label: "Newsletter",
        href: "https://www.iq.com.br/newsletter",
      },
      {
        label: "Contas",
        href: "https://www.iq.com.br/conteudo",
      },
      {
        label: "Finanças pessoais",
        href: "https://www.iq.com.br/financas-pessoais",
      },
      {
        label: "Cartões de crédito",
        href: "https://www.iq.com.br/cartoes/conteudo",
      },
    ],
  },
  {
    label: "Quem somos",
    href: "https://www.iq.com.br/quem-somos",
  },
  {
    label: "FAQ",
    href: "https://www.iq.com.br/faq",
  },
];

export const loggedMenuLinks: LoggedNavigationLink[] = [
  { label: "Home", path: "/app", rawIcon: loggedMenuItemsIcons.home },
  {
    label: "Proximas contas",
    path: "/app",
    rawIcon: loggedMenuItemsIcons.calendar,
  },
  { label: "Comprovante", path: "/app", rawIcon: loggedMenuItemsIcons.money },
  {
    label: "Forma de pagamento",
    path: "/app",
    rawIcon: loggedMenuItemsIcons.cards,
  },
  {
    label: "Convidar amigos",
    path: "/app",
    rawIcon: loggedMenuItemsIcons.gift,
    separator: true,
  },
  { label: "Perfil", path: "/app", rawIcon: loggedMenuItemsIcons.person },
  {
    label: "Gerenciar notificações",
    path: "/app",
    rawIcon: loggedMenuItemsIcons.bell,
  },
  { label: "Ajuda", path: "/app", rawIcon: loggedMenuItemsIcons.floater },
  {
    label: "Sair da conta",
    path: "/app",
    rawIcon: loggedMenuItemsIcons.signOut,
    separator: true,
  },
];
