import React from 'react';
import { News, Article } from '../../../../../interfaces/News';
import ArticleDate from './ArticleDate';

function NewsArticles(props: News):JSX.Element {
  const { data } = props;

  return (
    <section className="news-articles">
      <ul className="articles-list">
        {
          data.results?.map((item: Article) => (
            <li key={Math.random()} className="article-item">
              <a
                href={item.url}
                target="_blank"
                className="article-link"
                rel="noreferrer"
              >
                <div className="article-container">
                  <img
                    src={item.multimedia[2].url}
                    alt={item.multimedia[2].url}
                    className="article-image"
                  />
                  <div className="article-subject">
                    <h1 className="article-title">{item.title}</h1>
                    <ArticleDate date={item.created_date} />
                    <div className="article-credentials">
                      <p className="article-author">{item.byline}</p>
                      <p className="article-source">{item.source}</p>
                    </div>
                  </div>
                </div>
                <hr className="article-break" />
              </a>
            </li>
          ))
}
      </ul>
      <p className="article-copyright">{data.copyright}</p>
    </section>
  );
}

export default NewsArticles;
