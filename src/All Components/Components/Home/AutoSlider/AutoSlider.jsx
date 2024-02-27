import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 
import img from "./../../../../assets/Images/slide-2.webp"
import img2 from "./../../../../assets/Images/slider2.webp"
import img3 from "./../../../../assets/Images/slide-3.webp"
import img4 from "./../../../../assets/Images/slider44.webp"
import img5 from "./../../../../assets/Images/slide5.webp"
 


 

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AutoSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
              
             
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img className='w-[1300px] h-[500px]' src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img5} alt="" /></SwiperSlide>
                 
            </Swiper>
        </div>
    );
};

export default AutoSlider;