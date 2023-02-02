import React from 'react';

import LoginForm from './LoginForm';
import { Layout } from '../../components';

import type { ReactElement } from 'react';

const Login = (): ReactElement => (
  <Layout>
    <div className="card">
      <LoginForm />
    </div>
  </Layout>
);

export default Login;
