import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

import UrlData from '../interfaces/UrlData';

function useWeatherNewsData(params: UrlData): { weatherNewsData: AxiosResponse['data'] } {
  const [weatherNewsData, setWeatherNewsData] = useState({});
  const { url } = params;

  useEffect(() => {
    async function getWeatherNewsData(): Promise<void> {
      try {
        const response = await axios.get(url);
        setWeatherNewsData(response.data);
      } catch (error) {
        const { log } = console;
        log(error);
      }
    }

    getWeatherNewsData();
  }, [url]);

  return {
    weatherNewsData,
  };
}

export default useWeatherNewsData;
