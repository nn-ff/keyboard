import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

interface BottomitemsProps {
  id: number;
  title: string;
  handleMouseOver: (id: number) => void;
  categoryId: number;
  link: string;
}

const Bottomitems: FC<BottomitemsProps> = ({ id, title, handleMouseOver, categoryId, link }) => {
  const disableHovering = useMediaQuery({ query: '(max-width: 890px)' });
  return (
    <div
      onMouseOver={!disableHovering ? () => handleMouseOver(id) : undefined}
      className="item_botpanel">
      <Link style={{ fontSize: 17, color: 'black' }} to={link}>
        {title}
      </Link>
      <span className={id === categoryId ? 'active' : ''}>&gt;</span>
    </div>
  );
};

export default Bottomitems;
