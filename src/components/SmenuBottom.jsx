import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { Pagination, Navigation, Autoplay } from 'swiper';
const SmenuBottom = () => {
  const brandsitems = [
    {
      title: 'varmilo',
      link: '/products/keyboards/varmilo',
      imgUrl: {
        one: 'https://avatars.mds.yandex.net/get-mpic/6256254/img_id3318737778986577171.jpeg/orig',
        two: 'https://manuals.plus/wp-content/uploads/2022/06/Varmilo-logo.png',
      },
    },
    {
      title: 'leopold',
      link: '/products/keyboards/leopold',
      imgUrl: {
        one: 'https://i.ebayimg.com/00/s/Mzc1WDUwMA==/z/U6QAAOSwBm9eQN-1/$_57.JPG?set_id=8800005007',
        two: 'https://keyboardsexpert.com/wp-content/uploads/2021/11/Leopold-Logo.jpg',
      },
    },
    {
      title: 'ducky',
      link: '/products/keyboards/ducky',
      imgUrl: {
        one: 'https://ae04.alicdn.com/kf/H4ce75477173b41fc93783c1fa4dd1ab6j/Ducky-One-2-Mini-RGB-60-Double.png',
        two: 'https://www.kustompcs.co.uk/images/feature_variant/15/xvjooakx5v.png',
      },
    },
    {
      title: 'vortex',
      link: '/products/keyboards/vortex',
      imgUrl: {
        one: 'https://mechanicalkeyboards.com/shop/images/products/large_VTG83MSLV9TX_main.jpg',
        two: 'https://www.basco.hk/wp-content/uploads/2019/10/vortex-01-1.png',
      },
    },
    {
      title: 'logitech',
      link: '/products/mice/logitech',
      imgUrl: {
        one: 'https://boiling-machine.ru/wp-content/uploads/pro-x-superlight-black-gallery-11.png',
        two: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logitech_logo.svg/2560px-Logitech_logo.svg.png',
      },
    },
  ];
  const brands = brandsitems.map((obj, index) => {
    return (
      <SwiperSlide key={obj.title}>
        <Link to={obj.link}>
          <img src={obj.imgUrl.one} />
          <img src={obj.imgUrl.two} />
        </Link>
      </SwiperSlide>
    );
  });
  return (
    <div className="swiper_container_bottom">
      <div className="swiper_slider">
        <Swiper slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper">
          {brands}
        </Swiper>
      </div>
      <a className="show_brands">Посмотреть все бренды</a>
    </div>
  );
};

export default SmenuBottom;
