import React from 'react';

const RepairHeader = ({ isHovering }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <img src="https://www.wikihow.com/images/thumb/4/4a/Reattach-a-Keyboard-Key-Step-1.jpg/v4-460px-Reattach-a-Keyboard-Key-Step-1.jpg"></img>
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
