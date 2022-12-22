import React from 'react';
import { Link } from 'react-router-dom';

const RepairHeader = ({ isHovering, onClickLink }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <Link className="imglinks_header" to="/repair" onClick={onClickLink}>
          <div className="linktext">
            <p>Все услуги</p>
            <span>&gt;</span>
          </div>
          <img
            className="img_header"
            src="https://www.overclockers.ua/peripheral/varmilo-ma108-panda/19-big-varmilo-ma108-panda.jpg"
            alt="img"></img>
        </Link>
      </div>
      <div>
        Ремонт клавиатуры
        <Link to="/repair" className="header_links">
          Разбор корпуса
        </Link>
        <Link to="/repair" className="header_links">
          Чистка клавиатуры
        </Link>
      </div>
      <div>
        Апгрейд клавиатуры
        <Link to="/repair" className="header_links">
          Смазка переключателей
        </Link>
        <Link to="/repair" className="header_links">
          Установка шумоизоляции
        </Link>
      </div>
      <div>
        Ремонт мышек
        <Link to="/repair" className="header_links">
          Замена микрика
        </Link>
        <Link to="/repair" className="header_links">
          Замена энкодера колеса
        </Link>
      </div>
    </div>
  );
};

export default RepairHeader;
