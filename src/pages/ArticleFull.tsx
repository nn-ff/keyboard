import React from 'react';
import { useParams } from 'react-router-dom';
import { articleList } from '../utils/ArticleList';
const ArticleFull = () => {
  const { param } = useParams();
  const item = articleList.find((obj) => param === String(obj.id));

  return (
    <div style={{ paddingTop: 20 }} className="item_container">
      <div style={{ marginLeft: 25, marginRight: 25 }} className="article_item_container ">
        <div className="article_item_title">{item?.title}</div>
        <div style={{ textAlign: 'center' }} className="article_item_desc">
          {item?.shortDesc}
        </div>
      </div>
    </div>
  );
};

export default ArticleFull;
