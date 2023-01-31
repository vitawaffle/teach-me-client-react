import React from 'react';
import { Link } from 'react-router-dom';

import Container from './Container';
import { strings } from '../localization';

const Header = () => (
  <nav className="border-b mb-8 bg-white">
    <Container>
      <div className="flex items-center h-16">
        <Link to="/home" className="text-2xl flex-grow">
          {strings.applicationName}
        </Link>
        <Link to="/signin" className="link link-primary">
          {strings.components.header.signIn}
        </Link>
        <Link to="/login" className="link link-primary">
          {strings.components.header.logIn}
        </Link>
      </div>
    </Container>
  </nav>
);

export default Header;
