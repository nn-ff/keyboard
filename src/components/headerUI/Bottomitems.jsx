import React from 'react';

const Bottomitems = ({ id, title, handleMouseOver }) => {
  return (
    <div onMouseOver={() => handleMouseOver(id)} className="item_botpanel">
      {title}
    </div>
  );
};

export default Bottomitems;
