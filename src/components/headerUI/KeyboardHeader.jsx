import React from 'react';

const KeyboardHeader = ({ isHovering }) => {
  const hoverclass = isHovering ? 'header_bottom_item active' : 'header_bottom_item';
  return (
    <div className={hoverclass}>
      <div>
        <img src="https://o.aolcdn.com/images/dimse/5845cadfecd996e0372f/bb0950e6c324eae0dcc61b4d2c6c94ee251ef3ac/Y3JvcD0xNjAwJTJDMTA2NyUyQzAlMkMwJnF1YWxpdHk9ODUmZm9ybWF0PWpwZyZyZXNpemU9MTYwMCUyQzEwNjcmaW1hZ2VfdXJpPWh0dHBzJTNBJTJGJTJGcy55aW1nLmNvbSUyRm9zJTJGY3JlYXRyLXVwbG9hZGVkLWltYWdlcyUyRjIwMTktMDklMkY1YmYwODU0MC1kMDE5LTExZTktOWIzZC1lOGY4M2I0YTFlYmEmY2xpZW50PWExYWNhYzNlMWIzMjkwOTE3ZDkyJnNpZ25hdHVyZT05OTkyOGI0YzQzM2YwZGMxN2RlMDE2Y2EyOTE1NGUwYjVlNzM3MDA3"></img>
      </div>
      <div>
        <div>Особенности</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
        <div>asdasd</div>
      </div>
      <div>Бренды</div>
      <div>Размер</div>
    </div>
  );
};

export default KeyboardHeader;
