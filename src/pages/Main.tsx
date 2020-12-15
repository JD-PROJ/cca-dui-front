import React from 'react';

import Calendar from '@/components/Calendar';
import { styled } from '@/stitches.config';

const MainWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
});

const Row = styled('div', {
  width: '90%',
  paddingTop: '$3',
  paddingBottom: '$3',
});

const Main = () => (
  <MainWrapper>
    <Row>
      <Calendar />
    </Row>
  </MainWrapper>
);

export default Main;
