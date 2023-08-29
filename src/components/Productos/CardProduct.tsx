import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/CardProduct.css';
// import required modules
import { Autoplay, Zoom, Navigation } from 'swiper/modules';

export default function CardProduct({ img, name, description, items }) {
  return (
    <div className="pb-16 lg:flex">
      <div className="flex items-center justify-center border border-black w-[310px] lg:flex-none">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          zoom={true}
          navigation={true}
          modules={[Zoom,Autoplay, Navigation]}
          className="mySwiper"
        >
          {img.map((image)=>(
            <SwiperSlide>
               <div className="swiper-zoom-container">
              <figure>
                <img
                  className="w-[210px] max-w-[310px] lg:w-[314px] lg:max-w-[314px] "
                  src={image}
                  alt="Tecnología de vanguardia"
                />
              </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
      <div className="pt-5 lg:pl-5 lg:pt-0">
        <p className="bold text-xl">{name}</p>
        <p>{description}</p>
        {items.map((item) => (
          <div
            key={item}
            className="flex flex-row items-center gap-[14px] md:flex-row xl:flex-row"
          >
            <img
              src="/assets/Ellipse.svg"
              alt=""
              className="inline-block rounded object-cover"
            />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
