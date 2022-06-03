import React, { SetStateAction } from 'react';
import { AxiosResponse } from 'axios';

import LocaleDate from '../../../../widgets/localeDate/LocaleDate';

import ruler from '../../../../../assets/images/ruler.svg';

interface Forecast {
  data: AxiosResponse['data'],
  isMetric: boolean,
  setIsMetric: React.Dispatch<SetStateAction<boolean>>
}

function SearchResultsCard(props: Forecast): JSX.Element {
  const { data, isMetric, setIsMetric } = props;

  function convertUnit(): void {
    if (isMetric) {
      setIsMetric(false);
    } else {
      setIsMetric(true);
    }
  }

  return (
    <div className="search-results-card">
      <div className="card-title">
        <h3>Search results</h3>
        <button
          type="button"
          onClick={convertUnit}
          className="results-convert-units"
        >
          <img src={ruler} alt="Convert units" />
          <p>
            {
              isMetric ? 'M' : 'I'
            }
          </p>
        </button>
      </div>
      <div className="real-time-results">
        <div>
          <p>Now</p>
          <hr />
        </div>
        <ul className="results-list">
          <li className="results-locale-date">
            <LocaleDate data={data} isMetric={false} />
            <p>{data.current?.last_updated.split(' ')[1]}</p>
          </li>
          <li className="results-location">
            <p>{data.location?.name}</p>
            <p>{data.location?.country}</p>
          </li>
          <li className="results-cast">
            <img src={data.current?.condition.icon} alt="Weather" />
            <div className="results-cast-data">
              <p>{`${data.current?.condition.text}`}</p>
              <p>
                {
                  isMetric
                    ? `${data.current?.temp_c} °C`
                    : `${data.current?.temp_f} °F`
                }
              </p>
              <p>{`Humidity: ${data.current?.humidity} %`}</p>
              <p>{`Wind direction: ${data.current?.wind_dir}`}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchResultsCard;
