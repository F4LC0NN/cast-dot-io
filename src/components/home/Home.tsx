import React from 'react';
import useDefaultGeoPosition from '../../hooks/useDefaultGeoPosition';
import BurgerMenuButton from './burgerMenu/BurgerMenuButton';

import DateWidget from './dateWidget/DateWidget';

import GlobalGeoLocation from './geoLocation/GlobalGeoLocation';
import LocalizeButton from './geoLocation/LocalizeButton';

function Home(): JSX.Element {
  const {
    lat, lon, setLat, setLon, key,
  } = useDefaultGeoPosition();

  return (
    <>
      <BurgerMenuButton />
      <DateWidget />
      <GlobalGeoLocation
        locationLat={lat}
        locationLon={lon}
        locationKey={key}
      />
      <LocalizeButton latState={setLat} lonState={setLon} />
    </>
  );
}

export default Home;
