import React from 'react';

import { CalendarItem } from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

const DayWrapper = styled('div', {
  width: '100%',
  height: '100%',
  border: 'solid 1px white',
  position: 'relative',
});
const DayConfirmation = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  left: 0,
  top: 0,
});
const DayNumber = styled('p', {
  margin: '$1',
  color: 'white',
  fontSize: '$3',
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
        background: !active ? '$white' : selected ? '$primary' : '$success',
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
