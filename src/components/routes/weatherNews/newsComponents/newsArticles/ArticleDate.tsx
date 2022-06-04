import React, { useState, useEffect, useMemo } from 'react';

import { daysArray, monthsArray } from '../../../../../utils/dateUtils';

interface Date {
  date: string,
}

function ArticleDate(props: Date):JSX.Element {
  const { date } = props;

  const [dayName, setDayName] = useState('');
  const [monthName, setMonthName] = useState('');
  const [yearName, setYearName] = useState('');

  const year = Number(date.split('T')[0].split('-')[0]);
  const month = Number(date.split('T')[0].split('-')[1]);
  const day = Number(date.split('T')[0].split('-')[2]);

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
    <div className="article-date">
      {`${monthName} ${dayName}, ${yearName}`}
    </div>
  );
}

export default ArticleDate;
