import { useState, createContext } from 'react';

// Corrected NewsContext
const NewsContext = createContext({});

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('random');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isOffline, setIsOffline] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
        searchQuery,
        setSearchQuery,
        page,
        setPage,
        totalPages,
        setTotalPages,
        isOffline,
        setIsOffline,
        loading,
        setLoading,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export { NewsContext, NewsContextProvider };
