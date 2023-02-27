import React, { FC } from 'react';
import cl from './CartUi.module.scss';
import { decrementCount, incrementCount, removeItem } from '../../redux/slices/cartSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const ItemsCart: FC = () => {
  const dispatch = useAppDispatch();
  const { cartItem } = useAppSelector((state) => state.cart);
  const getTotal = () => {
    let totalCount = 0;
    let totalPrice = 0;
    cartItem.forEach((item) => {
      totalCount += item.count;
      totalPrice += +item.price * item.count;
    });
    return { totalPrice, totalCount };
  };
  const items = cartItem.map((obj, id) => {
    return (
      <div className={cl.cart_item_container} key={id}>
        <svg
          onClick={() => dispatch(removeItem(id))}
          className={cl.removeitem_icon}
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px">
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
        <div className={cl.cartItem_img}>
          <img src={obj.img} alt="img" />
        </div>
        <div>
          <div className={cl.cartItem_title}>
            {obj.title} {obj.switch === '' ? '' : `(${obj.switch})`}
          </div>
          <div className={cl.cartItem_price_count}>
            <div className={cl.cartItem_count}>
              <span onClick={() => dispatch(decrementCount(id))}>-</span>
              <div>{obj.count}</div>
              <span onClick={() => dispatch(incrementCount(id))}>+</span>
            </div>
            <div className={cl.cartItem_price}>{obj.price} P</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className={cl.itemsCart_available}>Ваши покупки ({getTotal().totalCount || 0})</div>
      <div className={cl.itemsCart_container}>{items}</div>
      <div className={cl.itemsCart_totalprice_container}>
        <div>Итог</div>
        <div>{getTotal().totalPrice} P</div>
      </div>
      <div className={cl.itemsCart_order_button}>Продолжить оформление</div>
    </div>
  );
};

export default ItemsCart;
