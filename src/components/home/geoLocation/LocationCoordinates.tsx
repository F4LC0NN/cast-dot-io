import React from 'react';
import useLocationName from '../../../hooks/useLocationName';

interface LocationProps {
  locationLat: number,
  locationLon: number,
  locationKey: string,
}

function LocationCoordinates(props: LocationProps): JSX.Element {
  const { locationLat, locationLon, locationKey } = props;

  const { locationName } = useLocationName({
    lat: locationLat,
    lon: locationLon,
    key: locationKey,
  });

  return (
    <>
      <h1>{locationName}</h1>
      <p>
        latitude:
        {' '}
        {locationLat}
      </p>
      <p>
        longitude:
        {' '}
        {locationLon}
      </p>
    </>
  );
}

export default LocationCoordinates;
