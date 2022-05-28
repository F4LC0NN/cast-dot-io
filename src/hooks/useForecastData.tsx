import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import UrlData from '../interfaces/UrlData';

function useForecastData(params: UrlData): { forecastData: AxiosResponse['data'] } {
  const [forecastData, setForecastData] = useState({});
  const { url } = params;

  useEffect(() => {
    async function getForecastData(): Promise<void> {
      const response = await axios.get(url);

      setForecastData(response.data);
    }

    getForecastData();
  }, [url]);

  return { forecastData };
}

export default useForecastData;
