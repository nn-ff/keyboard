import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface KeyboardHeaderProps {
  isHovering: boolean;
  onClickLink: () => void;
}

const KeyboardHeader: FC<KeyboardHeaderProps> = ({ isHovering, onClickLink }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <Link className="imglinks_header" to="/products/keyboards" onClick={onClickLink}>
          <div className="linktext">
            <p>Все клавиатуры</p>
            <span>&gt;</span>
          </div>
          <img
            className="img_header"
            src="https://o.aolcdn.com/images/dimse/5845cadfecd996e0372f/bb0950e6c324eae0dcc61b4d2c6c94ee251ef3ac/Y3JvcD0xNjAwJTJDMTA2NyUyQzAlMkMwJnF1YWxpdHk9ODUmZm9ybWF0PWpwZyZyZXNpemU9MTYwMCUyQzEwNjcmaW1hZ2VfdXJpPWh0dHBzJTNBJTJGJTJGcy55aW1nLmNvbSUyRm9zJTJGY3JlYXRyLXVwbG9hZGVkLWltYWdlcyUyRjIwMTktMDklMkY1YmYwODU0MC1kMDE5LTExZTktOWIzZC1lOGY4M2I0YTFlYmEmY2xpZW50PWExYWNhYzNlMWIzMjkwOTE3ZDkyJnNpZ25hdHVyZT05OTkyOGI0YzQzM2YwZGMxN2RlMDE2Y2EyOTE1NGUwYjVlNzM3MDA3"
            alt="img"></img>
        </Link>
      </div>
      <div>
        <div>Особенности</div>
        <Link className="header_links" to={`/products/keyboards/wireless`}>
          Беспроводные
        </Link>
        <Link className="header_links" to={`/products/keyboards/RGB`}>
          RGB-подсветка
        </Link>
      </div>
      <div>
        Бренды
        <Link className="header_links" to={`/products/keyboards/varmilo`}>
          Varmilo
        </Link>
        <Link className="header_links" to={`/products/keyboards/leopold`}>
          Leopold
        </Link>
        <Link className="header_links" to={`/products/keyboards/ducky`}>
          Ducky
        </Link>
        <Link className="header_links" to={`/products/keyboards/vortex`}>
          Vortex
        </Link>
      </div>
      <div>
        Размер
        <Link className="header_links" to={`/products/keyboards/100`}>
          90%-100% / полноразмерные
        </Link>
        <Link className="header_links" to={`/products/keyboards/80`}>
          75%-80% / без нампада
        </Link>
        <Link className="header_links" to={`/products/keyboards/60`}>
          60%-65% / без F-ряда
        </Link>
      </div>
    </div>
  );
};

export default KeyboardHeader;
