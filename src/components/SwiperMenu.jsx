import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

const SwiperMenu = () => {
  return (
    <div className="swiper_container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <img src="https://www.overclockers.ua/peripheral/varmilo-ma108-panda/18-big-varmilo-ma108-panda.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rozetked.me/images/uploads/qzuGztXQ9OEw.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/cherry-profile-doubleshot-pbt-keycaps-full-set-black-on-white-bow-1661941679435.jpg?v=1661941682" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/disassembly-mechanical-keyboard-modified-custom-keyboard-with-pcb-switch-pad-stickers-adjust-typing-sound_175175-545.jpg?w=2000" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperMenu;
