import React from 'react';

import { CalendarItem } from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

const DayWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
});
const DayNumber = styled('p', {
  margin: '$1',
  color: 'white',
  fontSize: '$3',
});

const Day = ({ day, selected, active }: Omit<CalendarItem, 'date'>) => {
  return (
    <DayWrapper
      css={{ background: !selected ? '$black' : !active ? 'white' : '$gray' }}
    >
      <DayNumber>{day}</DayNumber>
    </DayWrapper>
  );
};

export default Day;
