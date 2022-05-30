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
      <p>{currentDate}</p>
      <p>{currentTime}</p>
    </div>
  );
}

export default DateComponent;
