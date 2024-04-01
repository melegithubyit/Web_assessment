import React, { useState } from 'react';
import { debounce } from 'lodash';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const delayedSearch = debounce((value) => {
    onSearch(value);
  }, 300); // Adjust the delay time according to your needs

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    delayedSearch(value);
  };

  return (
    <div className="mb-4 w-[900px] mx-auto text-start">
      <input
        type="text"
        placeholder="Search hospital"
        value={searchTerm}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

export default SearchBar;
