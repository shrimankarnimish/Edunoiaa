"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ratan from "../../../public/Assets/images/ratan.webp";
import jamila from "../../../public/Assets/images/jaimin.webp";
import ganga from "../../../public/Assets/images/ganga.webp";
import mohit from "../../../public/Assets/images/mohit.webp";
import achal from "../../../public/Assets/images/achal.webp";
import nemish from "../../../public/Assets/images/nemish.webp";
import kshitij from "../../../public/Assets/images/kshitij.webp";
import Slider from "../Home/slider";

const teams = () => {
  const teamCards = [
    {
      id: 1,
      name: "Ar. Ratan Baltiboi",
      role: "Owner at Ratan J Baltiboi Architects",
      image: ratan,
      description:
        "A master architect with a 40-year career marked by groundbreaking design, unwavering commitment to sustainability, and a belief in challenging conventions.",
    },
    {
      id: 2,
      name: "Dr. Jamila Varawala",
      role: "Member of Board of Studies at Avantika University of Ujjain",
      image: jamila,
      description:
        "A passionate educator and design thinker, Dr. Jamila Varamala finds her deepest fulfilment in guiding young minds. ",
    },
    {
      id: 3,
      name: "Ganga Kadakia",
      role: "Founder of Art Village",
      image: ganga,
      description:
        "A versatile Artist and Founder member of 'Art Village' in Karjat, Mumbai, is a prolific force in the world of art. ",
    },
    {
      id: 4,
      name: "Mohit Gulati",
      role: "Managing Partner & CIO at ITI Growth",
      image: mohit,
      description:
        "Mohit has over 13 years of global alternative asset expertise fuelled by a passion for helping entrepreneurs build transformative businesses.",
    },
    {
      id: 5,
      name: "Nemish Sanghvi",
      role: "Founder At WE Hospitality",
      image: nemish,
      description:
        "A veteran with over 25 years of experience in the Wedding, Entertainment, and Hospitality industry.",
    },
    {
      id: 6,
      name: "Adv. Kshitij Sancheti",
      role: "Founder at Settle Legal, Advocates",
      image: kshitij,
      description:
        "We design merchandise systems – everyday, premium, and seasonal, that make your brand wearable and collectible.",
    },
    {
      id: 7,
      name: "Achal Patel",
      role: "CEO, Co–founder at EWYA",
      image: achal,
      description:
        "Achal commenced her professional journey as a Developer at Riktam Technologoies, specializing in software and application development.",
    },
  ];

  return (
    <div>
      <section className="bg-[#002855] py-16">
        <div className="container mx-auto px-4">
          {/* Advisory Panel Heading */}
          <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12 text-[#1B51FF]">
            Advisory Panel
          </h2>

          <Swiper
            spaceBetween={24}
            slidesPerView={1}
            navigation={false}
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
          >
            {teamCards.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="text-white">
                  <div className="overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`Team member ${member.id}`}
                      width={150}
                      height={250}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="text-center">
                    <p className="mt-4 italic">{member.name}</p>
                    <p className="mt-4">{member.role}</p>
                    <p className="mt-3 text-sm opacity-80">
                      {member.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Slider />
    </div>
  );
};

export default teams;
