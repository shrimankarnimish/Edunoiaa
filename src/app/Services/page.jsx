import React from "react";
import Image from "next/image";
import Servicebanner from "../../../public/Assets/images/Services_banner.jpg";
import Whatweoffer from "./whatweoffer";

import ServicesModules from "./servicesmodules";
import ServicesModules2 from "./servicesmodules2";
import Slider from "./slider";

const Services = () => {
  return (
    <>
       <section className="relative min-h-screen flex items-center justify-start">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={Servicebanner}
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
                <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
                  Meet the people shaping the <br className="br-hide" />
                  future of education branding <br className="br-hide" />
                </h1>
              </div>
            </div>
          </section>
      <Whatweoffer />

      <ServicesModules />
      <ServicesModules2 />
      {/* CASE STUDY SECTION */}

      <Slider />
    </>
  );
};

export default Services;
