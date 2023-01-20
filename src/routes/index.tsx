interface Route {
  name: string;
  to: string;
}

export const appRoutes: Array<Route> = [
  {
    name: 'About Us',
    to: '#'
  },
  {
    name: 'Product',
    to: '#'
  },
  {
    name: 'Resources',
    to: '#'
  },
  {
    name: 'Contact',
    to: '#'
  },
]

export const authRoutes: Array<Route> = [
  {
    name: 'Sign In',
    to: '#'
  },
  {
    name: 'Register',
    to: '#'
  },
  {
    name: 'Dashboard',
    to: '#'
  }
]