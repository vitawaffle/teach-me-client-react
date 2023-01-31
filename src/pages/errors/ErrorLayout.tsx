import React from 'react';

import ErrorLayoutProps from './ErrorLayoutProps';

const ErrorLayout = ({
  code,
  name,
  message,
  children,
}: ErrorLayoutProps) => (
  <div className="card">
    <h3 className="text-2xl mb-4">{code} - {name}</h3>
    <p className="mb-6">{message}</p>
    {children}
  </div>
);

export default ErrorLayout;
