import React from 'react';

const Newsitem = () => {
  const testing = {
    img: 'https://static.insales-cdn.com/files/1/620/24158828/original/Travolta-wanna-find-a-keyboard-in-Geekboards.jpg',
    title: 'Как выбрать клавиатуру',
    desc: 'Browsers do not provide any special information on background images to assistive technology. This is important primarily for screen readers, as a screen reader will not announce its presence and therefore convey nothing to its users.',
  };
  return (
    <div className="news_block">
      <div className="news_block_item">
        <div className="news_block_item_image_container">
          <img src={testing.img} />
        </div>
        <div className="news_block_item_title">
          <h1>{testing.title}</h1>
        </div>
        <div>{testing.desc}</div>
      </div>
      <div className="news_block_item">
        <div className="news_block_item_image_container">
          <img src={testing.img} />
        </div>
        <div className="news_block_item_title">
          <h1>{testing.title}</h1>
        </div>
        <div>{testing.desc}</div>
      </div>
      <div className="news_block_item">
        <div className="news_block_item_image_container">
          <img src={testing.img} />
        </div>
        <div className="news_block_item_title">
          <h1>{testing.title}</h1>
        </div>
        <div>{testing.desc}</div>
      </div>
    </div>
  );
};

export default Newsitem;
