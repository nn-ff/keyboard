import React from 'react';
import { Link } from 'react-router-dom';

const MouseHeader = ({ isHovering, onClickLink }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <Link className="imglinks_header" to="/products/mice" onClick={onClickLink}>
          <div className="linktext">
            <p>Все мышки</p>
            <span>&gt;</span>
          </div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/v3zD2tzfDClH5AuLY7AKnF9srHU=/0x0:1600x1152/920x613/filters:focal(672x448:928x704):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67292573/G305.0.jpg"
            alt="img"></img>
        </Link>
      </div>
      <div>
        <div>Особенности</div>
        <Link className="header_links" to={`/products/mice/wireless`}>
          Беспроводные
        </Link>
        <Link className="header_links" to={`/products/mice/wired`}>
          Проводные
        </Link>
      </div>
      <div>
        Бренды
        <Link className="header_links" to={`/products/mice/logitech`}>
          logitech
        </Link>
        <Link className="header_links" to={`/products/mice/xtrfy`}>
          Xtrfy
        </Link>
      </div>
    </div>
  );
};

export default MouseHeader;
