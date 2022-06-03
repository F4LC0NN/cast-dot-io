import React, { useState, useMemo, useEffect } from 'react';

import { daysArray, monthsArray } from '../../../../../utils/dateUtils';

interface SearchDate {
  searchDate: string;
}

function SearchDate(props: SearchDate):JSX.Element {
  const { searchDate } = props;

  const [dayName, setDayName] = useState('');
  const [monthName, setMonthName] = useState('');
  const [yearName, setYearName] = useState('');

  const year = Number(searchDate.split(' ')[0].split('-')[0]);
  const month = Number(searchDate.split(' ')[0].split('-')[1]);
  const day = Number(searchDate.split(' ')[0].split('-')[2]);

  const dateArray: number[] = useMemo(
    () => [year, month, day],
    [day, month, year],
  );

  dateArray.push(year);
  dateArray.push(month);
  dateArray.push(day);

  useEffect(() => {
    daysArray.forEach((obj: {
      id: number;
      name: string;
    }) => {
      if (obj.id === dateArray[2]) {
        setDayName(obj.name);
      }
    });

    monthsArray.forEach((obj: {
      id: number;
      name: string;
    }) => {
      if (obj.id === dateArray[1]) {
        setMonthName(obj.name);
      }
    });

    setYearName(dateArray[0].toString());
  }, [dateArray]);

  return (
    <p>{`${monthName} ${dayName}, ${yearName}`}</p>
  );
}

export default SearchDate;
