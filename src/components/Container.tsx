import React from 'react';

import type { ReactElement } from 'react';

import type { ChildrenProps } from '../props';

const Container = ({ children }: ChildrenProps): ReactElement => (
  <div className="flex">
    <div className="w-0 sm:w-1/12 lg:w-2/12"></div>
    <div className="w-full sm:w-10/12 lg:w-10/12">
      {children}
    </div>
    <div className="w-0 sm:w-1/12 lg:w-2/12"></div>
  </div>
);

export default Container;
