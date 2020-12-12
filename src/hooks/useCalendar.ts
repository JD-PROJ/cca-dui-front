import { isAfter, isBefore } from 'date-fns';
import { useMemo, useState } from 'react';

export interface CalendarItem {
  date: Date;
  day: number;
  selected: boolean;
  active: boolean;
}

const isActive = (currentDate: Date, startDate: Date, endDate: Date) => {
  return !isBefore(currentDate, startDate) && !isAfter(currentDate, endDate);
};

const createCalendar = ({
  currentDate,
  startDate,
  endDate,
}: {
  currentDate: Date;
  startDate: Date;
  endDate: Date;
}) => {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = month - 1;
  const nextMonth = month + 1;

  const nextMonthLength = new Date(year, nextMonth, 0).getDate();
  const prevMonthLength = new Date(year, prevMonth, 0).getDate();

  let days: CalendarItem[] = [];
  for (let day = 1; day <= nextMonthLength; day += 1) {
    const date = new Date(year, month, day);

    days.push({
      day,
      date,
      selected: false,
      active: isActive(date, startDate, endDate),
    });
  }

  for (let i = 0; i < firstDay; i += 1) {
    const day = prevMonthLength - i;
    const date = new Date(year, prevMonth, day);

    days.unshift({
      day,
      date,
      selected: false,
      active: isActive(date, startDate, endDate),
    });
  }

  let nextMonthDay = 1;
  while (days.length < 42) {
    const day = nextMonthDay++;
    const date = new Date(year, nextMonth, day);

    days.push({
      day,
      date,
      selected: false,
      active: isActive(date, startDate, endDate),
    });
  }

  return days;
};

const useCalendar = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  const [date, setDate] = useState(new Date());
  const day = useMemo(() => date.getDate(), [date]);
  const month = useMemo(() => date.getMonth(), [date]);
  const year = useMemo(() => date.getFullYear(), [date]);

  const prevMonth = () => {
    const newMonth = month - 1 < 0 ? 11 : month - 1;
    const newYear = newMonth === 11 ? year - 1 : year;
    setDate(new Date(newYear, newMonth, 1));
  };

  const nextMonth = () => {
    const newMonth = month + 1 > 11 ? 0 : month + 1;
    const newYear = newMonth === 0 ? year + 1 : year;
    setDate(new Date(newYear, newMonth, 1));
  };

  const days = useMemo(
    () => createCalendar({ currentDate: date, startDate, endDate }),
    [date, startDate, endDate],
  );

  return { day, month: month + 1, year, days, prevMonth, nextMonth };
};

export default useCalendar;
