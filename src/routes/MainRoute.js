import Loadable from 'components/Loadable';
import { lazy } from 'react';

const DashboardPage = Loadable(lazy(() => import('containers/Dashboard')));
const HomePage = Loadable(lazy(() => import('containers/Home')));

const MAIN_ROUTES = [
  {
    path: '/',
    element: <HomePage />,
    children: [],
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    children: [],
  },
];

export default MAIN_ROUTES;
