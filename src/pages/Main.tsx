import React from 'react';

import Calendar from '@/components/Calendar';
import ScheduleInfo from '@/components/ScheduleInfo';
import { styled } from '@/stitches.config';

const MainWrapper = styled('div', {
  width: '90%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

const Main = () => (
  <MainWrapper>
    <ScheduleInfo />
    <Calendar />
    <ScheduleInfo />
  </MainWrapper>
);

export default Main;
