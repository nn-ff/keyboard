import React, { FC, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useParams } from 'react-router-dom';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
import FilterKeyboards from '../components/FilterKeyboards';
import { setBrand } from '../redux/slices/filterSlice';
import NotFound from '../components/NotFound';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Keyboards: FC = () => {
  const dispatch = useAppDispatch();
  const { brand, size, soldout } = useAppSelector((state) => state.filter);
  const switches = useAppSelector((state) => state.filter.switches);
  const { items, status } = useAppSelector((state) => state.fetchAll);
  const { param } = useParams();
  const [open, setOpen] = useState<boolean>(true);
  const onCLickFilter = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'keyboard',
          query: param,
        }),
      );
    }
    getALL();
    dispatch(setBrand(''));
  }, [dispatch, param]);
  const boardsFilter = items.filter((obj) => {
    return obj.category.includes('keyboard');
  });

  const filterSearch = boardsFilter.filter((obj, id) => {
    if (obj.switches) {
      const map = obj.switches.map((obj) => {
        return switches.id === +obj.id ? true : false;
      });
      return (
        (brand ? obj.brand.includes(brand) : true) &&
        (size ? obj?.size?.includes(size) : true) &&
        (soldout !== 'close' ? obj.soldout.includes(soldout) : true) &&
        (switches.id !== 55 ? map.includes(true) : true)
      );
    }
    return null;
  });

  const product = filterSearch.map((obj, id) => {
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
      <h1>Клавиатуры</h1>
      <FilterKeyboards onCLickFilter={onCLickFilter} open={open} />
      {sizeRender}
      <NotFound length={filterSearch.length} />
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Keyboards;
