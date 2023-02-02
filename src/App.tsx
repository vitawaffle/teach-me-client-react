import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { useCheckIsAuthenticated, useGetPasswordRules } from './hooks';

import type { ReactElement } from 'react';

const App = (): ReactElement => {
  const checkIsAuthenticated = useCheckIsAuthenticated();
  const getPasswordRules = useGetPasswordRules();

  useEffect((): void => {
    void checkIsAuthenticated();
    void getPasswordRules();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
