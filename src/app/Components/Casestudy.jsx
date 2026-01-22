"use client";

import React from "react";
import Image from "next/image";
import homebanner from "../../../public/Assets/images/homeBanner.jpg";
import Link from "next/link";

const CaseStudy = () => {
  return (
    <section className="w-full relative h-[70vh] md:h-screen">
      {/* FULL WIDTH IMAGE */}
      <Image
        src={homebanner}
        alt="Flame University"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}


      {/* TEXT CENTERED */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="text-center text-white max-w-lg">
          <p className="text-2xl tracking-widest uppercase mb-3">
            Flame University
          </p>

          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-5">
            Building India’s Pioneers in Liberal Education through a Decade of Partnership
          </h1>

          <Link href="/flame-university">
            <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold uppercase text-xs sm:text-sm tracking-wide text-center hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">

              VIEW CASESTUDY
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
