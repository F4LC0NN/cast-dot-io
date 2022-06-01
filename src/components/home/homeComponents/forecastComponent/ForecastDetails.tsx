import React from 'react';
import { gsap } from 'gsap/dist/gsap';

import Forecast from '../../../../interfaces/Forecast';

import arrowBlack from '../../../../assets/images/arrowBlack.svg';

function ForecastDetails(props: Forecast): JSX.Element {
  const { data, isMetric } = props;

  function seeCurrent(): void {
    gsap.fromTo('#slider1', { opacity: 0, y: 5 }, { opacity: 1, y: 0 });
    gsap.fromTo('#slider2', { opacity: 1, y: 0 }, { opacity: 0, y: -5 });
  }

  return (
    <div className="forecast-details">
      <div className="forecast-details-table-container">
        <table className="details-table">
          <thead>
            <tr>
              <th colSpan={2}>
                Forecast Details
              </th>
              <th>
                <img src={data?.condition.icon} alt="Current weather" className="forecast-details-icon" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Weather</th>
              <td>{data?.condition.text}</td>
            </tr>
            <tr>
              <th>Temperature</th>
              <td>
                {
                  isMetric
                    ? `${data?.temp_c} °C`
                    : `${data?.temp_f} °F`
                }
              </td>
            </tr>
            <tr>
              <th>Feels Like</th>
              <td>
                {
                  isMetric
                    ? `${data?.feelslike_c} °C`
                    : `${data?.feelslike_f} °F`
                }
              </td>
            </tr>
            <tr>
              <th>UV Level</th>
              <td>{`${data?.uv}`}</td>
            </tr>
            <tr>
              <th>Precipitation</th>
              <td>
                {isMetric ? `${data?.precip_mm} mm` : `${data?.precip_in} in`}
              </td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{`${data?.humidity} %`}</td>
            </tr>
            <tr>
              <th>Pressure</th>
              <td>
                {
                  isMetric
                    ? `${data?.pressure_mb} mb`
                    : `${data?.pressure_in} in`
                }
              </td>
            </tr>
            <tr>
              <th>Visibility</th>
              <td>
                {
                  isMetric
                    ? `${data?.vis_km} km`
                    : `${data?.vis_miles} miles`
                }
              </td>
            </tr>
            <tr>
              <th>Cloud</th>
              <td>{`${data?.cloud} %`}</td>
            </tr>
            <tr>
              <th>Gust</th>
              <td>
                {
                  isMetric
                    ? `${data?.gust_kph} km / h`
                    : `${data?.gust_mph} mph`
                  }
              </td>
            </tr>
            <tr>
              <th>Wind Speed</th>
              <td>
                {
                  isMetric
                    ? `${data?.wind_kph} km / h`
                    : `${data?.wind_mph} mph`
                }
              </td>
            </tr>
            <tr>
              <th>Wind Direction</th>
              <td>{`${data?.wind_dir}`}</td>
            </tr>
            <tr>
              <td className="details-last-column">
                <a
                  href="#slider1"
                  className="forecast-details-link"
                  onClick={seeCurrent}
                >
                  <img src={arrowBlack} alt="See details" className="black-arrow-2" />
                  <p>Back to forecast</p>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ForecastDetails;
