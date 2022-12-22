import React from 'react';
import { Link } from 'react-router-dom';
const Toppanels = ({ handleMouseOut }) => {
  const items_left = [
    { id: 0, title: 'Доставка и оплата', link: '/delivery' },
    { id: 1, title: 'Статьи', link: '/article' },
    { id: 2, title: 'Вакансии', link: '/vacancy' },
    { id: 3, title: 'Trade-in', link: '/trade-in' },
  ];
  const left_panel = items_left.map((obj) => {
    return (
      <div key={obj.id} className="item_leftpanel">
        <Link style={{ all: 'inherit' }} to={obj.link}>
          {obj.title}
        </Link>
      </div>
    );
  });

  return (
    <div className="header_box_top">
      <div className="header_main" onMouseOver={handleMouseOut}>
        <div className="header_left_items">{left_panel}</div>
        <div className="header_right_items">
          <a href="https://web.telegram.org/z/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M13.53,19.05l-.39,5.35a1.35,1.35,0,0,0,1.07-.51l2.55-2.44,5.29,3.87c1,.54,1.65.26,1.91-.89L27.43,8.16h0c.31-1.43-.51-2-1.46-1.64L5.57,14.33c-1.39.54-1.37,1.32-.24,1.67l5.22,1.62L22.66,10c.57-.38,1.09-.17.67.21Z"></path>
            </svg>
          </a>
          <a href="https://vk.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M27.79,21.37a10.89,10.89,0,0,0-2.39-2.76c-2-1.87-1.74-1.56.68-4.79,1.48-2,2.07-3.17,1.88-3.68s-1.26-.36-1.26-.36l-3.6,0a.86.86,0,0,0-.47.09,1,1,0,0,0-.32.38A21.25,21.25,0,0,1,21,13.09c-1.61,2.73-2.25,2.87-2.51,2.7-.61-.39-.46-1.59-.46-2.43,0-2.65.4-3.75-.78-4a6.54,6.54,0,0,0-1.69-.16,7.69,7.69,0,0,0-3,.3c-.41.2-.73.65-.54.68a1.61,1.61,0,0,1,1.07.53,3.53,3.53,0,0,1,.36,1.64s.21,3.11-.5,3.5c-.49.26-1.16-.28-2.59-2.76a23.25,23.25,0,0,1-1.29-2.67,1,1,0,0,0-.29-.4,1.45,1.45,0,0,0-.56-.22l-3.43,0a1.2,1.2,0,0,0-.7.24c-.17.2,0,.61,0,.61s2.69,6.28,5.73,9.45a8.24,8.24,0,0,0,6,2.71h1.44a1.2,1.2,0,0,0,.65-.29,1,1,0,0,0,.2-.63s0-1.92.86-2.21,2,1.86,3.21,2.69a2.27,2.27,0,0,0,1.6.48l3.2,0S28.58,22.69,27.79,21.37Z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M20.5,4h-9A7.5,7.5,0,0,0,4,11.5v9A7.5,7.5,0,0,0,11.5,28h9A7.5,7.5,0,0,0,28,20.5v-9A7.5,7.5,0,0,0,20.5,4Zm5.25,16.5a5.25,5.25,0,0,1-5.25,5.25h-9A5.26,5.26,0,0,1,6.25,20.5v-9A5.25,5.25,0,0,1,11.5,6.25h9a5.26,5.26,0,0,1,5.25,5.25Z"></path>
              <path d="M16,10a6,6,0,1,0,6,6A6,6,0,0,0,16,10Zm0,9.75A3.75,3.75,0,1,1,19.75,16,3.75,3.75,0,0,1,16,19.75Z"></path>
              <circle cx="22.45" cy="9.55" r="0.8"></circle>
            </svg>
          </a>
          <a href="https://www.youtube.com/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M27,9.34c-.65-1.16-1.36-1.37-2.8-1.45S19.13,7.75,16,7.75s-6.75,0-8.18.14S5.67,8.18,5,9.34,4,12.49,4,16H4c0,3.49.35,5.5,1,6.64S6.38,24,7.81,24.12s5.06.13,8.19.13,6.75-.05,8.19-.13,2.14-.31,2.79-1.47S28,19.5,28,16h0C28,12.49,27.66,10.5,27,9.34ZM13,20.5v-9L20.5,16Z"></path>
            </svg>
          </a>

          <div className="item_rightpanel">Контакты</div>
        </div>
      </div>
    </div>
  );
};

export default Toppanels;
