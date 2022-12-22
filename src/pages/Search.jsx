import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import { fetchGlobal } from '../redux/slices/fetchGlobalSlice';
import { setSearch } from '../redux/slices/searchSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.search);
  const { items, status } = useSelector((state) => state.fetchGlobal);
  const inputRef = useRef();
  useEffect(() => {
    dispatch(fetchGlobal({ search: 'close' }));
  }, []);
  const onChangeInput = (e) => {
    dispatch(setSearch(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchGlobal({
        search: value,
      }),
    );
  };
  const onClickReset = () => {
    dispatch(setSearch(''));
    inputRef.current.focus();
  };

  const product = items.map((obj, id) => {
    return (
      <div key={obj.title}>
        <ProductCard {...obj} />
      </div>
    );
  });

  return (
    <div className="search_container">
      <div className="search_input_container">
        <div className="search_title">Поиск по товарам</div>
        <div className="input_container">
          {value.length >= 1 && (
            <svg
              onClick={onClickReset}
              className="input_reset_icon"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px">
              <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
            </svg>
          )}
          <button
            className={value.length < 1 ? 'search_button active' : 'search_button'}
            disabled={value.length >= 1 ? false : true}
            onClick={handleSubmit}>
            Искать
          </button>
          <form onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="Поиск..." value={value} onChange={onChangeInput} />
          </form>
        </div>
      </div>
      {status == 'loading' && <div style={{ textAlign: 'center' }}>Загрузка...</div>}
      {status == 'success' ? <div className="product_cards_container_new">{product}</div> : ''}
    </div>
  );
};

export default Search;
