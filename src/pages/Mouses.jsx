import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
import FilterMice from '../components/FilterMice';
import { setBrand, setWire } from '../redux/slices/filterSlice';
import NotFound from '../components/NotFound';
const Mouses = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { soldout, brand, wire } = useSelector((state) => state.filter);
  const onCLickFilter = () => {
    setOpen(!open);
  };
  const { items, status } = useSelector((state) => state.fetchAll);
  const { size } = useParams();
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
    dispatch(setBrand(false));
    dispatch(setWire(false));
  }, [size]);
  const miceFilter = items.filter((obj, id) => {
    return obj.category.includes('mouse');
  });

  const FilterSearch = miceFilter.filter((obj, id) => {
    return (
      (soldout !== 'close' ? obj.soldout.includes(soldout) : true) &&
      (brand ? obj.brand.includes(brand) : true) &&
      (wire ? obj.wire.includes(wire) : true)
    );
  });
  console.log(FilterSearch);
  const product = FilterSearch.map((obj, id) => {
    return (
      <CSSTransition
        key={obj.title}
        timeout={500}
        classNames="item_animation"
        unmountOnExit
        exit={false}>
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
      <h1>Мышки</h1>
      {!size && <FilterMice onCLickFilter={onCLickFilter} open={open} />}
      {sizeRender}
      <NotFound length={FilterSearch.length} />
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Mouses;
