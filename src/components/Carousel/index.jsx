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
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>                    
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        <p className='absolute bottom-18 left-8 font-display font-semibold'>Anomali Tung-Tung Sahur</p>
                        <p className='absolute bottom-6 left-8 font-display text-sm text-left w-1/2 line-clamp-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ab itaque! Quam labore autem, quod facilis ipsum expedita, distinctio consectetur iste fuga quidem tempora sapiente. Facilis, quos! Quod adipisci excepturi incidunt architecto dolor odit, dicta distinctio obcaecati quasi. Voluptate perspiciatis debitis corrupti, quo ad odio magni quis modi dolorem explicabo?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        <p className='absolute bottom-10 left-10'>Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        <p className='absolute bottom-10 left-10'>Slide 1</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        <p className='absolute bottom-10 left-10'>Slide 1</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    )
}

export default Carousel