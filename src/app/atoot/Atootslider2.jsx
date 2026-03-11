"use client";
import Image from "next/image";

//images
import atoot2 from "../../../public/Assets/images/atoot/atoot2.jpg";
import atoot3 from "../../../public/Assets/images/atoot/atoot3.jpg";
import atoot4 from "../../../public/Assets/images/atoot/atoot4.jpg";
import atoot5 from "../../../public/Assets/images/atoot/atoot5.jpg";

//slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Atootslider2 = () => {
  return (
    <div className="w-full overflow-hidden px-4 md:px-0">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        effect={"fade"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="w-full">
              <Image 
                src={atoot2} 
                className="w-full h-auto block" 
                placeholder="blur" 
                alt="Atoot Image 2"
              />
            </div>
            <div className="w-full mt-4 md:mt-0">
              <div className="hidden md:block h-16 md:h-40"></div>
              <div className="hidden md:block h-16 md:h-40"></div>
              <Image 
                src={atoot3} 
                className="w-full h-auto block" 
                placeholder="blur" 
                alt="Atoot Image 3"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <div className="w-full">
              <Image 
                src={atoot4} 
                className="w-full h-auto block" 
                placeholder="blur" 
                alt="Atoot Image 4"
              />
            </div>
            <div className="w-full mt-4 md:mt-0">
              <div className="hidden md:block h-16 md:h-40"></div>
              <div className="hidden md:block h-16 md:h-40"></div>
              <Image 
                src={atoot5} 
                className="w-full h-auto block" 
                placeholder="blur" 
                alt="Atoot Image 5"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Atootslider2;