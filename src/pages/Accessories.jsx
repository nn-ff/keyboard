import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';

const Accessories = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.fetchAll);
  const { size } = useParams();
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'accessories',
          size: size,
        }),
      );
    }
    getALL();
  }, [size]);

  const product = items.map((obj, id) => {
    if (obj.category.includes('accessories')) {
      return (
        <CSSTransition key={obj.title} timeout={500} classNames="item_animation" unmountOnExit>
          <ProductCard {...obj} />
        </CSSTransition>
      );
    } else {
      return null;
    }
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
      <h1>Аксессуары</h1>

      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Accessories;
