import React from 'react';
import { soldoutFilter } from '../../utils/filterList';
import { setSoldout } from '../../redux/slices/filterSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';

const FilterSoldout = () => {
  const dispatch = useAppDispatch();
  const { soldout } = useAppSelector((state) => state.filter);
  return (
    <>
      {soldoutFilter.map((obj, id) => {
        return (
          <div className="container_select" key={obj.title}>
            <div
              onClick={() => dispatch(setSoldout(obj.soldout))}
              key={obj.title}
              className={soldout === obj.soldout ? 'filter_button active' : 'filter_button'}>
              {obj.title}
            </div>
            {soldout === obj.soldout && soldout !== '' && (
              <svg
                onClick={() => dispatch(setSoldout(''))}
                className="reset_icon"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="25px"
                height="25px">
                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
              </svg>
            )}
          </div>
        );
      })}
    </>
  );
};

export default FilterSoldout;
