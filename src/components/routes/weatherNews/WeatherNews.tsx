import React from 'react';

import SidebarMenu from '../../widgets/sidebarMenu/SidebarMenu';
import NewsComponents from './newsComponents/NewsComponents';
import BottomModalNavbar from '../../widgets/bottomModalNavbar/BottomModalNavbar';

import './weatherNews.scss';

function WeatherNews(): JSX.Element {
  return (
    <div className="weather-news">
      <SidebarMenu />
      <NewsComponents />
      <BottomModalNavbar />
    </div>
  );
}

export default WeatherNews;
