import { NavigationLink, LoggedNavigationLink } from './types'
import { loggedMenuItemsIcons } from './icons'

const defaultPublicLinks: NavigationLink[] = [
  {
    label: 'Cartões de crédito',
    ariaLabel: 'Cartões de crédito',
    href: '/cartoes/',
  },
  {
    label: 'Blog',
    ariaLabel: 'Submenu blog',
    href: '/conteudo/',
    subLinks: [
      {
        label: 'Newsletter',
        ariaLabel: 'Assinar Newsletter',
        href: 'https://www.iq.com.br/newsletter',
      },
      {
        label: 'Contas',
        ariaLabel: 'Blog Contas',
        href: 'https://www.iq.com.br/conteudo',
      },
      {
        label: 'Finanças pessoais',
        ariaLabel: 'Blog finanças pessoais',
        href: 'https://www.iq.com.br/financas-pessoais',
      },
      {
        label: 'Cartões de crédito',
        ariaLabel: 'Blog cartões de crédito',
        href: 'https://www.iq.com.br/cartoes/conteudo',
      },
    ],
  },
  {
    label: 'Quem somos',
    ariaLabel: 'Quem somos',
    href: '/quem-somos/',
  },
]

const defaultPrivateLinks: LoggedNavigationLink[] = [
  { label: 'Home', path: '/app/home/', rawIcon: loggedMenuItemsIcons.home },
  {
    label: 'Proximas contas',
    path: '/app/proximas-contas/',
    rawIcon: loggedMenuItemsIcons.calendar,
  },
  {
    label: 'Comprovante',
    path: '/app/controle/#1',
    rawIcon: loggedMenuItemsIcons.money,
  },
  {
    label: 'Forma de pagamento',
    path: '/app/meus-cartoes/',
    rawIcon: loggedMenuItemsIcons.cards,
  },
  {
    label: 'Convidar amigos',
    path: '/app/convidar/',
    rawIcon: loggedMenuItemsIcons.gift,
    separator: true,
  },
  {
    label: 'Perfil',
    path: '/app/perfil/',
    rawIcon: loggedMenuItemsIcons.person,
  },
  {
    label: 'Gerenciar notificações',
    path: '/app/gerenciar/notificacoes/',
    rawIcon: loggedMenuItemsIcons.bell,
  },
  {
    label: 'Sair da conta',
    path: '/app/sair/',
    rawIcon: loggedMenuItemsIcons.signOut,
    separator: true,
  },
]

const newcoPublicLinks: NavigationLink[] = [
  {
    label: 'Score de crédito',
    ariaLabel: 'score de crédito',
    href: '',
    isActive: true,
  },
  {
    label: 'Cartões de crédito',
    ariaLabel: 'cartões de crédito',
    href: 'https://www.iq.com.br/cartao-de-credito/',
  },
  {
    label: 'Quem somos',
    ariaLabel: 'quem somos',
    href: 'https://www.iq.com.br/quem-somos/',
  },
  {
    label: 'Blog',
    ariaLabel: 'Submenu blog',
    href: '/conteudo/',
    subLinks: [
      {
        label: 'Newsletter',
        ariaLabel: 'Assinar Newsletter',
        href: 'https://www.iq.com.br/newsletter',
      },
      {
        label: 'Contas',
        ariaLabel: 'Blog Contas',
        href: 'https://www.iq.com.br/conteudo',
      },
      {
        label: 'Finanças pessoais',
        ariaLabel: 'Blog finanças pessoais',
        href: 'https://www.iq.com.br/financas-pessoais',
      },
      {
        label: 'Cartões de crédito',
        ariaLabel: 'Blog cartões de crédito',
        href: 'https://www.iq.com.br/cartoes/conteudo',
      },
    ],
  },
]

const newcoPrivateLinks: LoggedNavigationLink[] = [
  { label: 'Home', path: '/home/' },
  {
    label: 'Meus objetivos',
    path: '/meus-objetivos/',
    separator: true,
  },
  {
    label: 'Ofertas para mim',
    path: '/ofertas/',
  },
  {
    label: 'Meus pedidos',
    path: '/meus-pedidos/',
    separator: true,
  },
  {
    label: 'Minha conta',
    path: '/minha-conta/',
  },
  {
    label: 'Alterar senha',
    path: '/alterar-senha/',
    separator: true,
  },
  {
    label: 'Notificações',
    path: '/notificacoes/',
  },
  {
    label: 'Central de ajuda',
    path: '/ajuda/',
    separator: true,
  },
  {
    label: 'Sair da conta',
    path: '/sair/',
  },
]

export const navigationMap = {
  iq: {
    public: defaultPublicLinks,
    private: defaultPrivateLinks,
  },
  newco: {
    public: newcoPublicLinks,
    private: newcoPrivateLinks,
  },
}
