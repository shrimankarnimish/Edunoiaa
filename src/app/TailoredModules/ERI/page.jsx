import React from "react";
import backgroundImage from "../../../../public/Assets/images/About_banner.jpg"
import Image from "next/image";
import Service1 from "../../../../public/Assets/images/Teammeeting.jpg";
import bluegradient from "../../../../public/Assets/images/bluegradient1.jpg"
import Slider from "../../Home/slider"

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
              Edunoia Compass™
            </h6>

            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light font-bold">
              Edunoia Recognition<br/> Index (ERI™)
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
                Independent recognition for great institutions.
              </h2>
            </div>

            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              {/* Description Text */}
              <h6 className="p-grey italic font-semibold">
              ERI™ is a proprietary certification framework by Edunoia that validates institutions as inspiring places to learn, teach, and grow. It’s credibility earned through insight, not just perception.
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
                  Ambitious institutions seeking<br/> trust and visibility.
                </h6>
              </div>

              {/* Problem Solved */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  PROBLEM SOLVED
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855] leading-snug">
                   Lack of third-party<br className="hidden sm:block" /> validation and recognition.
                </h6>
              </div>

              {/* Timeline */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  TIMELINE
                </p>
                <h6 className="mt-4 text-xl sm:text-2xl lg:text-3xl font-black text-[#002855]">
                  8 weeks
                </h6>
              </div>

              {/* Deliverables */}
              <div>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  DELIVERABLES
                </p>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855]">
                  Institutional Brand Audit (via Edunoia Compass™)
                </h6>
                {/* <p className="p-blue mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum{" "}
                </p> */}
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                Score-based Evaluation
                </h6>
                {/* <p className="p-blue mt-5">
                 5-Pillar Performance Overview{" "}
                </p> */}
                {/* <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  3–5 researched, conflict-free options
                </p> */}
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Official ERI™ Certificate & Badge (valid for 1 year)
                </h6>
                {/* <p className="p-blue mt-5">
                  Ads, Brochure, Social Posts, Landing Page Wireframe, Video
                  Script Outline{" "}
                </p> */}
                {/* <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Tone, tagline, admissions messaging
                </p> */}
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Press Kit 
                </h6>
                {/* <p className="p-blue mt-5">
                  Staff Launch, Signage, Presentations{" "}
                </p> */}
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest mt-5">
                  Certificate, Media Template, Social Toolkit
                </p>
                <div className="border-line-grey"></div>
                <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                 Listing on Edunoia’s public recognition portal
                </h6>
                {/* <p className="p-blue mt-5">
                  Certificate, Media Template, Social Toolkit{" "}
                </p>
                <p className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-widest">
                  Logo, design system, color palette, typography
                </p> */}
                <div className="border-line-grey"></div>
                {/* <h6 className="mt-4 text-lg sm:text-xl italic lg:text-2xl font-semibold text-[#002855] mt-9">
                  Listing on Edunoia’s public recognition portal
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
                 Third-party validation<br/> that enhances credibility, builds trust, and boosts admissions appeal.
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
