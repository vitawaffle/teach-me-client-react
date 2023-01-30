import React from 'react';
import { useNavigate } from 'react-router-dom';

import LinkListItemProps from './LinkListItemProps';
import ListItem from './ListItem';

const LinkListItem = ({ to, children }: LinkListItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <ListItem onClick={handleClick}>
      {children}
    </ListItem>
  );
};

export default LinkListItem;
