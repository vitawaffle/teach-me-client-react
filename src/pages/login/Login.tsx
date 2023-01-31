import React from 'react';

import LoginForm from './LoginForm';
import { Layout } from '../../components';

const Login = () => (
  <Layout>
    <div className="card">
      <LoginForm />
    </div>
  </Layout>
);

export default Login;
