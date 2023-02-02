import React from 'react';

import SigninForm from './SigninForm';
import { Layout } from '../../components';

import type { ReactElement } from 'react';

const Signin = (): ReactElement => (
  <Layout>
    <div className="card">
      <SigninForm />
    </div>
  </Layout>
);

export default Signin;
