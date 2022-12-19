import React from 'react';
import logo from '../../assets/logoB.png';
import Bottomitems from './Bottomitems';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibleCart } from '../../redux/slices/modalSlice';
const Bottompanels = ({ handleMouseOver, categoryId, onClickLink }) => {
  const dispatch = useDispatch();
  const onClickCart = () => {
    dispatch(setVisibleCart(true));
  };
  const botItemsList = [
    {
      title: 'Клавиатуры',
      id: '0',
    },
    {
      title: 'Мыши',
      id: '1',
    },
    {
      title: 'Аксессуары',
      id: '2',
    },
    {
      title: 'Ремонт и апгрейд',
      id: '3',
    },
  ];

  const botItems = botItemsList.map((obj) => {
    return (
      <Bottomitems
        categoryId={categoryId}
        handleMouseOver={handleMouseOver}
        key={obj.id}
        {...obj}
      />
    );
  });
  return (
    <div className="header_box_bottom">
      <div className="header_bottom">
        <div className="header_bottom_left">
          <Link to="/" style={{ width: 174 }}>
            <img src={logo} />
          </Link>

          {botItems}
        </div>
        <div className="header_bottom_right">
          <Link onClick={onClickLink} to="/search">
            <svg
              className="header_search_svg"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="30px"
              height="30px">
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
            </svg>
          </Link>

          <div onClick={onClickCart} className="header_bottom_cart">
            <svg
              fill="none"
              height="27"
              viewBox="0 0 30 27"
              width="30"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.39999 1.70001H6.60001"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M6.60001 1.70001L11 18.9"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M11.8 18.9H28.3"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
              <path
                d="M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z"
                stroke="#4F4F4F"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
              />
            </svg>
            <div>Корзина</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottompanels;
