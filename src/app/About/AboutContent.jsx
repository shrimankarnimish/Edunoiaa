"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import backgroundImage from "../../../public/Assets/images/About_banner.jpg";
import Aboutus from "./aboutus";
import counter2 from "../../../public/Assets/images/counter.png";
import Slider from "../Home/slider";
import { Fadeinright, Fadeinleft, FadeUpCard } from "../Components/Animations";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div>
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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-5 container mx-auto">
            <Fadeinright>
              <div className="max-w-6xl">
                <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
                  <span className="font-bold block">We understand </span>
                  <span className="font-bold block">
                    the education sector inside out
                  </span>
                </h1>
                {/* CTA Buttons - Exact styling from first image */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
                  <Link href="/services" className="w-full sm:w-auto">
                    <button
                      className="font-body w-full sm:w-auto bg-white text-[#1B51FF] hover:bg-gray-50
                 font-semibold py-3 px-8 transition duration-200 ease-in-out
                 tracking-wide uppercase cursor-pointer text-sm sm:text-base
                 hover:scale-105 text-center"
                    >
                      START YOUR INSTITUTIONS JOURNEY
                    </button>
                  </Link>

                  <Link href="/contact" className="w-full sm:w-auto">
                    <button
                      className="font-body w-full sm:w-auto bg-white text-[#1B51FF] hover:bg-gray-50
                 font-semibold py-3 px-8 transition duration-200 ease-in-out
                 tracking-wide uppercase cursor-pointer text-sm sm:text-base
                 hover:scale-105 text-center"
                    >
                      BOOK A DISCOVERY CALL
                    </button>
                  </Link>
                </div>
              </div>
            </Fadeinright>
          </div>
        </section>
        <Aboutus />
     <section style={{ background: "#66AEF1" }} className="py-10">
        <div className="container mx-auto w-full py-12 md:py-16 lg:py-20">
          {/* Video with controls */}
          <video className="w-full h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Assets/images/video1.mp4" />


          </video>
        </div>
      </section>
      </div>
      {/* What we do */}
      <section className="what-we-do-conatiner">
        <div className="mx-auto">
          {/* v-border  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8 cust-padding-left md:pb-40 sm:pb-10 pt-36">
              {/* Heading */}
              <div className="space-y-6">
                <Fadeinleft>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    WHAT WE DO
                  </p>
                  <h2 className="h-blue">
                    Branding for every stage of
                    an institution’s journey.
                  </h2>
                </Fadeinleft>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <Fadeinleft>
                  <p className="p-grey">
                    Whether you’re building a new university, repositioning a
                    school, or scaling an EdTech brand, Edunoia brings focus,
                    consistency, and credibility to every step.
                  </p>
                </Fadeinleft>
              </div>
              <Link href="/services">
                <FadeUpCard>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 mt-8 text-lg transition duration-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                    OUR SERVICES
                  </button>
                </FadeUpCard>
              </Link>
            </div>
            {/* Right Column - Image/Visual Content */}
            <div className="space-y-8 second-padding-right pb-25 pt-25">
              {/* Heading */}
              <div className="space-y-4">
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900"
                  style={{ visibility: "hidden" }}
                >
                  WHAT WE DO
                </p>

                <h3 className="p3-italic">We work with</h3>
                {[
                  "New schools, universities, and EdTech startups building from scratch",
                  "Established institutions looking to refresh or reposition",
                  "Groups expanding into new territories or verticals.",
                  "Corporate learning units building internal academies.",
                ].map((text, index) => (
                  <motion.h3
                    key={index}
                    className="p3-italic"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {text}
                  </motion.h3>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What we do endddd*/}
      <section className="what-we-do-container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div
            className="h-full min-h-[800px] w-full"
            style={{
              backgroundImage: `url("/Assets/images/Group.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* RIGHT BLUE SECTION */}

          <div
            className="flex flex-col justify-center px-10 py-20"
            style={{
              backgroundImage: `url("/Assets/images/bluereactangle.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-top  px-8 sm:px-12 lg:px-20 py-20 text-white space-y-8 second-padding-right">
              <Fadeinright>
                <p
                  className="text-[20px] font-semibold tracking-wider opacity-80 font-bold"
                  style={{ color: "#002855" }}
                >
                  CORE TEAM
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-xl">
                  Our team includes brand strategists, designers, and industry
                  experts who teach at reputed institutions.
                </h2>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Link href="/team">
                    <button className="bg-white text-blue-700 cursor-pointer font-semibold px-6 py-3 text-sm sm:text-base hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
                      MEET OUR TEAM
                    </button>
                  </Link>

                  <Link href="/contact">
                    <button className="bg-white text-blue-700 cursor-pointer font-semibold px-6 py-3 text-sm sm:text-base hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out">
                      JOIN OUR TEAM
                    </button>
                  </Link>
                </div>
              </Fadeinright>
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default About;
