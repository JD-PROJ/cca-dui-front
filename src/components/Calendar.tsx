import React from 'react';

import useCalendar from '@/hooks/useCalendar';

const Calendar = () => {
  const { date, days, prevMonth, nextMonth } = useCalendar({
    startDate: new Date(2020, 11, 15),
    endDate: new Date(2021, 1, 21),
  });

  return (
    <div>
      <button onClick={prevMonth}>prev</button>
      {`${date}`}
      <button onClick={nextMonth}>next</button>
      <ul>
        {days.map(d => (
          <li>{d.day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
