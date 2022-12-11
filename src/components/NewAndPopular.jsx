import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsNews } from '../redux/slices/itemsSlice';
import { setNewsPopular } from '../redux/slices/newsAndPopular';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SwitchesPanel from './SwitchesPanel';
import ProductCard from './ProductCard';

const NewAndPopular = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const { news, popular } = useSelector((state) => state.newAndPopular);

  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchProductsNews({
          popular: popular,
          news: news,
        }),
      );
    }
    getALL();
  }, [news]);
  const product = items.map((obj, id) => {
    return (
      <CSSTransition key={obj.title} timeout={500} classNames="item_animation" unmountOnExit>
        <ProductCard {...obj} />
      </CSSTransition>
    );
  });

  const onClickPopular = () => {
    dispatch(setNewsPopular());
  };
  return (
    <div className="container_new_popular">
      <div className="margin_block">.</div>
      <div className="buttons_new_popular">
        <div onClick={onClickPopular} className={news ? 'active' : ''}>
          Новинки<sub></sub>
        </div>
        <div onClick={onClickPopular} className={popular ? 'active' : ''}>
          Популярные
        </div>
      </div>

      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default NewAndPopular;
