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
    <div className="forecast-component">
      <div className="temp-data">
        <h1>
          {
              isCelcius ? `${data?.temp_c} °C` : `${data?.temp_f} °F`
            }
        </h1>
        <button type="button" onClick={convertTemperature}>
          {
              isCelcius ? 'Show Farenheit' : 'Show Celcius'
            }
        </button>
      </div>
      <div className="weather-data">
        <img
          src={data?.condition.icon}
          alt={`The weather today is ${data?.condition.text}`}
          className="temp-icon"
        />
        <ul>
          <li>{data?.condition.text}</li>
          <li>
            <p>Wind</p>
            <p className="wind-speed">
              {isKph ? `${data?.wind_kph} Km/h` : `${data?.wind_mph} Mph`}
            </p>
            <button type="button" onClick={convertWindSpeed}>
              {isKph ? 'Show Mph' : 'Show Km/h'}
            </button>
          </li>
          <li>
            <p>{`Direction: ${data?.wind_dir}`}</p>
          </li>
          <li>
            <p>Humidity</p>
            <p>{`${data?.humidity} %`}</p>
          </li>
          <li>
            <button type="button">{'See details >'}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForecastComponent;
