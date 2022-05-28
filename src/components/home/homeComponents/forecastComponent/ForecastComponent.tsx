import React, { useState } from 'react';
import Forecast from '../../../../interfaces/Forecast';

function ForecastComponent(props: Forecast): JSX.Element {
  const { data } = props;
  const [isCelcius, setIsCelcius] = useState(true);

  function convertTemperature(): void {
    if (isCelcius) {
      setIsCelcius(false);
    } else {
      setIsCelcius(true);
    }
  }

  return (
    <>
      <h2>
        {
          isCelcius ? `${data?.temp_c} °C` : `${data?.temp_f} °F`
        }
      </h2>
      <button type="button" onClick={convertTemperature}>
        {
          isCelcius ? 'Show in Farenheit' : 'Show in Celcius'
        }
      </button>
    </>
  );
}

export default ForecastComponent;
