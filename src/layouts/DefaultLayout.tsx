import React from 'react';

import { styled } from '@/stitches.config';

import { LayoutProps } from './types';

const DefaultLayoutWrapper = styled('div', {
  width: '100%',
  height: '100%',
});

const ContentWrapper = styled('div', {
  width: '100%',
  paddingBottom: '60px',
});

const TabNavigationWrapper = styled('div', {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '60px',
  backgroundColor: '$blue00',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <DefaultLayoutWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <TabNavigationWrapper>
        <p>아이콘1</p>
        <p>아이콘2</p>
        <p>아이콘3</p>
      </TabNavigationWrapper>
    </DefaultLayoutWrapper>
  );
};

export default DefaultLayout;
