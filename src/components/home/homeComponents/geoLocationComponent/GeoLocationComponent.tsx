import React from 'react';
import GeoLocation from '../../../../interfaces/GeoLocation';

import locate from '../../../../assets/images/locate.svg';
import positionIcon from '../../../../assets/images/positionIcon.svg';
import ruler from '../../../../assets/images/ruler.svg';

function GeoLocationComponent(props: GeoLocation): JSX.Element {
  const {
    data, updateLat, updateLon, isMetric, setIsMetric,
  } = props;

  function getUserCurrentLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLat(position.coords.latitude);
      updateLon(position.coords.longitude);
    });
  }

  function convertUnit(): void {
    if (isMetric) {
      setIsMetric(false);
    } else {
      setIsMetric(true);
    }
  }

  return (
    <div className="geolocation-component">
      <div className="geoposition">
        <h3>{data?.name}</h3>
        <div className="coordinates">
          <div className="single-coordinate">
            <img src={positionIcon} alt="Position" className="position-icon" />
            <p>{data?.lat}</p>
          </div>
          <div className="single-coordinate">
            <img src={positionIcon} alt="Position" className="position-icon" />
            <p>{data?.lon}</p>
          </div>
        </div>
      </div>
      <div className="geolocation-button-container">
        <button
          type="button"
          onClick={getUserCurrentLocation}
          className="target-location-button"
        >
          <img src={locate} alt="Locate me" />
          <p>Locate Me</p>
        </button>
        <button
          type="button"
          onClick={convertUnit}
          className="convert-units-button"
        >
          <img src={ruler} alt="Unit" />
          <p>{isMetric ? 'M' : 'I'}</p>
        </button>
      </div>
    </div>
  );
}

export default GeoLocationComponent;
