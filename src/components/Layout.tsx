import React from 'react';

import Container from './Container';
import { Header } from './header';

import type { WithChildrenProps } from '../props';

const Layout = ({ children }: WithChildrenProps) => (
  <>
    <Header />
    <Container>
      <div className="flex">
        <div className="w-0 lg:w-4/12"></div>
        <div className="w-full lg:w-4/12">
          {children}
        </div>
        <div className="w-0 lg:w-4/12"></div>
      </div>
    </Container>
  </>
);

export default Layout;
