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
        <div>
          <div>Покупателям</div>
          <Link to="/delivery">
            <p>Доставка и оплата</p>
          </Link>
        </div>

        <div>
          <div>Полезное</div>
          <p>
            <Link to="/article">Статьи</Link>
          </p>
        </div>
        <div>
          <div>Поддержка</div>
          <p>+7 (777) 777 77 77</p>
          <p>mail@gmail.com</p>
        </div>
        <div>
          <div>Соцсети</div>
          <p>
            <a href="https://web.telegram.org/">Telegram</a>
          </p>
          <p>
            <a href="https://vk.com/">ВКонтакте</a>
          </p>
          <p>
            <a href="https://www.instagram.com/">Instagram</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
