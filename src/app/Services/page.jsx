"use client";
import React from "react";
import Image from "next/image";
import Servicebanner from "../../../public/Assets/images/services.jpg";
import Whatweoffer from "./whatweoffer";
import ServicesModules2 from "./servicesmodules2";
import Slider from "./slider";
import { motion } from "framer-motion";
import { Fadeinright, Fadeinleft } from "../Components/Animations";
import Service2 from "../../../public/Assets/images/service2.jpg";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="relative service-section w-full flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={Servicebanner}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Optional overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto pb-40">
          <Fadeinright>
            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
              Bespoke Brand Consulting
              <br className="br-hide" /> Transformation.
            </h1>
          </Fadeinright>
        </div>
      </section>

      <Whatweoffer />

      {/* What we do */}

      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={Service2}
            alt="Service Background"
            fill
            priority
            className="object-cover"
          />
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 what-we-do-conatiner">
          <div className="mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
              {/* Left Column */}
              <div className="space-y-8 cust-padding-left pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-24 md:pb-40">
                <Fadeinleft>
                  <h2 className=" text-white  text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                    {" "}
                    Bespoke Brand Consulting
                  </h2>
                  <h6 className="whiteh4 italic ">
                    End-to-end branding
                    <br /> solutions, covering everything
                    <br /> from research and brand
                    <br /> strategy to verbal and visual
                    <br /> identity.
                  </h6>
                  <Link href="/Bespokemodules">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 mt-8 text-lg transition duration-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
                      VIEW DETAILS
                    </button>
                  </Link>
                </Fadeinleft>
              </div>
              {/* Right Column */}
              <div className="pt-24 sm:pt-28 md:pt-36 pb-16 sm:pb-24 md:pb-40 px-4 sm:px-6 lg:px-0">
                <div className="max-w-3xl space-y-2 sm:space-y-3 md:space-y-4">
                  {[
                    "Research, Analysis & Insights",
                    "Brand Purpose, Positioning & Strategy",
                    "Brand & Portfolio Architecture",
                    "Naming & Verbal Identity",
                    "Visual Identity",
                    "Brand Communication",
                    "Brand Experiences",
                    "Brand Guidelines & Toolkits",
                  ].map((text, index) => (
                    <motion.h2
                      key={index}
                      className="text-white font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {text}
                    </motion.h2>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What we do endddd*/}

      <ServicesModules2 />
      {/* CASE STUDY SECTION */}

      <Slider />
    </>
  );
};

export default Services;
