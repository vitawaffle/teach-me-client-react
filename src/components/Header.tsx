import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Container from './Container';
import { strings } from '../localization';
import { useSelector, selectIsAuthenticated } from '../redux';
import { useLogout, useCheckIsAuthenticated } from '../hooks';

import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const logout = useLogout();
  const checkIsAuthenticated = useCheckIsAuthenticated();
  const navigate = useNavigate();

  const handleLogoutClick = async (): Promise<void> => {
    logout();
    await checkIsAuthenticated();
    navigate('/home');
  };

  /* eslint-disable @typescript-eslint/no-misused-promises */
  return (
    <nav className="border-b mb-8 bg-white">
      <Container>
        <div className="flex items-center h-16">
          <Link to="/home" className="text-2xl flex-grow">
            {strings.applicationName}
          </Link>
          {!isAuthenticated && (
            <Link to="/signin" className="header-link">
              {strings.components.header.signIn}
            </Link>
          )}
          {!isAuthenticated && (
            <Link to="/login" className="header-link">
              {strings.components.header.logIn}
            </Link>
          )}
          {isAuthenticated && (
            <button onClick={handleLogoutClick} className="header-link">
              {strings.components.header.logOut}
            </button>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Header;
