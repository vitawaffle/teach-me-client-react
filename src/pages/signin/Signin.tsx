import React from 'react';

import SigninForm from './SigninForm';
import { Layout } from '../../components';

const Signin = () => (
  <Layout>
    <div className="card">
      <SigninForm />
    </div>
  </Layout>
);

export default Signin;
