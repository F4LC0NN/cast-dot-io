import React from 'react';

import Forecast from '../../../../../interfaces/Forecast';
import LocaleDate from '../../../../widgets/localeDate/LocaleDate';

function SearchResultsCard(props: Forecast): JSX.Element {
  const { data } = props;

  return (
    <div className="search-results-card">
      <h3>Search results</h3>
      <div className="real-time-results">
        <div>
          <p>Now</p>
          <hr />
        </div>
        <ul className="results-list">
          <li className="results-locale-date">
            <LocaleDate data={data} isMetric={false} />
          </li>
          <li className="results-location">
            <p>{data.location?.name}</p>
            <p>{data.location?.country}</p>
          </li>
          <li className="results-cast">
            <img src={data.current?.condition.icon} alt="Weather" />
            <div className="results-cast-data">
              <p>{`${data.current?.condition.text}`}</p>
              <p>{`${data.current?.temp_c} °C`}</p>
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
