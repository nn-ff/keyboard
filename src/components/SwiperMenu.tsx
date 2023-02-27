import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';

const SwiperMenu: FC = () => {
  const swiperElementsARR = [
    {
      title: 'Все клавиатуры',
      id: 0,
      url: 'https://www.overclockers.ua/peripheral/varmilo-ma108-panda/18-big-varmilo-ma108-panda.jpg',
      link: '/products/keyboards',
    },
    {
      title: 'Все мыши',
      id: 1,
      url: 'https://rozetked.me/images/uploads/qzuGztXQ9OEw.jpg',
      link: '/products/mice',
    },
    {
      title: 'Все аксесуары',
      id: 2,
      url: 'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/cherry-profile-doubleshot-pbt-keycaps-full-set-black-on-white-bow-1661941679435.jpg?v=1661941682',
      link: '/products/accessories',
    },
    {
      title: 'Все услуги',
      id: 3,
      url: 'https://img.freepik.com/premium-photo/disassembly-mechanical-keyboard-modified-custom-keyboard-with-pcb-switch-pad-stickers-adjust-typing-sound_175175-545.jpg?w=2000',
      link: '/repair',
    },
  ];
  const swiperElements = swiperElementsARR.map((obj, index) => {
    return (
      <SwiperSlide key={obj.title}>
        <Link className="swiper_slide_links" to={obj.link}>
          <img className="swiper_slide_img" src={obj.url} alt="img" />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="swiper_container">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="swiper_container">
        {swiperElements}
      </Swiper>
    </div>
  );
};

export default SwiperMenu;
