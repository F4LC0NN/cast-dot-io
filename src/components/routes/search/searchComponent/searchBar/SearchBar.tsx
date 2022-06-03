import React, { useState, SetStateAction } from 'react';
import gsap from 'gsap/dist/gsap';

import lens from '../../../../../assets/images/lens.svg';

interface NameHandler {
  handler: React.Dispatch<SetStateAction<string>>
}

function SearchBar(props: NameHandler):JSX.Element {
  const [locationName, setLocationName] = useState('');
  const { handler } = props;

  function searchLocation(): void {
    handler(locationName);
    setTimeout(() => {
      gsap.fromTo(
        '.form-results-card',
        { opacity: 0, y: -15, display: 'none' },
        { opacity: 1, y: 0, display: 'block' },
      );
    }, 0);
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-bar-input"
        placeholder="Search for a city..."
        onChange={(e) => {
          e.preventDefault();
          setLocationName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={searchLocation}
        className="search-bar-button"
      >
        <img src={lens} alt="Start searching" />
      </button>
    </div>
  );
}

export default SearchBar;
