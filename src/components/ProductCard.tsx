import React, { FC, useState } from 'react';
import ProgressiveImage from 'react-progressive-graceful-image';
import { Link } from 'react-router-dom';
import { IItems } from '../types/Type';
import SwitchesPanel from './SwitchesPanel';

interface ProductCardProps {
  card: IItems;
}

const ProductCard: FC<ProductCardProps> = ({ card }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const bulletArr = ['', '', ''];
  const placeholder = <div className="loader_image"></div>;
  return (
    <Link to={`/products/${card.id}`} className="product_card" key={card.title}>
      {card.soldout === 'true' ? (
        <div className="stock_button active">Нет в наличии</div>
      ) : (
        <div className="stock_button">В наличии</div>
      )}
      {card.wire === 'wireless' ? (
        <img
          className="product-card__bluetooth"
          src="https://static.insales-cdn.com/assets/1/2180/3156100/1675447228/bluetooth.png"
          alt="img"></img>
      ) : (
        ''
      )}
      <div className="product_info_image_container">
        <div className="product_info_image_slider">
          <div style={{ zIndex: 2000 }}></div>
          <div
            style={{ zIndex: 2000 }}
            onMouseOver={() => setCurrentImage(1)}
            onMouseOut={() => setCurrentImage(0)}></div>
          <div
            style={{ zIndex: 2000 }}
            onMouseOver={() => setCurrentImage(2)}
            onMouseOut={() => setCurrentImage(0)}></div>
        </div>

        <img
          style={{ width: '100%', opacity: 0 }}
          src="https://i.imgur.com/CmX7PG4.jpg"
          alt="img"
        />

        {card.imageUrl.map((arr, id) => {
          return (
            <ProgressiveImage key={id} src={arr} placeholder="">
              {(src, loading) => {
                return loading ? (
                  placeholder
                ) : (
                  <img
                    className={currentImage === id ? 'product_img active' : 'product_img'}
                    src={src}
                    alt="product"
                  />
                );
              }}
            </ProgressiveImage>
          );
        })}
      </div>
      <div style={{ display: 'flex', marginLeft: 30 }}>
        {bulletArr.map((arr, id) => {
          return (
            <div
              key={id}
              className={
                currentImage === id
                  ? 'product_img_bullet_pagination active'
                  : 'product_img_bullet_pagination'
              }></div>
          );
        })}
      </div>

      <div className="product_title">{card.title}</div>
      {card.switches !== undefined ? <SwitchesPanel switches={card.switches} /> : ''}
      <div className="product_price">{card.price}р.</div>
    </Link>
  );
};

export default ProductCard;
