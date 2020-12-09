import React, { useState } from 'react';
import { useCalendar } from 'react-calendar-hook';

import { styled } from '../stitches.config';
import Day from './Day';

const CalendarComponent = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
});

const CalendarWrapper = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const CalendarNavigation = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  fontSize: '$3',
});

const Calendar = () => {
  const { items, month, year, nextMonth, prevMonth } = useCalendar();
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <CalendarWrapper>
      <CalendarNavigation>
        <button onClick={prevMonth}>prev</button>
        <p>{`${year}년 ${month.number}월`}</p>
        <button onClick={nextMonth}>next</button>
      </CalendarNavigation>
      <CalendarComponent>
        {items.map(day => {
          const dateString = day.fullDate.toString();

          return (
            <Day
              key={dateString}
              text={day.date}
              active={day.active}
              selected={selected.includes(dateString)}
              onClick={() => {
                if (!day.active) return;

                if (!selected.includes(dateString)) {
                  setSelected([...selected, dateString]);
                } else {
                  setSelected([
                    ...selected.filter(item => item !== dateString),
                  ]);
                }
              }}
            />
          );
        })}
      </CalendarComponent>
    </CalendarWrapper>
  );
};

export default Calendar;
