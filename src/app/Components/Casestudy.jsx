"use client";

import React from "react";
import Image from "next/image";
import homebanner from "../../../public/Assets/images/homeBanner.jpg";

const CaseStudy = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[70vh] md:h-screen gap-2 mb-5">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={homebanner}
            alt="Flame University"
            fill
            priority
            className="object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/40" /> */}

          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-md">
              <p className="text-xs tracking-widest uppercase mb-3">
                Flame University
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-5">
                Building India’s Pioneers in Liberal Education through a Decade
                of Partnership
              </h2>

              <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide">
                VIEW CASESTUDY
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={homebanner}
            alt="Flame University"
            fill
            className="object-cover"
          />

          {/* <div className="absolute inset-0 bg-black/40" /> */}

          <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
            <div className="text-center text-white max-w-md">
              <p className="text-xs tracking-widest uppercase mb-3">
                Flame University
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-5">
                Building India’s Pioneers in Liberal Education through a Decade
                of Partnership
              </h2>

              <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide">
              VIEW CASESTUDY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
