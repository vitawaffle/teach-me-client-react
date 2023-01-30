import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from '../../components';

const Error = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default Error;
