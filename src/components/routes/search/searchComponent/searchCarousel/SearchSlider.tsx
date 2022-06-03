import React from 'react';
import { AxiosResponse } from 'axios';

import SearchResults from '../../../../../interfaces/SearchResults';

import SearchDate from './SearchDate';

import temperature from '../../../../../assets/images/temperature.svg';
import humidity from '../../../../../assets/images/humidity.svg';
import wind from '../../../../../assets/images/wind.svg';
import direction from '../../../../../assets/images/direction.svg';

interface LocalForecast {
  data: AxiosResponse['data'],
  sliderId: number,
  isMetric: boolean,
}

function SearchSlider(props: LocalForecast): JSX.Element {
  const { data, sliderId, isMetric } = props;

  return (
    <div className="search-slider">
      <ul className="search-slider-list">
        {
          data[sliderId]?.hour.map((item: SearchResults) => (
            <li key={item.time_epoch} className="search-slide">
              <div className="search-slide-card">
                <div className="slide-part1">
                  <div className="search-slide-date">
                    <SearchDate searchDate={item.time.split(' ')[0]} />
                    <p>{item.time.split(' ')[1]}</p>
                  </div>
                  <div className="search-slide-weather-text">
                    <p>{item.condition.text}</p>
                  </div>
                </div>
                <div className="search-slide-weather-icon">
                  <img src={item.condition.icon} alt="Weather condition" />
                </div>
                <div className="slide-part2">
                  <div className="slide-temperature">
                    <img src={temperature} alt="Temperature" />
                    <p>
                      {
                        isMetric
                          ? `${item.temp_c} °C`
                          : `${item.temp_f} °F`
                      }
                    </p>
                  </div>
                  <div className="slide-humidity">
                    <img src={humidity} alt="Temperature" />
                    <p>{`${item.humidity}%`}</p>
                  </div>
                  <div className="slide-wind">
                    <img src={wind} alt="Temperature" />
                    <p>
                      {
                        isMetric
                          ? `${item.wind_kph} km / h`
                          : `${item.wind_kph} mph`
                      }
                    </p>
                  </div>
                  <div className="slide-direction">
                    <img src={direction} alt="Temperature" />
                    <p>{`${item.wind_dir}`}</p>
                  </div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SearchSlider;
