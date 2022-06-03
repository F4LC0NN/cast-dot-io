import React, { SetStateAction } from 'react';
import gsap from 'gsap/dist/gsap';

interface SliderId {
  setSliderId: React.Dispatch<SetStateAction<number>>
}

function SearchTitleContainer(props: SliderId): JSX.Element {
  const { setSliderId } = props;

  function moveHr(event: { target: any }): void {
    switch (event.target.id) {
      case '0':
        gsap.to('.moving-hr', { x: 0, width: '2.5rem' });
        setSliderId(0);
        break;
      case '1':
        gsap.to('.moving-hr', { x: 55, width: '4rem' });
        setSliderId(1);
        break;
      case '2':
        gsap.to('.moving-hr', { x: 130, width: '4rem' });
        setSliderId(2);
        break;
      default:
        gsap.to('.moving-hr', { x: 0, width: '2.5rem' });
        setSliderId(0);
        break;
    }
    gsap.fromTo('.search-slider', { opacity: 0, y: -10 }, { opacity: 1, y: 0 });
  }
  return (
    <div className="carousel-title-container">
      <div className="carousel-buttons">
        <button
          type="button"
          id="0"
          className="carousel-button"
          onClick={moveHr}
        >
          Today

        </button>
        <button
          type="button"
          id="1"
          className="carousel-button"
          onClick={moveHr}
        >
          Tomorrow

        </button>
        <button
          type="button"
          id="2"
          className="carousel-button"
          onClick={moveHr}
        >
          Day After
        </button>
      </div>
      <hr className="moving-hr" />
    </div>
  );
}

export default SearchTitleContainer;
