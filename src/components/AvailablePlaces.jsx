import { useState } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  //Fetching HTTP Request
  fetch('http://localhost:3000/places').then((response) => {
    return response.json();
  }).then((resData) => {
    setAvailablePlaces(resData.places);
  }) //This is not correct, it will cause infinite loop.

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
