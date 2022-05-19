import React from 'react';
import TargetPositionButton from './TargetPositionButton';
import useGeoPosition from '../hooks/useGeoPosition';
import useLocationName from '../hooks/useLocationName';

function Home(): JSX.Element {
  const {
    lat, lon, setLat, setLon, key,
  } = useGeoPosition();

  const { locationName } = useLocationName({ lat, lon, key });

  return (
    <>
      <h1>{locationName}</h1>
      <p>
        latitude:
        {' '}
        {lat}
      </p>
      <p>
        longitude:
        {' '}
        {lon}
      </p>
      <TargetPositionButton latState={setLat} lonState={setLon} />
    </>
  );
}

export default Home;
