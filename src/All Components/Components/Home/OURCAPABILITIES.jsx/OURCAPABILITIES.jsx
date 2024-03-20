// import React, { useRef, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';


// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import requer modules

// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';



import { useState } from "react";
import car from "./../../../../assets/Images/car.png"
import img2 from "./../../../../assets/Images/CREW TRANSPORT.jpg"
import img1 from "./../../../../assets/Images/crew.jpg"
import img4 from "./../../../../assets/Images/SPORTS TRAVEL.webp"
import img5 from "./../../../../assets/Images/HOTEL PARTNERSHIP.webp"

import { FiMinus, FiPlus } from "react-icons/fi";

import "./Style.css"
const OURCAPABILITIES = () => {
    const [slide, setSlide] = useState(false)
    const [slide1, setSlide1] = useState(false)
    const [slide2, setSlide2] = useState(false)
    // const [slide1, setSlide1] = useState(false)



    return (
        <div className="mb-10 pb-60 bg-slate-100 pt-4">
            {/* section 1 */}
            <div className='border-l-4 border-green-500 md:mx-10 md:mb-8 '>

                <h1 className='text-4xl pl-5'>OUR
                </h1>
                <h1 className='text-5xl font-bold pt-2 pl-5'>CAPABILITIES</h1>
            </div>
            {/* section2 */}
            <div className='flex justify-between md:mx-10 '>

                <div className="card">
                    <div className={`${slide && "card-inner"}`}>
                        <div className="card-front">
                            <img className='h-50 w-50 rounded-xl relative' src={img2} alt="" />

                            <button className='text-4xl absolute  text-white  bg-blue-500 rounded-3xl mt-[310px] ml-[500px]' onClick={() => setSlide(true)}
                            >
                                <FiPlus className="h-8 w-8"></FiPlus>
                            </button>
                            <p className="text-white font-extrabold ml-12 mt-[300px] text-3xl absolute ">CREW TRANSPORT</p>

                        </div>

                        <div className="card-back">
                            <img className='h-30 w-50 rounded-xl relative' src={img1} alt="" />
                            <button className='text-4xl absolute  text-white  bg-gray-600 rounded-3xl mt-[340px] ml-[500px]' onClick={() => setSlide(false)}>
                                <FiMinus className="h-7 w-7 "></FiMinus>
                            </button>


                        </div>
                    </div>
                </div>
                {/* img */}
                <div className="">
                    <img className="w-[700px] h-[300px]" src={car} alt="" />
                </div>
            </div>

            {/*  section 3 */}

            <div className='grid md:grid-cols-2 justify-between md:mx-10 mt-10'>

                <div className="card1">
                    <div className={`${slide1 && "card-inner1"}`}>
                        <div className="card-front1  ">
                            <img className='h-50 w-50  rounded-xl relative' src={img4} alt="" />

                            <button className='text-4xl absolute  text-white  bg-blue-500 rounded-3xl mt-[310px] ml-[500px]' onClick={() => setSlide1(true)}
                            >
                                <FiPlus className="h-8 w-8"></FiPlus>
                            </button>
                            <p className="text-white font-extrabold ml-12 mt-[350px] text-3xl absolute ">SPORTS TRAVEL</p>
                            
                        </div>

                        <div className="card-back1  ">
                            <img className='h-30 w-50 rounded-xl relative' src={img1} alt="" />
                            <button className='text-4xl absolute  text-white  bg-gray-600 rounded-3xl mt-[360px] ml-[500px]' onClick={() => setSlide1(false)}>
                                <FiMinus className="h-7 w-7 "></FiMinus>
                            </button>


                        </div>
                    </div>
                </div>
                {/* img */}
                <div className="card">
                    <div className={`${slide2 && "card-inner"}`}>
                        <div className="card-front">
                            <img className='h-50 w-50 rounded-xl relative' src={img5} alt="" />

                            <button className='text-4xl absolute  text-white  bg-blue-500 rounded-3xl mt-[440px] ml-[500px]' onClick={() => setSlide2(true)}
                            >
                                <FiPlus className="h-8 w-8"></FiPlus>
                            </button>
                            <p className="text-white font-extrabold ml-12 mt-[450px] text-3xl absolute "> HOTEL PARTNERSHIP</p>

                        </div>

                        <div className="card-back">
                            <img className='h-30 w-50 rounded-xl relative' src={img1} alt="" />
                            <button className='text-4xl absolute  text-white  bg-gray-600 rounded-3xl mt-[340px] ml-[500px]' onClick={() => setSlide2(false)}>
                                <FiMinus className="h-7 w-7 "></FiMinus>
                            </button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OURCAPABILITIES;