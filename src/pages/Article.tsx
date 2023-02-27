import React, { FC } from 'react';
import { articleList } from '../utils/ArticleList';
import { Link } from 'react-router-dom';

const Article: FC = () => {
  const article = articleList.map((obj, id) => {
    return (
      <Link
        to={`/article/${obj.id}`}
        style={{ color: 'black' }}
        className="article_item_container"
        key={obj.title}>
        <div className="article_item_title">{obj.title}</div>
        <div className="article_item_desc">{obj.shortDesc}</div>
      </Link>
    );
  });
  return (
    <div className="item_container">
      <div className="article_grid_container">{article}</div>
    </div>
  );
};

export default Article;
