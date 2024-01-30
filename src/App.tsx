import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const swiper = useSwiper();
  return (
    <div style={{ height: '100vh', width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectCards, Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}