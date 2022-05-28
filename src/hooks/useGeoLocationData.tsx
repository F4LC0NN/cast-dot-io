import { useState, useEffect, SetStateAction } from 'react';

function useGeoLocationData(): {
  lat: number,
  lon: number,
  setLat: React.Dispatch<SetStateAction<number>>,
  setLon: React.Dispatch<SetStateAction<number>>,
  } {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  useEffect(() => {
    setLat(51.52);
    setLon(-0.11);
  }, []);

  return {
    lat,
    lon,
    setLat,
    setLon,
  };
}

export default useGeoLocationData;
