import React, { useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
const Mouses = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.fetchAll);
  const { size } = useParams();
  console.log(size);
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'mouse',
          size: size,
          wire: size,
          brand: size,
        }),
      );
    }
    getALL();
  }, [size]);

  const product = items.map((obj, id) => {
    if (obj.category.includes('mouse')) {
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
  const sizeRender = sizeCalc(size);
  return (
    <div className="item_container">
      <h1>Мышки</h1>
      {sizeRender}
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Mouses;
