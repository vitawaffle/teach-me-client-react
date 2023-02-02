import React from 'react';
import { Link } from 'react-router-dom';

import ErrorLayout from './ErrorLayout';
import { strings } from '../../localization';

import type { ReactElement } from 'react';

const NotFound = (): ReactElement => (
  <ErrorLayout
    code={404}
    name={strings.pages.errors.notFound.name}
    message={strings.pages.errors.notFound.message}
  >
    <Link to="/home">
      {strings.pages.errors.notFound.toHome}
    </Link>
  </ErrorLayout>
);

export default NotFound;
