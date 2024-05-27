import { NavigationLink, LoggedNavigationLink } from './types'

const publicLinks: NavigationLink[] = [
  {
    label: 'Início',
    ariaLabel: 'inicio',
    href: '/',
  },
  {
    label: 'Quem Somos',
    ariaLabel: 'quem somos',
    href: '/quem-somos',
  },
  {
    label: 'Cartões de Crédito',
    ariaLabel: 'cartões de crédito',
    href: '/cartao-de-credito',
  },
  {
    label: 'Blog',
    ariaLabel: 'blog',
    href: 'https://blog.acordocerto.com.br/',
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
