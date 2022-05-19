import React, { useState, useEffect, SetStateAction } from 'react';

const useGeoPosition = (): {
  lat: number,
  lon: number,
  setLat: React.Dispatch<SetStateAction<number>>,
  setLon: React.Dispatch<SetStateAction<number>>,
  key: string,
} => {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    function defaultLocation(): void {
      if (lat === 0 && lon === 0) {
        setLat(51.5072);
        setLon(0.1276);
      }
    }

    defaultLocation();
  }, [lat, lon]);

  const API_KEY = 'XXXXX';

  return {
    lat,
    lon,
    setLat,
    setLon,
    key: API_KEY,
  };
};

export default useGeoPosition;
