import React, { useState } from 'react';

import Forecast from '../../../../../interfaces/Forecast';

import SearchTitleContainer from './SearchTitleContainer';
import SearchSlider from './SearchSlider';

function SearchCarousel(props: Forecast): JSX.Element {
  const [sliderId, setSliderId] = useState(0);
  const { data, isMetric } = props;

  return (
    <div className="search-carousel">
      <SearchTitleContainer setSliderId={setSliderId} />
      <SearchSlider data={data} sliderId={sliderId} isMetric={isMetric} />
    </div>
  );
}

export default SearchCarousel;
