import React from 'react';

const Allitems = () => {
  const boardall = ['varmilo', 'leopold', 'ducky', 'vortex', 'RGB-подсветка', 'Все клавиатуры'];
  const accesoriesall = ['Коврики', 'Клавиши', 'Кабели', 'Все аксессуары'];
  const miceall = ['Беспроводные мышки', 'Проводные мышки', 'Logitech', 'Все мышки'];
  const detalisall = ['Переключатели', 'Стабилизаторы'];
  const board = boardall.map((arr) => {
    return <div className="keyboards_items_item">{arr}</div>;
  });
  const accesories = accesoriesall.map((arr) => {
    return <div className="keyboards_accesories_item">{arr}</div>;
  });
  const mice = miceall.map((arr) => {
    return <div className="mice_items_item">{arr}</div>;
  });
  const detail = detalisall.map((arr) => {
    return <div className="details_items_item">{arr}</div>;
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
        <div className="allitems_text">Отремонтируем, почистим, прокачаем</div>
      </div>
      <div className="div4">
        <div className="allitems_title">Иснтрументы и детали</div>
        <div className="details_items">{detail}</div>
      </div>
      <div className="div5">
        <div className="allitems_title">Барахолка</div>
        <div className="allitems_text">Проверенные товары со скидкой</div>
      </div>
      <div className="div6">
        <div className="allitems_title">Мышки</div>
        <div className="mice_items">{mice}</div>
      </div>
    </div>
  );
};

export default Allitems;
