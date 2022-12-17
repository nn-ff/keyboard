import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSwitchId, setSwitchSoldout } from '../redux/slices/filterSlice';
import { brandKeyboards } from '../utils/filterList';
import FilterBrand from './filterUi/FilterBrand';
import FilterSize from './filterUi/FilterSize';
import FilterSoldout from './filterUi/FilterSoldout';
import FilterSwitch from './filterUi/FilterSwitch';

const FilterKeyboards = ({ onCLickFilter, open }) => {
  const dispatch = useDispatch();
  const { id, soldout } = useSelector((state) => state.filter.switches);
  const onCLickSwitchReset = () => {
    dispatch(setSwitchId('close'));
    dispatch(setSwitchSoldout('close'));
  };

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
          <div>Переключатели</div>
          {id !== 'close' && (
            <svg
              onClick={onCLickSwitchReset}
              className="reset_icon_switch"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="25px"
              height="25px">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
            </svg>
          )}
          <div style={{ flexWrap: 'wrap', width: 200 }} className="switch_inner">
            <FilterSwitch />
          </div>
        </div>

        <div>
          <div>Бренд</div>
          <FilterBrand brandList={brandKeyboards} />
        </div>
        <div>
          <div>Размер</div>
          <FilterSize />
        </div>
      </div>
    </div>
  );
};

export default FilterKeyboards;
