import React, { useEffect } from 'react';
import { fetchProductsNews } from '../redux/slices/itemsSlice';
import { setNewsPopular } from '../redux/slices/newsAndPopular';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductCard from './ProductCard';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { IItems } from '../types/Type';

const NewAndPopular = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.products);
  const { news, popular } = useAppSelector((state) => state.newAndPopular);

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
  }, [dispatch, news, popular]);
  const product = items.map((obj: IItems, id: number) => {
    return (
      <CSSTransition key={obj.title} timeout={500} classNames="item_animation" unmountOnExit>
        <ProductCard card={obj} />
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
