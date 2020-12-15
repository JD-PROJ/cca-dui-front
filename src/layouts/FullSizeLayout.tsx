import React from 'react';

import { styled } from '@/stitches.config';

import { LayoutProps } from './types';

const FullSizeLayoutWrapper = styled('div', {
  width: '100%',
  height: '100%',
});

const FullSizeLayout = ({ children }: LayoutProps) => {
  return <FullSizeLayoutWrapper>{children}</FullSizeLayoutWrapper>;
};

export default FullSizeLayout;
