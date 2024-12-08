import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const MapDisplay = ({ businesses }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      center={{ lat: 34.0522, lng: -118.2437 }}
      zoom={12}
      mapContainerStyle={{ width: '100%', height: '500px', borderRadius: '8px' }}
    >
      {businesses.map((biz, index) => (
        <Marker key={index} position={biz.location} />
      ))}
    </GoogleMap>
  );
};

export default MapDisplay;
