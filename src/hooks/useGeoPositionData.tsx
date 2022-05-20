import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Position {
  lat: number,
  lon: number,
  key: string,
  url: string,
}

function useGeoPositionData(params: Position): {data: AxiosResponse['data']} {
  const {
    lat, lon, key, url,
  } = params;

  const [data, setData] = useState({});
  useEffect(() => {
    async function getGeoPositionData(): Promise<void> {
      await axios
        .get(url)
        .then((response) => {
          setData(response.data);
        });
    }

    getGeoPositionData();
  }, [lat, lon, key, url]);

  return { data };
}

export default useGeoPositionData;
