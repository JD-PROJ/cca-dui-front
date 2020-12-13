import React from 'react';

import Calendar from '@/components/Calendar';
import { styled } from '@/stitches.config';

const CalendarWrapper = styled('div', {
  width: '90%',
});

const Main = () => (
  <CalendarWrapper>
    <Calendar />
  </CalendarWrapper>
);

export default Main;
