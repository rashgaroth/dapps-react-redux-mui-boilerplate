import Dashboard from 'containers/Dashboard';
import Home from 'containers/Home';

// const MAIN_ROUTES = {
//   path: '/',
//   element: <Home />,
//   children: [
//     {
//       path: '/pages/dashboard',
//       element: <Dashboard />,
//     },
//   ],
// };

const MAIN_ROUTES = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [],
  },
];

export default MAIN_ROUTES;
