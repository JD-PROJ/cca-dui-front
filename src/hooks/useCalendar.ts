import { isAfter, isBefore } from 'date-fns';

export interface CalendarItem {
  date: Date;
  day: number;
  selected: boolean;
  active: boolean;
}

const isActive = (currentDate: Date, startDate: Date, endDate: Date) =>
  !isBefore(currentDate, startDate) && !isAfter(currentDate, endDate);

const createCalendar = (startDate: Date, endDate: Date) => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDay = new Date(year, month, 1).getDay();

  const prevMonth = month - 1;
  const nextMonth = month + 1;

  const nextMonthLength = new Date(year, nextMonth, 0).getDate();
  const prevMonthLength = new Date(year, prevMonth, 0).getDate();

  let days = [];
  for (let day = 1; day <= nextMonthLength; day += 1) {
    const date = new Date(year, month, day);

    days.push({
      date,
      day,
      selected: false,
      active: isActive(currentDate, startDate, endDate),
    });
  }

  for (let i = 0; i < firstDay; i += 1) {
    const date = prevMonthLength - i;
    const day = new Date(year, prevMonth, date);
    days.unshift({
      date,
      day,
      selected: false,
      active: isActive(currentDate, startDate, endDate),
    });
  }

  let nextMonthDay = 1;
  while (days.length < 42) {
    const day = nextMonthDay++;
    const date = new Date(year, nextMonth, day);

    days.push({
      date,
      day,
      selected: false,
      active: isActive(currentDate, startDate, endDate),
    });
  }

  return days;
};
