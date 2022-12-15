import React from 'react';

const Bottomitems = ({ id, title, handleMouseOver, categoryId }) => {
  return (
    <div onMouseOver={() => handleMouseOver(id)} className="item_botpanel">
      {title}
      <span className={id == categoryId ? 'active' : ''}>&gt;</span>
    </div>
  );
};

export default Bottomitems;
