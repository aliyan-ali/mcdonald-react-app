import React from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

function Carosel() {
  return (
    <div className="swiper-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-img img1"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img2"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img3"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img4"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img5"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img6"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img7"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img8"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-img img9"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carosel