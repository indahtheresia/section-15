import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  //Fetching HTTP Request
  // First solution
  // useEffect(() => {
  //   fetch('http://localhost:3000/places').then((response) => {
  //     return response.json();
  //   }).then((resData) => {
  //     setAvailablePlaces(resData.places);
  //   }); 
  // }, []);

  // Second solution / Alternative way
  useEffect(() => {
    async function fetchPlaces() {
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
