import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Search from './components/routes/search/Search';
import WeatherNews from './components/routes/weatherNews/WeatherNews';
import About from './components/routes/about/About';

React.lazy(() => import('./components/home/Home'));
React.lazy(() => import('./components/routes/search/Search'));
React.lazy(() => import('./components/routes/weatherNews/WeatherNews'));
React.lazy(() => import('./components/routes/about/About'));

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/weather-news" element={<WeatherNews />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
