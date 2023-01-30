import React from 'react';

import type ListItemProps from './ListItemProps';

const ListItem = ({ onClick, children }: ListItemProps) => (
  <li
    onClick={onClick}
    className={`border px-4 py-2 first:rounded-t last:rounded-b ${
      onClick ? 'hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200'
        : ''
    }`}
  >
    {children}
  </li>
);

export default ListItem;
