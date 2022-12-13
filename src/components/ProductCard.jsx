import React from 'react';
import { Link } from 'react-router-dom';
import SwitchesPanel from './SwitchesPanel';

const ProductCard = ({ title, imageUrl, price, id, switches }) => {
  return (
    <Link to={`/products/${id}`} className="product_card" key={title}>
      <div className="stock_button">В наличии</div>
      <img className="product_img" src={imageUrl[0]} />
      <div className="product_title">{title}</div>
      <SwitchesPanel switches={switches} />
      <div className="product_price">{price}р.</div>
    </Link>
  );
};

export default ProductCard;
