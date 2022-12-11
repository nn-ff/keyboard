import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/sizeCalc';
const Keyboards = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.fetchAll);
  const { size } = useParams();
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'keyboard',
          size: size,
        }),
      );
    }
    getALL();
  }, [size]);

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
  const sizeRender = sizeCalc(size);
  return (
    <div className="item_container">
      <h1>Клавиатуры</h1>
      {sizeRender}
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Keyboards;
