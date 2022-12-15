import React from 'react';
import { Link } from 'react-router-dom';
const AccessoriesHeader = ({ isHovering, onClickLink }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <Link className="imglinks_header" to="/products/accessories" onClick={onClickLink}>
          <div className="linktext">
            <p>Все аксессуары</p>
            <span>&gt;</span>
          </div>
          <img
            className="img_header"
            src="https://fantechworld.com/wp-content/uploads/2022/06/maxfit61-1536x1024.jpg"></img>
        </Link>
      </div>
      <div>
        <div>Назначение</div>
        <Link className="header_links" to={`/products/accessories/forBoards`}>
          Для клавиатуры
        </Link>
        <Link className="header_links" to={`/products/accessories/forMice`}>
          Для мышки
        </Link>
      </div>
      <div>
        Категории
        <Link className="header_links" to={`/products/accessories/mousepad`}>
          Коврики
        </Link>
        <Link className="header_links" to={`/products/accessories/cables`}>
          Кабели
        </Link>
        <Link className="header_links" to={`/products/accessories/keycaps`}>
          Клавиши
        </Link>
        <Link className="header_links" to={`/products/accessories/holders`}>
          Подставки
        </Link>
      </div>
      <div>
        Бренды
        <Link className="header_links" to={`/products/accessories/varmilo`}>
          Varmilo
        </Link>
        <Link className="header_links" to={`/products/accessories/ducky`}>
          Ducky
        </Link>
        <Link className="header_links" to={`/products/accessories/xtrfy`}>
          Xtrfy
        </Link>
      </div>
    </div>
  );
};

export default AccessoriesHeader;
