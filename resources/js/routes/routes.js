import { lazy } from 'react';


export default [
  {
    path: 'dashboard',
    component: lazy(() => import('../components/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('../components/Users')),
    exact: true,
  },
]
