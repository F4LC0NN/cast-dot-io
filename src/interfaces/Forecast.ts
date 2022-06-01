import { AxiosResponse } from 'axios';

interface Forecast {
  data: AxiosResponse['data'],
  isMetric: boolean,
}

export default Forecast;
