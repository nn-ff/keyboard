import React from 'react';

const ProductCard = ({ title, imageUrl, price }) => {
  return (
    <div className="product_card" key={title}>
      <div className="stock_button">В наличии</div>
      <img className="product_img" src={imageUrl[0]} />
      <div className="product_title">{title}</div>

      <div className="product_price">{price}р.</div>
    </div>
  );
};

export default ProductCard;
