import React from 'react';

import type { WithChildrenProps } from '../props';

const Card = ({ children }: WithChildrenProps) => (
  <div className="bg-white p-4 border rounded">
    {children}
  </div>
);

export default Card;
