import React from 'react';
import { Link } from 'react-router-dom';

const Allitems = () => {
  const boardall = ['varmilo', 'leopold', 'ducky', 'vortex', 'RGB-подсветка', 'Все клавиатуры'];

  const accesoriesall = [
    { title: 'Коврики', param: 'mousepad' },
    { title: 'Клавиши', param: 'keycaps' },
    { title: 'Кабели', param: 'cables' },
    { title: 'Подставки', param: 'holders' },
    { title: 'Все аксессуары', param: 'Все аксессуары' },
  ];
  const miceall = [
    { title: 'Беспроводные мышки', param: 'wireless' },
    { title: 'Проводные мышки', param: 'wired' },
    { title: 'Logitech', param: 'logitech' },
    { title: 'Xtrfy', param: 'xtrfy' },
    { title: 'Все мышки', param: 'Все мышки' },
  ];

  const board = boardall.map((arr) => {
    return (
      <div className="keyboards_items_item" key={arr}>
        <Link style={{ fontSize: 20 }} to={`/products/keyboards/${arr}`}>
          {arr}
        </Link>
      </div>
    );
  });
  const accesories = accesoriesall.map((obj) => {
    return (
      <div className="keyboards_accesories_item" key={obj.title}>
        <Link style={{ fontSize: 20 }} to={`/products/accessories/${obj.param}`}>
          {obj.title}
        </Link>
      </div>
    );
  });
  const mice = miceall.map((obj) => {
    return (
      <div className="mice_items_item" key={obj.title}>
        <Link style={{ fontSize: 20 }} to={`/products/mice/${obj.param}`}>
          {obj.title}
        </Link>
      </div>
    );
  });

  return (
    <div className="allitems_container">
      <div className="div1">
        <div className="allitems_title">Клавиатуры</div>
        <div className="keyboards_items">{board}</div>
      </div>
      <div className="div2">
        <div className="allitems_title">Аксессуары</div>
        <div className="keyboards_accesories">{accesories}</div>
      </div>
      <div className="div3">
        <div className="allitems_title">Ремонт и апгрейд</div>
        <div className="allitems_text">
          <Link style={{ fontSize: 20 }} to="/repair">
            Отремонтируем, почистим, прокачаем
          </Link>
        </div>
      </div>

      <div className="div5">
        <div className="allitems_title">Барахолка</div>
        <div className="allitems_text">
          <Link style={{ fontSize: 20 }} to="/discount">
            Проверенные товары со скидкой
          </Link>
        </div>
      </div>
      <div className="div6">
        <div className="allitems_title">Мышки</div>
        <div className="mice_items">{mice}</div>
      </div>
    </div>
  );
};

export default Allitems;
