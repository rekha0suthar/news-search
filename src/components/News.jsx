import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';

const News = () => {
  const { news } = useContext(NewsContext);
  return (
    <div className="news-wrapper">
      {news.length > 0 &&
        news.map((article) => (
          <a href={article.webUrl} target="_blank" rel="noreferrer">
            <div className="news-article" key={article.id}>
              <h2>Section: {article.sectionName}</h2>
              <p>{article.webTitle}</p>
            </div>
          </a>
        ))}
      {news.length === 0 && <p className="dummy-mes">No Article found</p>}
    </div>
  );
};

export default News;
