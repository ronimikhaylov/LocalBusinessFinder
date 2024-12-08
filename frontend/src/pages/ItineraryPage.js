import React, { useState } from 'react';
import ItineraryForm from '../components/ItineraryForm';
import ItineraryDisplay from '../components/ItineraryDisplay';

const ItineraryPage = () => {
  const [itinerary, setItinerary] = useState('');

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#6200ea' }}>Plan Your Itinerary</h1>
      <ItineraryForm onItineraryGenerated={setItinerary} />
      {itinerary && <ItineraryDisplay itinerary={itinerary} />}
    </div>
  );
};

export default ItineraryPage;
