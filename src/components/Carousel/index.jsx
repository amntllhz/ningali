import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const Carousel = () => {
    return (
        <>
            <Swiper
                pagination={{
                dynamicBullets: true,
                }}
                style={{                    
                    "--swiper-pagination-color": "#959ca3",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className=' justify-center p-8 text-center'>
                    <div className='flex flex-col rounded-2xl justify-center items-center bg-accent p-36'>
                        <p>Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center p-8 text-center'>
                    <div className='flex flex-col rounded-2xl justify-center items-center bg-accent p-36'>
                        <p>Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center p-8 text-center'>
                    <div className='flex flex-col rounded-2xl justify-center items-center bg-accent p-36'>
                        <p>Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center p-8 text-center'>
                    <div className='flex flex-col rounded-2xl justify-center items-center bg-accent p-36'>
                        <p>Slide 1</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default Carousel