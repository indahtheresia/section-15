import { useState, useEffect } from 'react';

import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
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
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading= {isFetching}
      loadingText= "Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
