import React, { useState, SetStateAction } from 'react';

import lens from '../../../../../assets/images/lens.svg';

interface NameHandler {
  handler: React.Dispatch<SetStateAction<string>>
}

function SearchBar(props: NameHandler):JSX.Element {
  const [locationName, setLocationName] = useState('');
  const { handler } = props;

  function searchLocation(): void {
    handler(locationName);
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
