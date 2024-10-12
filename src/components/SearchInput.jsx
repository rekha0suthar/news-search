import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';

const SearchInput = () => {
  const { searchQuery, setSearchQuery, isOffline } = useContext(NewsContext);
  return (
    <div className="news-input">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={isOffline}
      />
    </div>
  );
};

export default SearchInput;
