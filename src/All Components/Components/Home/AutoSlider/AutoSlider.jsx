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

import { MdInfo } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";



import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const AutoSlider = () => {
    return (
        <div>
            <Swiper
                id='zindexperpose'
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}


                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <img className='w-full h-[500px] relative' src={img} alt="" />

                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-[500px]' src={img3} alt="" />

                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-[500px]' src={img4} alt="" />

                </SwiperSlide>
                <SwiperSlide  >
                    <img className='w-full h-[500px]' src={img2} alt="" />

                </SwiperSlide>
                <SwiperSlide >
                    <img className='w-full h-[500px]' src={img5} alt="" />

                </SwiperSlide>
            </Swiper>

            <div id='zindex' className=' bg-opacity-40 -mt-[780px] pl-[50px]  '>
                <div id='blur2' className='w-[420px]   px-6 rounded-lg hover:border-green-500' >
                    <div className=''>

                        <p className='text-lg text-white border-l-2 border-green-500 pl-6 uppercase mt-40   '>ON-THE-GO,<span className='   font-bold'> UNDER 60 SECONDS</span>

                        </p>
                    </div>
                    {/* secend  */}
                    <div className='flex items-center'>


                        <div className='bg-green-950 gap-4 border rounded-full flex justify-between px-8  py-2  mt-6'>
                            <Link to='bal'>
                                <div className=' '>

                                    <button className="btn border-2 text-white  bg-gray-700 hover:bg-gray-700 uppercase border-green-500 hover:border-green-500  rounded-full px-6">One Way</button>

                                </div>
                            </Link>
                            <div className='    hover:border-green-500 border-2 rounded-full '>
                                <button className="btn bg-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white   uppercase rounded-full px-6">Hourly</button>
                            </div>

                        </div>
                        <div className='mt-6 ml-2'>
                            <MdInfo className='w-6 h-6'></MdInfo>
                        </div>
                    </div>
                    {/* third */}
                    <div>


                        <div className='flex gap-6 mt-4'>
                            <div>
                                <input type="date" name="date" id="date" placeholder='date' className='border-b-2' />

                            </div>

                            <input type="time" name="" id="" className='border-b-2' />
                            <hr />
                        </div>
                        <div className='flex items-center border-b-2 pb-2 mt-4'>
                            <div>
                                <IoLocationSharp className='w-5 h-5'></IoLocationSharp>
                            </div>
                            <p className='text-lg text-white  font-bold ml-2'>PickUp location</p>
                        </div>
                        <button className="  md:ml-52 text-lg btn mt-10 btn-success">Reserve</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AutoSlider;