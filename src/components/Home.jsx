import React, { useContext, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Toggle from './Toggle';
import News from './News';
import SearchInput from './SearchInput';
import Pagination from './Pagination';
import { NewsContext } from '../NewsContext';
import Spinner from '../assets/loading.gif';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const {
    news,
    setNews,
    searchQuery,
    setSearchQuery,
    page,
    setTotalPages,
    isOffline,
    setIsOffline,
    loading,
    setLoading,
  } = useContext(NewsContext);

  useEffect(() => {
    const fetchNews = debounce(async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}?q=${searchQuery}&api-key=${API_KEY}&page=${page}&page-size=10`
        );
        const data = await response.json();
        setNews(data.response.results);
        setTotalPages(data.response.pages); // Sets the total pages from API response
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }, 500);
    if (isOffline) {
      setSearchQuery('random');
    }
    fetchNews();
  }, [
    searchQuery,
    page,
    isOffline,
    setNews,
    setSearchQuery,
    setTotalPages,
    setLoading,
  ]); // Re-fetch news whenever searchQuery or page changes

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
      {loading ? (
        <div className="spinner">
          {' '}
          <img src={Spinner} alt="loading" />
        </div>
      ) : (
        <>
          <News />
          {news.length > 0 && <Pagination />}
        </>
      )}
    </div>
  );
};

export default Home;
