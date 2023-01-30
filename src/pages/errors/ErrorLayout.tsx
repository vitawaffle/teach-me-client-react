import React from 'react';

import ErrorLayoutProps from './ErrorLayoutProps';
import { Card } from '../../components';

const ErrorLayout = ({
  code,
  name,
  message,
  children,
}: ErrorLayoutProps) => (
  <Card>
    <h3 className="text-2xl mb-4">{code} - {name}</h3>
    <p className="mb-6">{message}</p>
    {children}
  </Card>
);

export default ErrorLayout;
