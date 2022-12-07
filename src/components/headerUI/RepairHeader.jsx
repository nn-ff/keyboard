import React from 'react';

const RepairHeader = ({ isHovering }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <img src="https://www.overclockers.ua/peripheral/varmilo-ma108-panda/19-big-varmilo-ma108-panda.jpg"></img>
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
