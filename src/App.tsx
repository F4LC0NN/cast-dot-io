import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App(): JSX.Element {
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [cityName, setCityName] = useState('');
  const API_KEY = 'XXXXXXX';

  function getLocation(): void {
    navigator.geolocation.getCurrentPosition((position): void => {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }

  useEffect(() => {
    function defaultLocation(): void {
      if (lat === 0 && lon === 0) {
        setLat(51.5072);
        setLon(0.1276);
      }
    }

    defaultLocation();

    async function getCityName(): Promise<void> {
      await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${lat}%2C%20${lon}&language=en-us&details=false&toplevel=true`).then((response) => {
        setCityName(response.data.LocalizedName);
      });
    }

    getCityName();
  }, [cityName, lat, lon]);

  return (
    <div>
      <h1>Weather app API call test</h1>
      <button
        type="submit"
        onClick={getLocation}
      >
        Click me

      </button>
      <hr />
      <h2>
        City:
        {' '}
        {cityName}
      </h2>
      <p>
        Latitude:
        {' '}
        {lat}
      </p>
      <p>
        Longitude:
        {' '}
        {lon}
      </p>
    </div>
  );
}

export default App;
