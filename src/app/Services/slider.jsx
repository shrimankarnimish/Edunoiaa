"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fadeinup } from "../Components/Animations";

import case1 from "../../../public/Assets/images/thumbnail1.webp";
import case2 from "../../../public/Assets/images/thumbnail2.webp";
import case3 from "../../../public/Assets/images/thumbnail3.webp";

export default function CaseStudyCarousel() {
  const cards = [
    {
      title:
        "Geopolitical Shift at BRICS: How the 2025 Summit Is Revamping India’s Educational Ambitions",
      img: case1,
      href: "https://abnd.in/thinking/edunoia/geopolitical-shift-at-brics-how-the-2025-summit-is-revamping-indias-educational-ambitions",
    },
    {
      title:
        "Meera’s Triumph: Illuminating the Path to Educational Equality in Rural India",
      img: case2,
      href: "https://abnd.in/thinking/edunoia/meeras-triumphilluminating-the-path-to-educational-equality-in-rural-india",
    },
    {
      title:
        "Unleashing Potential: The Transformative Power of Socio-Emotional Learning and Mental Well-being in Indian Education",
      img: case3,
      href: "https://abnd.in/thinking/edunoia/unleashing-potential-the-transformative-power-of-socio-emotional-learning-and-mental-well-being-in-indian-education",
    },
    {
      title:
        "Geopolitical Shift at BRICS: How the 2025 Summit Is Revamping India’s Educational Ambitions",
      img: case1,
      href: "https://abnd.in/thinking/edunoia/geopolitical-shift-at-brics-how-the-2025-summit-is-revamping-indias-educational-ambitions",
    },
    {
      title:
        "Meera’s Triumph: Illuminating the Path to Educational Equality in Rural India",
      img: case2,
      href: "https://abnd.in/thinking/edunoia/meeras-triumphilluminating-the-path-to-educational-equality-in-rural-india",
    },
    {
      title:
        "Unleashing Potential: The Transformative Power of Socio-Emotional Learning and Mental Well-being in Indian Education",
      img: case3,
      href: "https://abnd.in/thinking/edunoia/unleashing-potential-the-transformative-power-of-socio-emotional-learning-and-mental-well-being-in-indian-education",
    },
  ];

  return (
    <Fadeinup>
      <div className="w-full container mx-auto py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          preventClicks={false}
          preventClicksPropagation={false}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative w-full h-[420px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden group cursor-pointer">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover italic"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>

                  <h4 className="absolute bottom-5 left-5 right-5 text-white font-semibold text-xl sm:text-2xl leading-snug drop-shadow-lg italic">
                    {card.title}
                  </h4>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fadeinup>
  );
}
