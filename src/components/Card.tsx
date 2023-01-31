import React from 'react';

import type { ChildrenProps } from '../props';

const Card = ({ children }: ChildrenProps) => (
  <div className="bg-white p-4 border rounded">
    {children}
  </div>
);

export default Card;
