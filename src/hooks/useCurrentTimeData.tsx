import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

import Forecast from '../interfaces/Forecast';

function useCurrentTimeData(props: Forecast): {
  dayTime: AxiosResponse['data'];
} {
  const [dayTime, setDayTime] = useState<string[]>([]);
  const { data, isMetric } = props;

  useEffect(() => {
    const currentEpoch = data.current?.last_updated_epoch;
    function getDayTime(): void {
      data.forecast?.forecastday[0].hour?.map((
        time: AxiosResponse['data'],
      ) => {
        const futureEpoch = time.time_epoch;
        if (futureEpoch > currentEpoch) {
          setDayTime((prevArray) => [...prevArray, time]);
        }

        return time;
      });
    }

    return () => {
      getDayTime();
    };
  }, [data]);

  return {
    dayTime,
  };
}

export default useCurrentTimeData;
