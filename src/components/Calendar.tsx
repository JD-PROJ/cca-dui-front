import React from 'react';

import useCalendar from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

import Day from './Day';

const CalendarBodyWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  height: '50vh',
});

const Calendar = () => {
  const { day, month, year, days, prevMonth, nextMonth } = useCalendar({
    startDate: new Date(2020, 11, 31),
    endDate: new Date(2021, 0, 31),
  });

  return (
    <div>
      <button onClick={prevMonth}>prev</button>
      {`${day}.${month}.${year}`}
      <button onClick={nextMonth}>next</button>
      <CalendarBodyWrapper>
        {days.map(({ day, selected, active }) => (
          <Day day={day} selected={selected} active={active} />
        ))}
      </CalendarBodyWrapper>
    </div>
  );
};

export default Calendar;
