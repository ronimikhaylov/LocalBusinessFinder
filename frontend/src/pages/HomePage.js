import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MapDisplay from '../components/MapDisplay';
import BusinessList from '../components/BusinessList';
import axios from 'axios';

const HomePage = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/google/places?location=34.0522,-118.2437&type=${query}`
      );
      setBusinesses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#6200ea' }}>Discover Local Businesses</h1>
      <SearchBar onSearch={handleSearch} />
      <MapDisplay businesses={businesses} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default HomePage;
