import React, { useState, useCallback } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = useCallback(event => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }, [onSearch]);

  return (
    <input type="text" value={query} onChange={handleQueryChange} />
  );
}