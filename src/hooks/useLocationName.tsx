import { useState, useEffect } from 'react';
import axios from 'axios';

interface PositionProps {
  lat: number,
  lon: number,
  key: string,
}

function useLocationName(args: PositionProps): {locationName: string} {
  const { lat, lon, key } = args;

  const [locationName, setLocationName] = useState('');
  useEffect(() => {
    async function getLocationName(): Promise<void> {
      await axios
        .get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat}%2C%20${lon}&language=en-us&details=false&toplevel=true`)
        .then((response) => {
          setLocationName(response.data.LocalizedName);
        });
    }

    getLocationName();
  }, [lat, lon, key]);

  return { locationName };
}

export default useLocationName;
