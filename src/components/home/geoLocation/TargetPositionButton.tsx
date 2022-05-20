import React, { SetStateAction } from 'react';

interface PositionState {
  latState : React.Dispatch<SetStateAction<number>>,
  lonState: React.Dispatch<SetStateAction<number>>,
}

function TargetPositionButton(props: PositionState): JSX.Element {
  const { latState, lonState } = props;

  const getLocation = (): void => {
    navigator.geolocation.getCurrentPosition((position): void => {
      latState(position.coords.latitude);
      lonState(position.coords.longitude);
    });
  };

  return (
    <button type="submit" onClick={getLocation}>Click me</button>
  );
}

export default TargetPositionButton;
