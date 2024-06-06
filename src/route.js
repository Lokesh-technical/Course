import BaseLayout from './layout/index';
import React from 'react';
import Login from './components/Login';
import Signin from './components/Signin';
import Home from './components/Home';
import Readmore from './components/Readmore';

const routes = [
    {
        path: '',
        element: <BaseLayout />,
        children: [
          {
            path: '/',
            element: <Login />
          },
          {
            path: '/Signin',
            element: <Signin />
          },
          {
            path: '/home',
            element: <Home />
          },
          {
            path: '/readmore',
            element: <Readmore />
          }
        ]
      },
]

export default routes;
