import React, { useState, useEffect, useMemo } from 'react';

import Forecast from '../../../interfaces/Forecast';

import { daysArray, monthsArray } from '../../../utils/dateUtils';

function LocaleDate(props: Forecast): JSX.Element {
  const { data } = props;

  const [dayName, setDayName] = useState('');
  const [monthName, setMonthName] = useState('');
  const [yearName, setYearName] = useState('');

  const year = Number(data.location?.localtime.split(' ')[0].split('-')[0]);
  const month = Number(data.location?.localtime.split(' ')[0].split('-')[1]);
  const day = Number(data.location?.localtime.split(' ')[0].split('-')[2]);

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
    <div>
      {`${monthName} ${dayName}, ${yearName}`}
    </div>
  );
}

export default LocaleDate;
