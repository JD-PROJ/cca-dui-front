import React from 'react';

import useCalendar from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

import Day from './Day';

const CalendarBodyWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

const Calendar = () => {
  const { day, month, year, days, prevMonth, nextMonth } = useCalendar({
    startDate: new Date(2020, 11, 15),
    endDate: new Date(2021, 1, 21),
  });

  return (
    <div>
      <button onClick={prevMonth}>prev</button>
      {`${day}.${month}.${year}`}
      <button onClick={nextMonth}>next</button>
      <CalendarBodyWrapper>
        {days.map(d => (
          <Day day={d.day} />
        ))}
      </CalendarBodyWrapper>
    </div>
  );
};

export default Calendar;
