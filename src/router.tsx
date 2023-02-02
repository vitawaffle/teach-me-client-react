import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Home, Login, Signin } from './pages';
import { Error, NotFound } from './pages/errors';

const router = createBrowserRouter([
  {
    path: 'signin',
    element: <Signin />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'error',
    element: <Error />,
    children: [
      {
        path: 'not-found',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    element: <Navigate to="/error/not-found" />,
  },
]);

export default router;
