import React from 'react';
import pic1 from '../img/5.webp';
import pic2 from '../img/13.webp';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from '@mui/material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';





export const Slider = () => {

    // Define your breakpoints for different screen sizes
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');
    // Define the number of slides based on screen size
    const numberOfSlides = isSmallScreen ? 1 : isLargeScreen ? 2:1;
   
   
  return (
  <div className='contain'>
      <h1 className='font-bold text-4xl text-blue-950 text-center relative top-24 '>گواهینامه ها</h1>

      <div className='swiper h-[600px]'>
        <Swiper
        slidesPerView={numberOfSlides}
        spaceBetween={30}
        pagination={{
        clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper relative top-36">
          
        <SwiperSlide>
          <img src={pic2} alt="picture" className='rounded-full mr-10 w-20 h-20' />
          <div className='m-10'>
            <h4 className='text-blue-950 font-bold'>راضیه شهبازی</h4>
            <p className='text-gray-500'>برنامه نویس</p>
            <p className='text-gray-500 mt-7 max-[500px]:text-[12px]'>من به یادگیری مادام العمر اعتقاد دارم و اینجا مکانی عالی
            <br />
               برای یادگیری از کارشناسان است. من چیزهای زیادی یاد گرفتم
              <br />
      و آن را به همه دوستانم توصیه می کنم.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic1} alt="picture" className='rounded-full mr-10 w-20 h-20'/>
          <div className='m-10'>
            <h4 className='text-blue-950 font-bold'>محمد رضایی</h4>
            <p className='text-gray-500'>بازاریابی</p>
            <p className='text-gray-500 mt-7 max-[500px]:text-[12px]'>من به یادگیری مادام العمر اعتقاد دارم و اینجا مکانی عالی برای یادگیری از کارشناسان است. من چیزهای زیادی یاد گرفتم و آن را به همه دوستانم توصیه می کنم.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={pic2} alt="picture" className='rounded-full mr-10 w-20 h-20' />
          <div className='m-10'>
            <h4 className='text-blue-950 font-bold'>راضیه شهبازی</h4>
            <p className='text-gray-500'>برنامه نویس</p>
            <p className='text-gray-500 mt-7 max-[500px]:text-[12px]'>من به یادگیری مادام العمر اعتقاد دارم و اینجا مکانی عالی
            <br />
               برای یادگیری از کارشناسان است. من چیزهای زیادی یاد گرفتم
              <br />
      و آن را به همه دوستانم توصیه می کنم.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide><img src={pic1} alt="picture" className='rounded-full mr-10 w-20 h-20'/>
          <div className='m-10'>
            <h4 className='text-blue-950 font-bold'>محمد رضایی</h4>
            <p className='text-gray-500'>بازاریابی</p>
            <p className='text-gray-500 mt-7 max-[500px]:text-[12px]'>من به یادگیری مادام العمر اعتقاد دارم و اینجا مکانی عالی برای یادگیری از کارشناسان است. من چیزهای زیادی یاد گرفتم و آن را به همه دوستانم توصیه می کنم.</p>
          </div></SwiperSlide>
        </Swiper>
      </div>
      </div>
  );
}


