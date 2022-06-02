import React, { useState } from 'react';

import useGeoLocationData from '../../../../hooks/useGeoLocationData';
import useForecastData from '../../../../hooks/useForecastData';
import useCurrentTimeData from '../../../../hooks/useCurrentTimeData';

import SearchBar from './searchBar/SearchBar';
import SearchResultsCard from './searchResultsCard/SearchResultsCard';

import locate from '../../../../assets/images/locate2.svg';

function SearchComponent(): JSX.Element {
  const [locationName, setLocationName] = useState('');

  const { apiKey } = useGeoLocationData();

  const { forecastData } = useForecastData({
    url: locationName === ''
      ? `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=london&days=1&aqi=yes&alerts=yes.`
      : `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${locationName.toLowerCase()}&days=1&aqi=yes&alerts=yes.`,
  });

  useCurrentTimeData({
    data: forecastData,
    isMetric: false,
  });

  function handleSubmit(event: { preventDefault: () => void; }): void {
    event.preventDefault();
  }

  return (
    <div className="search-component">
      <form method="GET" onSubmit={handleSubmit} className="search-form">
        <SearchBar handler={setLocationName} />
        {
          locationName === ''
            ? (
              <div className="help-message">
                <img src={locate} alt="Start searching for a city..." className="search-query-icon" />
                <p>Looking for your favorite city?</p>
                <p>Enter its name & click the button.</p>
              </div>
            )
            : <SearchResultsCard data={forecastData} isMetric={false} />
        }
      </form>
    </div>
  );
}

export default SearchComponent;
