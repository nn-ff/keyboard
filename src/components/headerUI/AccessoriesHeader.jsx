import React from 'react';

const AccessoriesHeader = ({ isHovering }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <img src="https://fantechworld.com/wp-content/uploads/2022/06/maxfit61-1536x1024.jpg"></img>
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
