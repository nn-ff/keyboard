import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAllProducts } from '../redux/slices/fetchAllSlice';
import ProductCard from '../components/ProductCard';
import { sizeCalc } from '../utils/utilsCalc';
import FilterAccessories from '../components/FilterAccessories';
import { setBrand } from '../redux/slices/filterSlice';
import NotFound from '../components/NotFound';

const Accessories = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { brand, soldout, accType } = useSelector((state) => state.filter);
  const { items, status } = useSelector((state) => state.fetchAll);
  const { size } = useParams();
  const onCLickFilter = () => {
    setOpen(!open);
  };
  useEffect(() => {
    async function getALL() {
      dispatch(
        fetchAllProducts({
          category: 'accessories',
          size: size,
          dest: size,
          brand: size,
          accType: size,
        }),
      );
    }
    getALL();
    dispatch(setBrand(false));
  }, [size]);

  const accFilter = items.filter((obj, id) => {
    return obj.category.includes('accessories');
  });

  const FilterSearch = accFilter.filter((obj, id) => {
    return (
      (brand ? obj.brand.includes(brand) : true) &&
      (soldout !== 'close' ? obj.soldout.includes(soldout) : true) &&
      (accType ? obj.accType.includes(accType) : true)
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
      <h1>Аксессуары</h1>
      {!size && <FilterAccessories onCLickFilter={onCLickFilter} open={open} />}
      {sizeRender}
      <NotFound length={FilterSearch.length} />
      <TransitionGroup className="product_cards_container_new">{product}</TransitionGroup>
    </div>
  );
};

export default Accessories;
