import React from 'react';

import useGeoLocationData from '../../../hooks/useGeoLocationData';
import useForecastData from '../../../hooks/useForecastData';

import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';
import DateComponent from './dateComponent/DateComponent';
import GeoLocationComponent from './geoLocationComponent/GeoLocationComponent';
import ForecastComponent from './forecastComponent/ForecastComponent';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';

function HomeComponents(): JSX.Element {
  const {
    lat, lon, setLat, setLon, apiKey,
  } = useGeoLocationData();

  const { forecastData } = useForecastData({
    url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&aqi=yes&alerts=yes.`,
  });

  return (
    <>
      <div className="top-toolbar">
        <SidebarMenu />
        <DateComponent />
      </div>
      <GeoLocationComponent
        data={forecastData.location}
        updateLat={setLat}
        updateLon={setLon}
      />
      <ForecastComponent data={forecastData.current} />
      <BottomModalNavbar />
    </>
  );
}

export default HomeComponents;
