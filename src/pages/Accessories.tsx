import React, { FC, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useParams } from 'react-router-dom';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
import FilterAccessories from '../components/FilterAccessories';
import { setBrand } from '../redux/slices/filterSlice';
import NotFound from '../components/NotFound';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';

const Accessories: FC = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState<boolean>(true);
  const { brand, soldout, accType } = useAppSelector((state) => state.filter);
  const { items, status } = useAppSelector((state) => state.fetchAll);
  const { query } = useParams();
  const onCLickFilter = () => {
    setOpen(!open);
  };
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'accessories',
          query: query,
        }),
      );
    }
    getALL();
    dispatch(setBrand(''));
  }, [dispatch, query]);

  const accFilter = items.filter((obj, id) => obj.category.includes('accessories'));

  const FilterSearch = accFilter.filter((obj, id) => {
    return (
      (brand ? obj.brand.includes(brand) : true) &&
      (soldout !== 'close' ? obj.soldout.includes(soldout) : true) &&
      (accType ? obj?.accType?.includes(accType) : true)
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
  const sizeRender = sizeCalc(query);
  return (
    <div className="item_container">
      <h1>Аксессуары</h1>
      {!query && <FilterAccessories onCLickFilter={onCLickFilter} open={open} />}
      {sizeRender}
      <NotFound length={FilterSearch.length} />
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Accessories;
