import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { brandMice } from '../utils/filterList';
import FilterBrand from './filterUi/FilterBrand';
import FilterSoldout from './filterUi/FilterSoldout';
import FilterWire from './filterUi/FilterWire';
const FilterMice = ({ onCLickFilter, open }) => {
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
          <div>Особенности</div>
          <FilterWire />
        </div>

        <div>
          <div>Бренд</div>
          <FilterBrand brandList={brandMice} />
        </div>
      </div>
    </div>
  );
};

export default FilterMice;
