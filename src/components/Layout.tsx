import React from 'react';

import Card from './Card';
import Container from './Container';
import List from './List';
import LinkListItem from './LinkListItem';
import { Header } from './header';
import { strings } from '../localization';

import type { WithChildrenProps } from '../props';

const Layout = ({ children }: WithChildrenProps) => (
  <>
    <Header />
    <Container>
      <div className="flex gap-2">
        <div className="w-0 lg:w-4/12">
          <Card>
            <List>
              <LinkListItem to="/home">
                {strings.components.layout.home}
              </LinkListItem>
            </List>
          </Card>
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
