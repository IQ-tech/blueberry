import { NavigationLink, LoggedNavigationLink } from './types'

const publicLinks: NavigationLink[] = [
  {
    label: 'Score IQ 360°',
    ariaLabel: 'score iq 360',
    href: '',
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
    href: 'https://www.iq.com.br/conteudo',
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

const privateLinks: LoggedNavigationLink[] = [
  { label: 'Home', path: '/home/' },
  {
    label: 'Meus objetivos',
    path: '/meus-objetivos/',
  },
  {
    label: 'Ofertas para mim',
    path: '/ofertas/',
  },
  {
    label: 'Meus pedidos',
    path: '/meus-pedidos/',
  },
  {
    label: 'Minha conta',
    path: '/minha-conta/',
  },
  {
    label: 'Alterar senha',
    path: '/alterar-senha/',
  },
  {
    label: 'Notificações',
    path: '/notificacoes/',
  },
  {
    label: 'Central de ajuda',
    path: '/ajuda/',
  },
  {
    label: 'Sair da conta',
    path: '/sair/',
  },
]

export const navigationMap = {
  publicLinks,
  privateLinks,
}
