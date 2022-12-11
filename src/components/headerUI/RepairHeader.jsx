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
            src="https://www.overclockers.ua/peripheral/varmilo-ma108-panda/19-big-varmilo-ma108-panda.jpg"></img>
        </Link>
      </div>
      <div>
        <div>Ремонт клавиатуры</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
      </div>
      <div>Апгрейд клавиатуры</div>
      <div>Другое</div>
    </div>
  );
};

export default RepairHeader;
