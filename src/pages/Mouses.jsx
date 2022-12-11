import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';
const Mouses = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.fetchAll);

  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'mouse',
        }),
      );
    }
    getALL();
  }, []);

  const product = items.map((obj, id) => {
    return (
      <CSSTransition key={obj.title} timeout={500} classNames="item_animation" unmountOnExit>
        <ProductCard {...obj} />
      </CSSTransition>
    );
  });
  if (status == 'loading') {
    return (
      <div className="item_container">
        <h1>Загрузка...</h1>
      </div>
    );
  }
  return (
    <div className="item_container">
      <h1>Мышки</h1>
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Mouses;
