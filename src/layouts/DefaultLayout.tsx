import React from 'react';

import { LayoutProps } from './types';

const DefaultLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
