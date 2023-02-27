import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
import FilterMice from '../components/FilterMice';
import { setBrand, setWire } from '../redux/slices/filterSlice';
import NotFound from '../components/NotFound';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
const Mouses = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const { soldout, brand, wire } = useAppSelector((state) => state.filter);
  const { items, status } = useAppSelector((state) => state.fetchAll);
  const { param } = useParams();

  const onCLickFilter = () => {
    setOpen(!open);
  };
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'mouse',
          query: param,
        }),
      );
    }
    getALL();
    dispatch(setBrand(''));
    dispatch(setWire(''));
  }, [dispatch, param]);
  const miceFilter = items.filter((obj, id) => {
    return obj.category.includes('mouse');
  });

  const FilterSearch = miceFilter.filter((obj, id) => {
    return (
      (soldout !== 'close' ? obj.soldout.includes(soldout) : true) &&
      (brand ? obj.brand.includes(brand) : true) &&
      (wire ? obj?.wire?.includes(wire) : true)
    );
  });

  const product = FilterSearch.map((obj, id) => {
    return (
      <CSSTransition
        key={obj.title}
        timeout={500}
        classNames="item_animation"
        unmountOnExit
        exit={false}>
        <ProductCard card={obj} />
      </CSSTransition>
    );
  });
  if (status === 'loading') {
    return (
      <div className="item_container">
        <h1>Загрузка...</h1>
      </div>
    );
  }
  const sizeRender = sizeCalc(param);
  return (
    <div className="item_container">
      <h1>Мышки</h1>
      {!param && <FilterMice onCLickFilter={onCLickFilter} open={open} />}
      {sizeRender}
      <NotFound length={FilterSearch.length} />
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Mouses;
