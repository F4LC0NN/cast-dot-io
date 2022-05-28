import React, { useState } from 'react';
import Forecast from '../../../../interfaces/Forecast';

function ForecastComponent(props: Forecast): JSX.Element {
  const { data } = props;
  const [isCelcius, setIsCelcius] = useState(true);
  const [isKph, setIsKph] = useState(true);

  function convertTemperature(): void {
    if (isCelcius) {
      setIsCelcius(false);
    } else {
      setIsCelcius(true);
    }
  }

  function convertWindSpeed(): void {
    if (isKph) {
      setIsKph(false);
    } else {
      setIsKph(true);
    }
  }

  return (
    <>
      <div>
        <h2>
          {
            isCelcius ? `${data?.temp_c} °C` : `${data?.temp_f} °F`
          }
        </h2>
        <button type="button" onClick={convertTemperature}>
          {
            isCelcius ? 'Show Farenheit' : 'Show Celcius'
          }
        </button>
      </div>
      <img
        src={data?.condition.icon}
        alt={`The weather today is ${data?.condition.text}`}
      />
      <ul>
        <li>{data?.condition.text}</li>
        <li>
          <p>Wind cast</p>
          <p>{isKph ? `Speed: ${data?.wind_kph} Kph` : `Speed: ${data?.wind_mph} Mph`}</p>
          <button type="button" onClick={convertWindSpeed}>{isKph ? 'Show Mph' : 'Show Kph'}</button>
          <p>{`Direction: ${data?.wind_dir}`}</p>
        </li>
        <li>
          <p>Humidity</p>
          <p>{data?.humidity}</p>
        </li>
        <li>
          <button type="button">{'See details >'}</button>
        </li>
      </ul>
    </>
  );
}

export default ForecastComponent;
