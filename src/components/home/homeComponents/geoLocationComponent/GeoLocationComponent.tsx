import React from 'react';
import GeoLocation from '../../../../interfaces/GeoLocation';

function GeoLocationComponent(props: GeoLocation): JSX.Element {
  const { data, updateLat, updateLon } = props;

  function getUserCurrentLocation(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      updateLat(position.coords.latitude);
      updateLon(position.coords.longitude);
    });
  }

  return (
    <>
      <h1>{data?.name}</h1>
      <div>
        <h2>{data?.lat}</h2>
        <h2>{data?.lon}</h2>
      </div>
      <button type="submit" onClick={getUserCurrentLocation}>Update my forecast</button>
    </>
  );
}

export default GeoLocationComponent;
