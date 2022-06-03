import React from 'react';
import { gsap } from 'gsap/dist/gsap';

import Forecast from '../../../../interfaces/Forecast';

import arrowBlack from '../../../../assets/images/arrowBlack.svg';

function ForecastCurrent(props: Forecast):JSX.Element {
  const { data, isMetric } = props;

  function seeDetails(): void {
    gsap.fromTo('#slider1', { opacity: 1, y: 0 }, { opacity: 0, y: 5 });
    gsap.fromTo('#slider2', { opacity: 0, y: -5 }, { opacity: 1, y: 0 });
  }

  return (
    <div className="forecast-current">
      <div className="temp-data">
        <h1>
          {
            isMetric
              ? `${data?.temp_c} °C`
              : `${data?.temp_f} °F`
          }
        </h1>
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
              {
                isMetric
                  ? `${data?.wind_kph} km / h`
                  : `${data?.wind_mph} mph`
              }
            </p>
          </li>
          <li>
            <p>{`Direction: ${data?.wind_dir}`}</p>
          </li>
          <li>
            <p>Humidity</p>
            <p>{`${data?.humidity} %`}</p>
          </li>
          <li>
            <a
              href="#slider2"
              className="forecast-current-link"
              onClick={seeDetails}
            >
              <p>See details</p>
              <img src={arrowBlack} alt="See details" className="black-arrow-1" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ForecastCurrent;
