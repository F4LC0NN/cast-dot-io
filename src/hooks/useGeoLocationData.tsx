import { useState, useEffect, SetStateAction } from 'react';

function useGeoLocationData(): {
  lat: number,
  lon: number,
  setLat: React.Dispatch<SetStateAction<number>>,
  setLon: React.Dispatch<SetStateAction<number>>,
  apiKey: string,
  } {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const API_KEY = 'XXXXX';

  useEffect(() => {
    setLat(51.52);
    setLon(-0.11);
  }, []);

  return {
    lat,
    lon,
    setLat,
    setLon,
    apiKey: API_KEY,
  };
}

export default useGeoLocationData;
