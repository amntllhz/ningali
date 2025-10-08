import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { HiMiniPlay } from "react-icons/hi2";


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
                        {/* top carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-2 top-7 left-8'>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>1h 56min</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Action</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Movie</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>2025</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>7+</p>
                            </div>
                        </div>

                        {/* bottom carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-4 bottom-7 left-8'>                            
                            <button className='bg-text1/10 p-2 rounded-full' cursor='pointer'>
                                <HiMiniPlay className='ml-0.5 w-6 h-6 text-text1' />
                            </button>
                            <div className='flex flex-col space-y-0.5'>
                                <p className='font-display text-text1 text-sm font-semibold'>Anomali Tung-Tung Sahur</p>
                                <p className='font-display text-text1 text-sm text-left w-1/2 line-clamp-2'>Play Trailer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>                    
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        {/* top carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-2 top-7 left-8'>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>1h 56min</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Action</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Movie</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>2025</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>7+</p>
                            </div>
                        </div>

                        {/* bottom carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-4 bottom-7 left-8'>                            
                            <button className='bg-text1/10 p-2 rounded-full' cursor='pointer'>
                                <HiMiniPlay className='ml-0.5 w-6 h-6 text-text1' />
                            </button>
                            <div className='flex flex-col space-y-0.5'>
                                <p className='font-display text-text1 text-sm font-semibold'>Anomali Tung-Tung Sahur</p>
                                <p className='font-display text-text1 text-sm text-left w-1/2 line-clamp-2'>Play Trailer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=' justify-center px-8 pb-8 text-center'>                    
                    <div className='relative flex flex-col rounded-3xl justify-center items-center bg-accent p-42'>
                        {/* top carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-2 top-7 left-8'>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>1h 56min</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Action</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>Movie</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>2025</p>
                            </div>
                            <div className='px-3 py-1.5 bg-text1/10 rounded-full'>
                                <p className='font-display text-text1 text-xs'>7+</p>
                            </div>
                        </div>

                        {/* bottom carousel */}
                        <div className='absolute flex flex-row justify-center items-center space-x-4 bottom-7 left-8'>                            
                            <button className='bg-text1/10 p-2 rounded-full' cursor='pointer'>
                                <HiMiniPlay className='ml-0.5 w-6 h-6 text-text1' />
                            </button>
                            <div className='flex flex-col space-y-0.5'>
                                <p className='font-display text-text1 text-sm font-semibold'>Anomali Tung-Tung Sahur</p>
                                <p className='font-display text-text1 text-sm text-left w-1/2 line-clamp-2'>Play Trailer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>                                             
            </Swiper>
        </>
    )
}

export default Carousel