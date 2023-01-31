import React from 'react';

import Container from './Container';
import Header from './Header';

import type { ChildrenProps } from '../props';

const Layout = ({ children }: ChildrenProps) => (
  <>
    <Header />
    <Container>
      <div className="flex gap-2">
        <div className="w-0 lg:w-4/12">
          <div className="card">
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          {children}
        </div>
        <div className="w-0 lg:w-4/12"></div>
      </div>
    </Container>
  </>
);

export default Layout;
