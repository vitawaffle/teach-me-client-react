import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { useCheckIsAuthenticated } from './hooks';

import type { ReactElement } from 'react';

const App = (): ReactElement => {
  const checkIsAuthenticated = useCheckIsAuthenticated();

  useEffect((): void => {
    void checkIsAuthenticated();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
