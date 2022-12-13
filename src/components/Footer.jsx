import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const rangeItems = [
    { title: 'Клавиатуры', param: 'products/keyboards' },
    { title: 'Аксессуары', param: 'products/accessories' },
    { title: 'Мышки', param: 'products/mice' },
  ];
  const range = rangeItems.map((obj) => {
    return (
      <p key={obj.title}>
        <Link to={`/${obj.param}`}>{obj.title}</Link>
      </p>
    );
  });
  return (
    <div className="footer_container">
      <div className="footer_grid_container">
        <div>
          <div>Магазин</div>
          {range}
        </div>
        <div>Покупателям</div>
        <div>
          <div>Полезное</div>
          <p>Статьи</p>
        </div>
        <div>
          <div>Поддержка</div>
          <p>+7 (777) 777 77 77</p>
          <p>mail@gmail.com</p>
        </div>
        <div>
          <div>Соцсети</div>
          <p>Telegram</p>
          <p>ВКонтакте</p>
          <p>Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
