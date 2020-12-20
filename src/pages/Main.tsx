import React from 'react';

import Calendar from '@/components/Calendar';
import DayInfo from '@/components/DayInfo';
import ScheduleInfo from '@/components/ScheduleInfo';
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

const WideRow = styled('div', {
  width: '100%',
});

const Main = () => (
  <MainWrapper>
    <WideRow>
      <ScheduleInfo />
    </WideRow>
    <Row>
      <Calendar />
    </Row>
    <Row>
      <DayInfo
        year={2021}
        month={12}
        day={24}
        selected={true}
        users={['철수', '영희']}
      />
    </Row>
  </MainWrapper>
);

export default Main;
