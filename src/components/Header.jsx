import React, { useEffect, useState } from 'react';
import Toppanels from './headerUI/Toppanels';
import Bottompanels from './headerUI/Bottompanels';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import KeyboardHeader from './headerUI/KeyboardHeader';
import MouseHeader from './headerUI/MouseHeader';
import AccessoriesHeader from './headerUI/AccessoriesHeader';
import RepairHeader from './headerUI/RepairHeader';
const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const handleMouseOver = (id) => {
    setIsHovering(true);
    setCategoryId(id);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const hoverclass = isHovering ? 'header_hover_block active' : 'header_hover_block';

  return (
    <div>
      <Toppanels />
      <Bottompanels handleMouseOver={handleMouseOver} />

      <div className={hoverclass}>
        <div className={categoryId == 0 ? 'header_item active' : 'header_item'}>
          <KeyboardHeader isHovering={isHovering} />
        </div>

        <div className={categoryId == 1 ? 'header_item active' : 'header_item'}>
          <MouseHeader isHovering={isHovering} />
        </div>
        <div className={categoryId == 2 ? 'header_item active' : 'header_item'}>
          <AccessoriesHeader isHovering={isHovering} />
        </div>
        <div className={categoryId == 3 ? 'header_item active' : 'header_item'}>
          <RepairHeader isHovering={isHovering} />
        </div>
      </div>
      {isHovering && <div className="out_block" onMouseOut={handleMouseOut}></div>}
    </div>
  );
};

export default Header;
