import React from 'react';
import useGeoPositionData from '../../../hooks/useGeoPositionData';

interface Location {
  locationLat: number,
  locationLon: number,
  locationKey: string,
}

function GlobalGeoLocation(props: Location): JSX.Element {
  const { locationLat, locationLon, locationKey } = props;

  const { data } = useGeoPositionData({
    lat: locationLat,
    lon: locationLon,
    key: locationKey,
    url: `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${locationKey}&q=${locationLat}%2C%20${locationLon}&language=en-us&details=false&toplevel=true`,
  });

  return (
    <>
      <h1>{data.LocalizedName}</h1>
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

export default GlobalGeoLocation;
