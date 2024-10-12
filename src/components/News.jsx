import React, { useContext } from 'react';
import { NewsContext } from '../NewsContext';

const News = () => {
  const { news } = useContext(NewsContext);
  return (
    <div className="news-wrapper">
      {news.map((article) => (
        <a href={article.webUrl} target="_blank" rel="noreferrer">
          <div className="news-article" key={article.id}>
            <h2>Section: {article.sectionName}</h2>
            <p>{article.webTitle}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default News;
