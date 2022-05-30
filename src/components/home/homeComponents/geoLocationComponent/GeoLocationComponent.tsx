import React from 'react';
import GeoLocation from '../../../../interfaces/GeoLocation';
import locate from '../../../../assets/images/locate.svg';
import positionIcon from '../../../../assets/images/positionIcon.svg';

function GeoLocationComponent(props: GeoLocation): JSX.Element {
  const { data, updateLat, updateLon } = props;

  function getUserCurrentLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLat(position.coords.latitude);
      updateLon(position.coords.longitude);
    });
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
      <button type="submit" onClick={getUserCurrentLocation}>
        <img src={locate} alt="Locate me" />
        <p>Locate Me</p>
      </button>
    </div>
  );
}

export default GeoLocationComponent;
