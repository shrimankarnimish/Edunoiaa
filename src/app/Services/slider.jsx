"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import case1 from "../../../public/Assets/images/casestudy1.jpg"
import case2 from "../../../public/Assets/images/casestudy2.jpg";
import case3 from "../../../public/Assets/images/casestudy3.png";

export default function CaseStudyCarousel() {
    const cards = [
        {
            title: "Branding India’s leading institute in skill–based education",
            img: case1,
        },
        {
            title: "Branding India’s leading institute in skill–based education",
            img: case2,
        },
        {
            title: "Branding India’s leading institute in skill–based education",
            img: case3,
        },
        {
            title: "A new direction for future-ready learning",
            img: case1,
        },
        {
            title: "Digital transformation for modern education",
            img: case2,
        },
        {
            title: "Creating powerful narratives through design",
            img: case3,
        },
    ];

    return (
        <div className="w-full container mx-auto py-10 ">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation={false}
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
                        <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden group cursor-pointer">

                            {/* Image */}
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>

                            {/* TITLE */}
                            <p className="absolute bottom-5 left-5 right-5 
                                text-white font-semibold
                                text-xl sm:text-2xl md:text-2xl
                                leading-snug drop-shadow-lg">
                                {card.title}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
