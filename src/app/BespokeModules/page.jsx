import React from "react";
import backgroundImage from "../../../public/Assets/images/bespoke_banner.jpg";
import Image from "next/image";
import Service1 from "../../../public/Assets/images/Teammeeting.jpg";
import Slider from "../Home/slider";

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
        </div>
        <div className="relative z-5 container mx-auto">
          <div className="max-w-6xl">
            {/* <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white">
              Edunoia LaunchPad™
            </h6> */}

            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light font-bold">
              Bespoke Brand
              <br /> Consulting
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
                Launch like a top-tier
                <br /> institution in under XX days.
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              {/* Description Text */}
              <h6 className="p-grey italic font-semibold">
                End-to-end branding solutions, covering everything from research
                and brand strategy to verbal and visual identity.
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
                  New institutions <br className="hidden sm:block" />
                  and edtech startups.
                </h6>
              </div>

              {/* Problem Solved */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  PROBLEM SOLVED
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855] leading-snug">
                  Starting from <br className="hidden sm:block" />
                  scratch without <br className="hidden sm:block" />
                  a brand system <br className="hidden sm:block" />
                  or story.
                </h6>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  TIMELINE
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855]">
                  3-4 Months
                </h6>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  SERVICES
                </p>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855]">
                  Research, Analysis & Insights
                </h6>
                <p className="p-blue mt-5">
                  We start with understanding, your market, stakeholders,  and
                  aspirations. From surveys and workshops to competitive audits,
                  we decode what makes your institution different.
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Brand Purpose, Positioning & Strategy
                </h6>
                <p className="p-blue mt-5">
                  We define your reason to exist. What you stand for, how you’re
                  perceived, and what makes you irreplaceable in the education
                  landscape.
                </p>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  3–5 researched, conflict-free options
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Brand & Portfolio Architecture
                </h6>
                <p className="p-blue mt-5">
                  For groups managing multiple institutions, clarity of
                  structure is critical. We organize your portfolio to maximize
                  equity and minimize confusion.{" "}
                </p>

                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Naming & Verbal Identity
                </h6>
                <p className="p-blue mt-5">
                  We craft names, narratives, and tones that reflect your ethos
                  and stand the test of time. Because a great name doesn’t just
                  sound good, it means something.{" "}
                </p>

                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Visual Identity
                </h6>
                <p className="p-blue mt-5">
                  Design that feels as inspiring as your mission. Logos, colour
                  systems, typography, and applications that make your
                  institution instantly recognizable.{" "}
                </p>

                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Brand Communication
                </h6>
                <p className="p-blue mt-5">
                  We develop messaging frameworks and campaign systems that
                  align your voice, across admissions, alumni relations, and
                  internal culture.{" "}
                </p>

                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Branded Experiences
                </h6>
                <p className="p-blue mt-5">
                  We bring your brand to life in physical spaces, signage,
                  wayfinding, event branding, and spatial storytelling that
                  shape campus experiences.
                </p>
                <div className="border-line-grey"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STICKY SECTION END */}

      <Slider />
    </div>
  );
};

export default inside_service1;
