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
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
      </div>
      <div>Категории</div>
      <div>Бренды</div>
    </div>
  );
};

export default AccessoriesHeader;
