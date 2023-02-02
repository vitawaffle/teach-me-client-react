import React from 'react';
import { Outlet } from 'react-router-dom';

import { Layout } from '../../components';

import type { ReactElement } from 'react';

const Error = (): ReactElement => (
  <Layout>
    <Outlet />
  </Layout>
);

export default Error;
