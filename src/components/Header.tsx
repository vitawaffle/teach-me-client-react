import React from 'react';

import Container from './Container';
import { strings } from '../localization';

const Header = () => (
  <nav className="border-b mb-8 bg-white">
    <Container>
      <div className="flex items-center h-16">
        <h6 className="text-2xl flex-grow">
          {strings.applicationName}
        </h6>
      </div>
    </Container>
  </nav>
);

export default Header;
