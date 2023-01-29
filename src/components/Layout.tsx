import React from 'react';

import type { WithChildrenProps } from '../props';

const Layout = ({ children }: WithChildrenProps) => (
  <div>
    {children}
  </div>
);

export default Layout;
