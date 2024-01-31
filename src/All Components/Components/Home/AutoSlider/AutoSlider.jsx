import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
 
import img from "./../../../../assets/Images/slide-2.webp"
import img2 from "./../../../../assets/Images/9.jpg"
import img3 from "./../../../../assets/Images/5.jpg"
import img4 from "./../../../../assets/Images/6.jpg"
import img5 from "./../../../../assets/Images/7.jpg"
import img6 from "./../../../../assets/Images/8.jpg"
import img7 from "./../../../../assets/Images/3.jpg"
import img8 from "./../../../../assets/Images/7.jpg"
import img9 from "./../../../../assets/Images/4.jpg"


 

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
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img className='w-[1300px] h-[500px]' src={img} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]' src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img6} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img7} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img8} alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-[1300px] h-[500px]'  src={img9} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default AutoSlider;