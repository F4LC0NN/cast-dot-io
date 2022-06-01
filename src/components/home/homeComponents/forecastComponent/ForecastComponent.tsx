import React from 'react';

import Forecast from '../../../../interfaces/Forecast';

import ForecastCurrent from './ForecastCurrent';
import ForecastDetails from './ForecastDetails';

function ForecastComponent(props: Forecast): JSX.Element {
  const { data, isMetric } = props;

  return (
    <div className="forecast-component">
      <div className="forecast-slider">
        <div className="slides" id="slider1">
          <ForecastCurrent data={data} isMetric={isMetric} />
        </div>
        <div className="slides" id="slider2">
          <ForecastDetails data={data} isMetric={isMetric} />
        </div>
      </div>
    </div>
  );
}

export default ForecastComponent;
