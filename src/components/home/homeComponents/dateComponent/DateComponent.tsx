import React, { useState, useEffect } from 'react';

function DateComponent(): JSX.Element {
  const [currentDate, setCurrentDate] = useState(new Date().toDateString());
  useEffect(() => {
    setInterval(() => {
      setCurrentDate(new Date().toDateString());
    }, 1000);

    return () => {
      clearInterval();
    };
  }, [currentDate]);

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [currentTime]);

  return (
    <>
      <p>{currentDate}</p>
      <p>{currentTime}</p>
    </>
  );
}

export default DateComponent;
