import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import UrlData from '../interfaces/UrlData';

function useForecastData(params: UrlData): { forecastData: AxiosResponse['data'] } {
  const [forecastData, setForecastData] = useState({});
  const { url } = params;

  useEffect(() => {
    async function getForecastData(): Promise<void> {
      try {
        const response = await axios.get(url);
        setForecastData(response.data);
      } catch (error) {
        const { log } = console;
        log(`Your error is: ${error}`);
      }
    }

    getForecastData();
  }, [url]);

  return { forecastData };
}

export default useForecastData;
