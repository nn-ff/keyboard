import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import axios from 'axios';

const FullItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [idProduct, setIdProduct] = useState();
  useEffect(() => {
    async function fetchIdProduct() {
      try {
        const { data } = await axios.get('https://63264eebba4a9c4753256eee.mockapi.io/items/' + id);
        setIdProduct(data);
      } catch (error) {
        alert('error');
        navigate('/');
      }
    }

    fetchIdProduct();
  }, []);

  if (!idProduct) {
    return <div>загрузка</div>;
  }
  const img = idProduct.imageUrl.map((arr) => {
    return (
      <SwiperSlide key={arr}>
        <img src={arr} />
      </SwiperSlide>
    );
  });
  return (
    <div className="fullprdouct_container">
      <div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            width: 700,
            height: 400,
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperFullImgTwo">
          {img}
        </Swiper>
        <Swiper
          style={{ width: 700, height: 100 }}
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperFullImgOne">
          {img}
        </Swiper>
      </div>
      <div className="fullproduct_desccontainter">
        <div>{idProduct.title}</div>
        <div>{idProduct.price}</div>
      </div>
    </div>
  );
};

export default FullItem;
