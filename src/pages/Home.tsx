import React from 'react';

import { strings } from '../localization';
import { Layout } from '../components';

const Home = () => (
  <Layout>
    <h1>{strings.applicationName}</h1>
  </Layout>
);

export default Home;
