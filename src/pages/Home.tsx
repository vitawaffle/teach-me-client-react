import React from 'react';

import { strings } from '../localization';
import { Layout } from '../components';

import type { ReactElement } from 'react';

const Home = (): ReactElement => (
  <Layout>
    <div className="card">
      <h1 className="text-4xl">
        {strings.applicationName}
      </h1>
    </div>
  </Layout>
);

export default Home;
