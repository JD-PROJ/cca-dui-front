import React from 'react';

import { styled } from '@/stitches.config';

import { LayoutProps } from './types';

const DefaultLayoutWrapper = styled('div', {
  width: '100%',
});

const ContentWrapper = styled('div', {
  marginBottom: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const TabNavigationWrapper = styled('div', {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '48px',
  backgroundColor: '#f5f5dc',
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
