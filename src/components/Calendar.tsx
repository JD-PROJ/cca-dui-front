import React from 'react';

import useCalendar from '@/hooks/useCalendar';
import { styled } from '@/stitches.config';

import Day from './Day';
import DayOfWeek from './DayOfWeek';

const CalendarWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
});

const CalendarNavWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  height: '5vh',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '$3',
});

const CalendarNavText = styled('div', {
  fontSize: '$3',
});

const CalendarNavButton = styled('div', {
  display: 'inline-block',
  width: '1rem',
  height: '1rem',
  borderTop: '2px solid black',
  borderRight: '2px solid black',
  variants: {
    direction: {
      prev: {
        transform: 'rotate(-135deg)',
      },
      next: {
        transform: 'rotate(45deg)',
      },
    },
  },
});

const CalendarHeadWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  width: '100%',
});

const CalendarBodyWrapper = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  height: '50vh',
  width: '100%',
});

const getSeasonEmoji = (month: number) => {
  switch (month) {
    case 12:
      return '🎄';
    case 1:
    case 2:
      return '☃️';
    case 3:
    case 4:
    case 5:
      return '🌱';
    case 6:
    case 7:
    case 8:
      return '🏄';
    case 9:
    case 10:
    case 11:
      return '🍁';
    default:
      return '';
  }
};

const DaysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

const Calendar = () => {
  const { month, year, days, prevMonth, nextMonth } = useCalendar({
    startDate: new Date(2020, 11, 31),
    endDate: new Date(2022, 0, 31),
  });

  return (
    <CalendarWrapper>
      <CalendarNavWrapper>
        <CalendarNavButton
          onClick={prevMonth}
          direction="prev"
        ></CalendarNavButton>
        <CalendarNavText>{`${year}년 ${month}월 ${getSeasonEmoji(
          month,
        )}`}</CalendarNavText>
        <CalendarNavButton
          onClick={nextMonth}
          direction="next"
        ></CalendarNavButton>
      </CalendarNavWrapper>
      <CalendarHeadWrapper>
        {DaysOfWeek.map(d => (
          <DayOfWeek text={d} />
        ))}
      </CalendarHeadWrapper>
      <CalendarBodyWrapper>
        {days.map(({ day, selected, active, confirmation }, index) => (
          <Day
            day={day}
            selected={selected}
            active={active}
            confirmation={confirmation}
          />
        ))}
      </CalendarBodyWrapper>
    </CalendarWrapper>
  );
};

export default Calendar;
