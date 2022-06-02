import React, { useState, useEffect } from 'react';
import Forecast from '../../../../interfaces/Forecast';
import LocaleDate from '../../../widgets/localeDate/LocaleDate';

function DateComponent(props: Forecast): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());

  const { data } = props;

  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toDateString());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, [currentDate]);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }));
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' }));
    }, 1000);

    return () => {
      clearInterval();
    };
  }, [currentTime]);

  return (
    <div className="date-component">
      <LocaleDate data={data} isMetric={false} />
      <p>{currentTime}</p>
    </div>
  );
}

export default DateComponent;
