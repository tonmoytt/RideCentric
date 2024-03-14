// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';


import Swiper from "swiper";
import img1 from "./../../../../assets/Images/crew.jpg"
import img2 from "./../../../../assets/Images/car.png"
import img3 from "./../../../../assets/Images/camablity.jpg"

const UpAndDownSlider = () => {

const swiper=new Swiper('.swiper',{
  pagination:{
    el: ".swiper-pagination",
    clickable:true,
  },
  direction:"vertical",
  slidesPerView: 1,
  spaceBetween:30,
  mousewheel:true,
})

  return (
    <div>
      {/* <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
      </Swiper> */}


      <div className="swiper1">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={img1} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default UpAndDownSlider;