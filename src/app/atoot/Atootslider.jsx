"use client";
import React from "react";
import Image from "next/image";

//images
import atoot9 from "../../../public/Assets/images/atoot/atoot9.jpg";
import atoot10 from "../../../public/Assets/images/atoot/atoot10.jpg";
import atoot11 from "../../../public/Assets/images/atoot/atoot11.jpg";

//slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Atootslider = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        effect={"fade"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="lightSlider"
      >
        <SwiperSlide>
          <div className="w-full">
            <Image 
              src={atoot9} 
              className="w-full h-auto block" 
              placeholder="blur" 
              alt="Atoot Image 9"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image 
              src={atoot10} 
              className="w-full h-auto block" 
              placeholder="blur" 
              alt="Atoot Image 10"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <Image 
              src={atoot11} 
              className="w-full h-auto block" 
              placeholder="blur" 
              alt="Atoot Image 11"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Atootslider;