import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccType } from '../../redux/slices/filterSlice';
import { accCategory } from '../../utils/filterList';

const FilterCategory = () => {
  const dispatch = useDispatch();
  const { accType } = useSelector((state) => state.filter);

  return (
    <>
      {accCategory.map((obj, id) => {
        return (
          <div className="container_select" key={obj.title}>
            <div
              onClick={() => dispatch(setAccType(obj.accType))}
              key={obj.title}
              className={accType == obj.accType ? 'filter_button active' : 'filter_button'}>
              {obj.title}
            </div>
            {accType == obj.accType && (
              <svg
                onClick={() => dispatch(setAccType(false))}
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

export default FilterCategory;
