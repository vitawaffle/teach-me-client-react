import React from 'react';

import type { WithChildrenProps } from '../props';

const List = ({ children }: WithChildrenProps) => (
  <ul className="list-none border-collapse">
    {children}
  </ul>
);

export default List;
