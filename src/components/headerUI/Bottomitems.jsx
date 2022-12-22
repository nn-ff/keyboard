import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
const Bottomitems = ({ id, title, handleMouseOver, categoryId, link }) => {
  const disableHovering = useMediaQuery({ query: '(max-width: 890px)' });
  return (
    <div
      onMouseOver={!disableHovering ? () => handleMouseOver(id) : null}
      className="item_botpanel">
      <Link style={{ fontSize: 17, color: 'black' }} to={link}>
        {title}
      </Link>
      <span className={id == categoryId ? 'active' : ''}>&gt;</span>
    </div>
  );
};

export default Bottomitems;
