import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Search from './components/routes/search/Search';

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
