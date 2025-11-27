"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Imported images must be **inside src**, not public
import case1 from "../../../public/Assets/images/casestudy1.jpg"
import case2 from "../../../public/Assets/images/casestudy2.jpg";
import case3 from "../../../public/Assets/images/casestudy3.png";

export default function CaseStudyCarousel() {
    const cards = [
        {
            title: "Branding India’s leading institute in skill–based education",
            img: case1, // imported from src/assets/images
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
        <div className="w-full max-w-7xl mx-auto py-10">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation={false}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Navigation]}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[460px] rounded overflow-hidden group cursor-pointer">
                            {/* Image */}
                            <Image
                                src={card.img}
                                alt={card.title}
                                fill
                                className="object-cover"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>

                            {/* TAG */}
                            <p className="absolute top-6 left-6 text-white font-semibold text-lg tracking-wide">
                                {card.tag}
                            </p>

                            {/* TITLE */}
                            <p className="absolute bottom-6 left-6 right-6 text-white text-2xl font-semibold leading-snug drop-shadow-lg">
                                {card.title}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
