import React from 'react';

import { strings } from '../localization';
import { Card, Layout } from '../components';

const Home = () => (
  <Layout>
    <Card>
      <h1 className="text-4xl">
        {strings.applicationName}
      </h1>
    </Card>
  </Layout>
);

export default Home;
