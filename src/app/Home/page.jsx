import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/Assets/images/image 1.jpg";
import counter2 from "../../../public/Assets/images/counter2.jpg";
import WhyEdunoia from "./whyEdunoia";
import Modules from "./modules";
import CaseStudy from "../Components/Casestudy";
import Slider from "./slider";
import { Fadeinleft,Fadeinright } from "../Components/Animations";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-start">
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
          {/* <div className="absolute inset-0 bg-black/40"></div> */}
        </div>
        <div className="relative z-5 container mx-auto">
          <Fadeinright>
          <div className="max-w-6xl">
            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
              India's first and only brand <br className="br-hide" />
              consultancy dedicated exclusively <br className="br-hide" />
              to education
            </h1>

            {/* CTA Buttons - Exact styling from first image */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
             <button class="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out tracking-wide uppercase cursor-pointer text-sm sm:text-base hover:scale-105">
                START YOUR INSTITUTIONS JOURNEY
              </button>

              <button class="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out tracking-wide uppercase cursor-pointer text-sm sm:text-base hover:scale-105">
                BOOK A DISCOVERY CALL
              </button>
            </div>
          </div>
          </Fadeinright>
        </div>
      </section>
      {/* WHY EDUNOIA Start */}
   
      <WhyEdunoia />
     
      {/* WHY EDUNOIA END */}

      <section style={{ background: "#66AEF1" }} className="py-10">
        <div className="container mx-auto w-full py-12 md:py-16 lg:py-20">
          <Image src={counter2} alt="Counter image" />
        </div>
      </section>

      {/* WHAT WE DO START */}

      {/* WHAT WE DO END */}

      <section className="what-we-do-container">
        <div className="mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            {/* LEFT CONTENT */}
            <Fadeinright>
            <div className="space-y-8 cust-padding-left pt-24 pb-24 lg:pt-36 lg:pb-40">
              <div className="space-y-3">
                <p className="text-[18px] sm:text-[20px] lg:text-2xl font-bold text-gray-900">
                  WHAT WE DO
                </p>
                <h2 className="h-blue responsive-hblue">
                  Branding that builds <br />
                  credible, relevant, and <br />
                  inspiring institutions
                </h2>
              </div>
              <p className="p-grey responsive-pgrey">
                We offer end-to-end branding services as well as proprietary
                tailored modules specifically developed for the education
                sector.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 mt-4 text-lg">
                VIEW DETAILS
              </button>
            </div>
            </Fadeinright>
            {/* RIGHT CONTENT */}
          
            <div
              className="space-y-8 second-padding-right pt-24 pb-24 lg:pt-36 lg:pb-40"
              style={{
                backgroundImage: `url("/Assets/images/blurBG.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              
              <div className="space-y-3">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 invisible">
                  WHAT WE DO
                </p>

                <h3 className="text-[28px] sm:text-[32px] lg:text-[40px] text-white font-medium leading-tight">
                  Bespoke Brand Consulting
                </h3>
              </div>
              <Fadeinleft>
              <p className="text-[18px] sm:text-[20px] lg:text-[24px] text-white  leading-relaxed">
                End-to-end branding solutions, covering everything from research
                and brand strategy to verbal and visual identity.
              </p>
              </Fadeinleft>

              <div
                className="h-0.5 w-full"
                style={{ backgroundColor: "#1B51FF" }}
              />
             <Fadeinleft> 
              <ul className="space-y-1 text-white text-[18px] sm:text-[20px] lg:text-[24px] italic leading-snug">
               
                <li>
                  <h6>Research, Analysis & Insights</h6>
                </li>
                <li>
                  <h6>Brand Purpose, Positioning & Strategy</h6>
                </li>
                <li>
                  <h6>Brand & Portfolio Architecture</h6>
                </li>
                <li>
                  <h6>Naming & Verbal Identity</h6>
                </li>
                <li>
                  <h6>Visual Identity</h6>
                </li>
                <li>
                  <h6>Brand Communication</h6>
                </li>
                <li>
                  <h6>Brand Experiences</h6>
                </li>
                <li>
                  <h6>Brand Guidelines & Toolkits</h6>
                </li>
              </ul>
              </Fadeinleft>
            </div>
          
          </div>
        </div>
      </section>
      <Modules />
      {/* CASE STUDY SECTION */}
      <CaseStudy />

      <Slider />
    </>
  );
};

export default HeroSection;
