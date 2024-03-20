import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




import img from "./../../../../assets/Images/people.webp"

import img1 from "./../../../../assets/Images/slider.png1.jpg"
import img2 from "./../../../../assets/Images/slider.png8.jpg"
import img3 from "./../../../../assets/Images/slider.png3.jpg"
import img4 from "./../../../../assets/Images/slider.png4.jpg"
import img5 from "./../../../../assets/Images/slider.png5.jpg"
 



const AutoslideRideCentric = () => {


    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };


    return (
        <div className='my-10'>
            <div className='border-l-4 border-green-500 mx-10 px-6'>
                <img src={img} alt="" />
                <h1 className='text-4xl'>make</h1>
                <h1 className='text-5xl font-bold'>RideCentric</h1>
            </div>
            {/* part 2 */}
            <div className='py-10 '>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}

                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper  lg:h-[500px] lg:w-[1050px] rounded-3xl"
                >
                    <SwiperSlide><img className='relative' src={img1} alt="" />

                        <div id='blur' className='mx-10 w-[500px] text-white -mt-[270px] absolute p-10'>
                            <h1 className='text-4xl uppercase'>Dreams take flight</h1>
                            <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore reprehenderit beatae omnis necessitatibus harum modi consequatur repellendus facilis incidunt.</h1>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide><img className='relative' src={img2} alt="" />

                        <div id='blur' className='  mx-10 w-[500px] text-white -mt-[300px] bg-opacity-40 absolute p-10'>
                            <h1 className=' text-4xl uppercase '>Dreams take flight</h1>
                            <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore reprehenderit beatae omnis necessitatibus harum modi consequatur repellendus facilis incidunt.</h1>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide><img className='relative' src={img3} alt="" />

                        <div id='blur' className='  mx-10 w-[500px] text-white -mt-[285px] bg-opacity-40 absolute p-10'>
                            <h1 className=' text-4xl uppercase '>Dreams take flight</h1>
                            <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore reprehenderit beatae omnis necessitatibus harum modi consequatur repellendus facilis incidunt.</h1>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide><img className='relative' src={img4} alt="" />

                        <div id='blur' className='  mx-10 w-[500px] text-white -mt-[280px] bg-opacity-40 absolute p-10'>
                            <h1 className=' text-4xl uppercase '>Dreams take flight</h1>
                            <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore reprehenderit beatae omnis necessitatibus harum modi consequatur repellendus facilis incidunt.</h1>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide><img className='relative' src={img5} alt="" />

                        <div id='blur' className='  mx-10 w-[500px] text-white -mt-[280px] bg-opacity-40 absolute p-10'>
                            <h1 className=' text-4xl uppercase '>Dreams take flight</h1>
                            <h1 className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore reprehenderit beatae omnis necessitatibus harum modi consequatur repellendus facilis incidunt.</h1>
                        </div>

                    </SwiperSlide>




 


                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default AutoslideRideCentric;