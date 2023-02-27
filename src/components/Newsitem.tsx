import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { articleList } from '../utils/ArticleList';

const Newsitem: FC = () => {
  const article = articleList.map((obj) => {
    return (
      <Link
        style={{ color: 'black' }}
        to={`/article/${obj.id}`}
        key={obj.title}
        className="news_block_item">
        <div className="news_block_item_image_container">
          <img src={obj.img} alt="keyboard" />
        </div>
        <div className="news_block_item_title">
          <h1>{obj.title}</h1>
        </div>
        <div className="news_block_item_desc">{obj.shortDesc}</div>
      </Link>
    );
  });
  return <div className="news_block">{article}</div>;
};

export default Newsitem;
