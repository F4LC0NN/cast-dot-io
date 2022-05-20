import React from 'react';
import useGeoPosition from '../../hooks/useGeoPosition';

import DateWidget from './dateWidget/DateWidget';

import LocationCoordinates from './geoLocation/LocationCoordinates';
import TargetPositionButton from './geoLocation/TargetPositionButton';

function Home(): JSX.Element {
  const {
    lat, lon, setLat, setLon, key,
  } = useGeoPosition();

  return (
    <>
      <DateWidget />
      <LocationCoordinates
        locationLat={lat}
        locationLon={lon}
        locationKey={key}
      />
      <TargetPositionButton latState={setLat} lonState={setLon} />
    </>
  );
}

export default Home;
