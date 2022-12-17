import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandAcc } from '../utils/filterList';
import FilterBrand from './filterUi/FilterBrand';
import FilterCategory from './filterUi/FilterCategory';
import FilterSoldout from './filterUi/FilterSoldout';

const FilterAccessories = ({ onCLickFilter, open }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={open ? 'item_filter_container' : 'item_filter_container active'}
      onClick={onCLickFilter}>
      <div className="filter_title">
        Фильтры <div className={open ? 'filter_animation' : 'filter_animation active'}>&gt;</div>
      </div>
      <div className="param_container" onClick={(e) => e.stopPropagation()}>
        <div>
          <div>Наличие</div>
          <FilterSoldout />
        </div>
        <div style={{ position: 'relative' }}>
          <div>Категории</div>
          <FilterCategory />
        </div>

        <div>
          <div>Бренд</div>
          <FilterBrand brandList={brandAcc} />
        </div>
      </div>
    </div>
  );
};

export default FilterAccessories;
