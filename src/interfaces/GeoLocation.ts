import { SetStateAction } from 'react';

interface GeoLocation {
  data: any;
  updateLat: React.Dispatch<SetStateAction<number>>,
  updateLon: React.Dispatch<SetStateAction<number>>,
}

export default GeoLocation;
