import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import { Home } from './pages';

const router = createBrowserRouter([
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: '',
    element: <Navigate to="/home" />,
  },
]);

export default router;
