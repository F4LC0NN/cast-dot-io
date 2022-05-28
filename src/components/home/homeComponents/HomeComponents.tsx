import React from 'react';

import useGeoLocationData from '../../../hooks/useGeoLocationData';
import useForecastData from '../../../hooks/useForecastData';

import SidebarMenu from './sidebarMenu/SidebarMenu';
import DateComponent from './dateComponent/DateComponent';
import GeoLocationComponent from './geoLocationComponent/GeoLocationComponent';
import ForecastComponent from './forecastComponent/ForecastComponent';

function HomeComponents(): JSX.Element {
  const {
    lat, lon, setLat, setLon,
  } = useGeoLocationData();

  const { forecastData } = useForecastData({
    url: `https://api.weatherapi.com/v1/current.json?key=XXXXX&q=${lat},${lon}&aqi=yes.`,
  });

  return (
    <>
      <SidebarMenu />
      <DateComponent />
      <GeoLocationComponent
        data={forecastData.location}
        updateLat={setLat}
        updateLon={setLon}
      />
      <ForecastComponent data={forecastData.current} />
    </>
  );
}

export default HomeComponents;
