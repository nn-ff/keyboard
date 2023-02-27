import React, { CSSProperties, FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper as SwiperSlider, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import axios from 'axios';
import { setAddItem } from '../redux/slices/cartSlice';
import FullItemSwitch from '../components/FullItemSwitch';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { Swiper } from 'swiper/types';
import { IItems } from '../types/Type';

export interface IswState {
  id: string;
  soldout: string;
  title: string;
}

const FullItem: FC = () => {
  const dispatch = useAppDispatch();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null);

  const { id } = useParams();
  const navigate = useNavigate();
  const [sw, setSw] = useState<IswState>({
    id: 'close',
    soldout: 'close',
    title: 'close',
  });
  const [idProduct, setIdProduct] = useState<IItems>();
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
  }, [id, navigate]);

  if (!idProduct) {
    return (
      <div className="loading_animation">
        <div className="loading_animation_item">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 26.349 26.35">
            <circle cx="13.792" cy="3.082" r="3.082" />
            <circle cx="13.792" cy="24.501" r="1.849" />
            <circle cx="6.219" cy="6.218" r="2.774" />
            <circle cx="21.365" cy="21.363" r="1.541" />
            <circle cx="3.082" cy="13.792" r="2.465" />
            <circle cx="24.501" cy="13.791" r="1.232" />
            <path
              d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"
            />
            <circle cx="21.364" cy="6.218" r="0.924" />
          </svg>
        </div>
      </div>
    );
  }
  const onClickSwitch = (obj: { id: number; class: string }, arr: { soldout: string }) => {
    setSw({
      id: String(obj.id),
      soldout: arr.soldout,
      title: obj.class.replaceAll('_', ' '),
    });
  };

  const onClickAdditem = () => {
    if (id) {
      const switcher = sw.title === 'close' ? '' : sw.title;
      dispatch(
        setAddItem({
          id: id,
          title: idProduct.title,
          img: idProduct.imageUrl[0],
          switch: switcher,
          price: String(idProduct.price),
          count: 0,
        }),
      );
    }
  };
  const img = idProduct.imageUrl.map((arr) => {
    return (
      <SwiperSlide key={arr}>
        <img src={arr} alt="img" />
      </SwiperSlide>
    );
  });

  return (
    <div className="fullprdouct_container">
      <div>
        <SwiperSlider
          style={
            {
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            } as CSSProperties
          }
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperFullImgTwo">
          {img}
        </SwiperSlider>
        <SwiperSlider
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiperFullImgOne">
          {img}
        </SwiperSlider>
      </div>
      <div className="fullproduct_desccontainter">
        <div className="fullitem_tittle">{idProduct.title}</div>
        {idProduct.switches && (
          <FullItemSwitch sw={sw} onClickSwitch={onClickSwitch} idProduct={idProduct} />
        )}
        {sw.soldout === 'false' || !idProduct.switches ? (
          <div onClick={() => onClickAdditem()} className="fullitem_price">
            {idProduct.price} p. В корзину
          </div>
        ) : !idProduct.switches || sw.id !== 'close' ? (
          <div className="fullitem_price soldout_button">Нет в наличии</div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FullItem;
