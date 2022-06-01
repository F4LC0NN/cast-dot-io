import { SetStateAction } from 'react';
import { AxiosResponse } from 'axios';

interface GeoLocation {
  data: AxiosResponse['data'];
  updateLat: React.Dispatch<SetStateAction<number>>,
  updateLon: React.Dispatch<SetStateAction<number>>,
  isMetric: boolean,
  setIsMetric: React.Dispatch<SetStateAction<boolean>>,
}

export default GeoLocation;
