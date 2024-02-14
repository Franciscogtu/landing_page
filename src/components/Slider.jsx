import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import tableu from '../assets/TABLEU.jpg'
import git from '../assets/GIT.png'
//import linkedin from "../assets/linkedin.jpg"



const images = [
  
   
    {
        url: 'https://public.tableau.com/app/profile/francisco.guasumba/vizzes',
        path: tableu // Ruta de la imagen local
      },
      {
        url: 'https://github.com/Franciscogtu?tab=repositories',
        path: git
      },
     
  ];


export const Slider = () => {
  return (
  <div className='max-w-[1040px] m-auto md:pl-30 px-4 py-16 '>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        //cloopedSlides={images.length}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
   
        onSwiper={(swiper) => console.log(swiper)}
        //onSlideChange={() => console.log('slide change')}
      >
        {images.map((image, index,url) => (
          
          <SwiperSlide key={index}>
            <a href={image.url} target="_blank" className='cursor-pointer'><img src={image.path} alt={`Image ${index}`} target="_blank" className='container flex '/></a>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Slider