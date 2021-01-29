import { NavigationLink, LoggedNavigationLink } from "./types";

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
  { label: "Home", path: "/app", rawIcon: "" },
  { label: "Proximas contas", path: "/app", rawIcon: "" },
  { label: "Comprovante", path: "/app", rawIcon: "" },
  { label: "Forma de pagamento", path: "/app", rawIcon: "" },
  { label: "Convidar amigos", path: "/app", rawIcon: "", separator: true },
  { label: "Perfil", path: "/app", rawIcon: "" },
  { label: "Gerenciar notificações", path: "/app", rawIcon: "" },
  { label: "Ajuda", path: "/app", rawIcon: "" },
  { label: "Sair da conta", path: "/app", rawIcon: "", separator: true },
];
