import React, { useState } from 'react';

import useGeoLocationData from '../../../hooks/useGeoLocationData';
import useForecastData from '../../../hooks/useForecastData';

import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';
import DateComponent from './dateComponent/DateComponent';
import GeoLocationComponent from './geoLocationComponent/GeoLocationComponent';
import ForecastComponent from './forecastComponent/ForecastComponent';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';

function HomeComponents(): JSX.Element {
  const [isMetric, setIsMetric] = useState(true);

  const {
    lat, lon, setLat, setLon, apiKey,
  } = useGeoLocationData();

  const { forecastData } = useForecastData({
    url: `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lon}&days=1&aqi=yes&alerts=yes.`,
  });

  return (
    <div className="home-components">
      <div className="top-toolbar">
        <SidebarMenu />
        <DateComponent data={forecastData} isMetric={isMetric} />
      </div>
      <GeoLocationComponent
        data={forecastData.location}
        updateLat={setLat}
        updateLon={setLon}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
      <ForecastComponent
        data={forecastData.current}
        isMetric={isMetric}
      />
      <BottomModalNavbar />
    </div>
  );
}

export default HomeComponents;
