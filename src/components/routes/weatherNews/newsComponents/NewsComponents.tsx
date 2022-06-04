import React from 'react';

import useWeatherNewsData from '../../../../hooks/useWeatherNewsData';

import nyc from '../../../../assets/images/nyc.png';
import NewsArticles from './newsArticles/NewsArticles';

function NewsComponents(): JSX.Element {
  const { weatherNewsData } = useWeatherNewsData({
    url: 'https://api.nytimes.com/svc/news/v3/content/inyt/climate.json?api-key=XXXXX',
  });

  return (
    <div className="news-components">
      <a href="https://developer.nytimes.com" className="nyt-link">
        <img src={nyc} alt="Data provided by The New York Times" />
      </a>
      <NewsArticles data={weatherNewsData} />
    </div>
  );
}

export default NewsComponents;
