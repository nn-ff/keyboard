import React, { useState } from 'react';
import Toppanels from './headerUI/Toppanels';
import Bottompanels from './headerUI/Bottompanels';
import KeyboardHeader from './headerUI/KeyboardHeader';
import MouseHeader from './headerUI/MouseHeader';
import AccessoriesHeader from './headerUI/AccessoriesHeader';
import RepairHeader from './headerUI/RepairHeader';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [categoryId, setCategoryId] = useState('close');

  const handleMouseOver = (id) => {
    setIsHovering(true);
    setCategoryId(id);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
    setCategoryId('close');
  };

  const onClickLink = () => {
    setIsHovering(false);
    setCategoryId('close');
  };

  const hoverclass = isHovering ? 'header_hover_block active' : 'header_hover_block';
  const disableHovering = useMediaQuery({ query: '(max-width: 890px)' });
  return (
    <div>
      <Toppanels handleMouseOut={handleMouseOut} />
      <Bottompanels
        onClickLink={onClickLink}
        categoryId={categoryId}
        handleMouseOver={handleMouseOver}
      />

      <div className={disableHovering ? 'header_hover_block' : hoverclass} onClick={onClickLink}>
        <div className={categoryId == 0 ? 'header_item active' : 'header_item'}>
          <KeyboardHeader onClickLink={onClickLink} isHovering={isHovering} />
        </div>

        <div className={categoryId == 1 ? 'header_item active' : 'header_item'}>
          <MouseHeader onClickLink={onClickLink} isHovering={isHovering} />
        </div>
        <div className={categoryId == 2 ? 'header_item active' : 'header_item'}>
          <AccessoriesHeader isHovering={isHovering} onClickLink={onClickLink} />
        </div>
        <div className={categoryId == 3 ? 'header_item active' : 'header_item'}>
          <RepairHeader isHovering={isHovering} onClickLink={onClickLink} />
        </div>
      </div>
      {isHovering && (
        <div className="out_block" onMouseOver={handleMouseOut} onMouseOut={handleMouseOut}></div>
      )}
    </div>
  );
};

export default Header;
