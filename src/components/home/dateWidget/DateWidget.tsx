import React, { useEffect, useState } from 'react';

function DateWidget(): JSX.Element {
  const [newDate, setNewDate] = useState(new Date().toDateString());
  useEffect(() => {
    setInterval(() => {
      setNewDate(new Date().toDateString());
    }, 1000);
    return () => {
      clearInterval();
    };
  });

  const [time, setTime] = useState(new Date().toLocaleTimeString('fr-FR'));
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString('fr-FR'));
    }, 1000);
    return () => {
      clearInterval();
    };
  });

  return (
    <>
      <h2>{newDate}</h2>
      <h3>{time}</h3>
    </>
  );
}

export default DateWidget;
