import { NavigationLink, LoggedNavigationLink } from "./types";
import { loggedMenuItemsIcons } from "./icons";

export const loggedoutNavigationLinks: NavigationLink[] = [
  {
    label: "Cartões de crédito",
    ariaLabel: "Cartões de crédito",
    href: "/cartoes/",
  },
  {
    label: "Blog",
    ariaLabel: "Submenu blog",
    href: "/conteudo/",
    subLinks: [
      {
        label: "Newsletter",
        ariaLabel: "Assinar Newsletter",
        href: "https://www.iq.com.br/newsletter",
      },
      {
        label: "Contas",
        ariaLabel: "Blog Contas",
        href: "https://www.iq.com.br/conteudo",
      },
      {
        label: "Finanças pessoais",
        ariaLabel: "Blog finanças pessoais",
        href: "https://www.iq.com.br/financas-pessoais",
      },
      {
        label: "Cartões de crédito",
        ariaLabel: "Blog cartões de crédito",
        href: "https://www.iq.com.br/cartoes/conteudo",
      },
    ],
  },
  {
    label: "Quem somos",
    ariaLabel: "Quem somos",
    href: "/quem-somos/",
  },
];

export const loggedMenuLinks: LoggedNavigationLink[] = [
  { label: "Home", path: "/app/home/", rawIcon: loggedMenuItemsIcons.home },
  {
    label: "Proximas contas",
    path: "/app/proximas-contas/",
    rawIcon: loggedMenuItemsIcons.calendar,
  },
  {
    label: "Comprovante",
    path: "/app/controle/#1",
    rawIcon: loggedMenuItemsIcons.money,
  },
  {
    label: "Forma de pagamento",
    path: "/app/meus-cartoes/",
    rawIcon: loggedMenuItemsIcons.cards,
  },
  {
    label: "Convidar amigos",
    path: "/app/convidar/",
    rawIcon: loggedMenuItemsIcons.gift,
    separator: true,
  },
  {
    label: "Perfil",
    path: "/app/perfil/",
    rawIcon: loggedMenuItemsIcons.person,
  },
  {
    label: "Gerenciar notificações",
    path: "/app/gerenciar/notificacoes/",
    rawIcon: loggedMenuItemsIcons.bell,
  },
  {
    label: "Sair da conta",
    path: "/app/sair/",
    rawIcon: loggedMenuItemsIcons.signOut,
    separator: true,
  },
];
