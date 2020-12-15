import React from 'react';

import { styled } from '@/stitches.config';

import { LayoutProps } from './types';

const DefaultLayoutWrapper = styled('div', {
  width: '100%',
  height: '100%',
});

const ContentWrapper = styled('div', {
  width: '100%',
  paddingTop: '48px',
});

const TabNavigationWrapper = styled('div', {
  position: 'fixed',
  top: 0,
  width: '100%',
  height: '48px',
  backgroundColor: '$blue00',
});

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <DefaultLayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <TabNavigationWrapper></TabNavigationWrapper>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
