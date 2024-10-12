import React, { useContext, useEffect } from 'react';
import debounce from 'lodash.debounce';

import Toggle from './Toggle';
import News from './News';
import SearchInput from './SearchInput';
import Pagination from './Pagination';
import { NewsContext } from '../NewsContext';

const API_URL = 'https://content.guardianapis.com/search';
const API_KEY = 'e8ef1103-fb3f-49b0-bead-84e186eb5f14';

const Home = () => {
  const {
    setNews,
    searchQuery,
    setSearchQuery,
    page,
    setTotalPages,
    isOffline,
    setIsOffline,
  } = useContext(NewsContext);

  useEffect(() => {
    const fetchNews = debounce(async () => {
      try {
        const response = await fetch(
          `${API_URL}?q=${searchQuery}&api-key=${API_KEY}&page=${page}&page-size=10`
        );
        const data = await response.json();
        setNews(data.response.results);
        setTotalPages(data.response.pages); // Sets the total pages from API response
      } catch (err) {
        console.log(err);
      }
    }, 500);
    if (isOffline) {
      setSearchQuery('random');
    }
    fetchNews();
  }, [searchQuery, page, isOffline, setNews, setSearchQuery, setTotalPages]); // Re-fetch news whenever searchQuery or page changes

  const toggleHandler = () => {
    setIsOffline(!isOffline);
  };

  return (
    <div className="news-container">
      <h1>News Feed</h1>
      <SearchInput />
      <Toggle
        label="Online/Offline"
        checked={isOffline}
        onChange={toggleHandler}
      />
      <News />
      <Pagination />
    </div>
  );
};

export default Home;
