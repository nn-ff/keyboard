import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setSize } from '../../redux/slices/filterSlice';
import { sizeKeyboards } from '../../utils/filterList';

const FilterSize: FC = () => {
  const dispatch = useAppDispatch();
  const { size } = useAppSelector((state) => state.filter);
  return (
    <>
      {sizeKeyboards.map((obj, id) => {
        return (
          <div className="container_select" key={obj.title}>
            <div
              onClick={() => dispatch(setSize(obj.title))}
              key={obj.title}
              className={size === obj.title ? 'filter_button active' : 'filter_button'}>
              {obj.title} %
            </div>
            {size === obj.title && (
              <svg
                onClick={() => dispatch(setSize(''))}
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

export default FilterSize;
