/** @jsx jsx */
import { jsx } from '@emotion/core';

import { LayoutProps } from './types';

const DefaultLayout = ({ children }: LayoutProps) => {
  return <div>{children}</div>;
};

export default DefaultLayout;
