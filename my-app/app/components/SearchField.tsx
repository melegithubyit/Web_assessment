'use client'

import React from 'react';
import SearchBar from './SearchBar';

const SearchField = () => {
  const handleSearch = (searchTerm) => {
    // Perform search logic with the searchTerm
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h1>My SearchField</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchField;