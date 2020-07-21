import { lazy } from 'react';

export const path = {
  HOME: { url: '/', label: 'Home' },
  REGISTER: { url: '/register', label: 'Register' },
  LOGIN: { url: '/login', label: 'Login' },
  CONTACTS: { url: '/contacts', label: 'Contacts' },
};

export default [
  {
    path: path.HOME.url,
    label: path.HOME.label,
    exact: true,
    component: lazy(() => import('./views/HomePage/index.tsx')),
    private: false,
    restricted: false,
  },
  {
    path: path.REGISTER.url,
    label: path.REGISTER.label,
    exact: true,
    component: lazy(() => import('./views/RegisterView/index.jsx')),
    private: false,
    restricted: true,
  },
  {
    path: path.LOGIN.url,
    label: path.LOGIN.label,
    exact: true,
    component: lazy(() => import('./views/LoginView')),
    private: false,
    restricted: true,
  },
  {
    path: path.CONTACTS.url,
    label: path.CONTACTS.label,
    exact: true,
    component: lazy(() => import('./views/ContactsView')),
    private: true,
    restricted: false,
  },
];
