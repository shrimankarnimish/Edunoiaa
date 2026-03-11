import React from "react";
import backgroundImage from "../../../../public/Assets/images/About_banner.jpg";
import Image from "next/image";
import Service1 from "../../../../public/Assets/images/Teammeeting.jpg";
import bluegradient from "../../../../public/Assets/images/bluegradient1.jpg";
import Slider from "../../Home/slider";

const inside_service1 = () => {
  return (
    <div>
      <section className="relative flex items-center justify-start md-height-650">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-5 container mx-auto">
          <div className="max-w-6xl">
            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white">
              Edunoia Legacy™
            </h6>

            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light font-bold">
              IP Development for
              <br /> Events & Summits
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column */}
            <div className="space-y-4 lg:space-y-6">
              <h2 className="h-blue">
                Build your own annual
                <br /> thought-leadership property.
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              {/* Description Text */}
              <h6 className="p-grey italic font-semibold">
                Legacy™ helps you design, name, and launch signature events that
                become synonymous with your institution, summits, festivals, or
                academic forums that grow in reputation every year.
              </h6>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY SECTION BELOW */}
      <div className="container mx-auto ">
        <div className="py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <div className="relative lg:sticky lg:top-50">
                <Image
                  src={Service1}
                  alt="Team meeting"
                  className="w-[70vh] h-auto max-h-[500px] lg:max-h-[650px] object-cover shadow-lg"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-1/2 space-y-10 mt-12 lg:top-50">
              {/* Ideal For */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  IDEAL FOR
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855] leading-snug">
                  Institutions ready <br className="hidden sm:block" /> to build
                  visibility and industry credibility.
                </h6>
              </div>

              {/* Problem Solved */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  PROBLEM SOLVED
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855] leading-snug">
                  One-off events
                  <br className="hidden sm:block" /> that fail to
                  <br className="hidden sm:block" /> build long-term equity.
                </h6>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  TIMELINE
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855]">
                  7 weeks
                </h6>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  DELIVERABLES
                </p>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855]">
                  Event IP Strategy
                </h6>
                {/* <p className="p-blue mt-5">
                  Theme, Audience, Positioning{" "}
                </p> */}
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mt-5">
                  Theme, Audience, Positioning
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Event Naming & Identity System
                </h6>
                {/* <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p> */}
                {/* <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  3–5 researched, conflict-free options
                </p> */}
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Communication Kit
                </h6>
                {/* <p className="p-blue mt-5">
                  Invite, Social Media, Event Website Wireframe{" "}
                </p> */}
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mt-5">
                  Invite, Social Media, Event Website Wireframe
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Sponsorship Deck Template
                </h6>
                {/* <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p> */}
                {/* <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Tone, tagline, admissions messaging
                </p> */}
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Annual Continuity Playbook
                </h6>
                {/* <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p> */}
                {/* <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Logo, design system, color palette, typography
                </p> */}
                <div className="border-line-grey"></div>
                {/* <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Launch Collateral Kit
                </h6>
                <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Stationery, brochure, social templates, website wireframe
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Launch Collateral Kit
                </h6>
                <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Stationery, brochure, social templates, website wireframe
                </p>
                <div className="border-line-grey"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STICKY SECTION END */}

      <div className="w-full py-12 md:py-16 lg:py-20 ">
        <div className=" mx-auto container">
          <div className="relative w-full  overflow-hidden min-h-[250px] md:min-h-[300px] md:pl-45">
            {/* Background Image using Next.js Image */}
            <Image
              src={bluegradient}
              alt="Outcome background"
              fill
              className="object-cover"
              priority
            />

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0  opacity-90 z-10"></div>

            {/* Content */}
            <div className="relative z-20 px-6 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
              <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mb-5">
                OUTCOME
              </p>
              <h3 className="text-[28px] sm:text-[32px] lg:text-[40px] text-white font-medium leading-tight">
                An ownable event property
                <br /> that builds brand authority and recognition.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default inside_service1;
