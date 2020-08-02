/** @jsx jsx */
import { jsx } from '@emotion/core';

import { FlexContainer } from '@/styles';

import { LayoutProps } from './types';

const FullSizeLayout = ({ children }: LayoutProps) => {
  return <FlexContainer>{children}</FlexContainer>;
};

export default FullSizeLayout;
