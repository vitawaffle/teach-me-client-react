import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { useCheckIsAuthenticated } from './hooks';

const App = () => {
  const checkIsAuthenticated = useCheckIsAuthenticated();

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
