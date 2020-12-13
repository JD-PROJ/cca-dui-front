import React from 'react';

import { CalendarItem } from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

const DayWrapper = styled('div', {
  width: '4.5ch',
  height: '4.5ch',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
});

const DayConfirmation = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1rem',
  left: 0,
  top: 0,
});
const DayNumber = styled('p', {
  margin: '$1',
  fontSize: '$1',
});

const Day = ({
  day,
  selected,
  active,
  confirmation,
}: Omit<CalendarItem, 'date'>) => {
  return (
    <DayWrapper
      css={{
        color: !active ? '$blue20' : selected ? '$gray' : '$blue50',
        backgroundColor: !active || selected ? 'white' : '$blue20',
      }}
    >
      <DayNumber>{day}</DayNumber>
      {confirmation && (
        <DayConfirmation>
          <span role="img" aria-label="Confirmed date">
            🎉
          </span>
        </DayConfirmation>
      )}
    </DayWrapper>
  );
};

export default Day;
