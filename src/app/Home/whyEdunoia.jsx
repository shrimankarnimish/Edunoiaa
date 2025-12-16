'use client';
import React from 'react';
import Image from 'next/image';
import Flame from "../../../public/Assets/images/ClientLogos/flame.svg"
import yashbirla from "../../../public/Assets/images/ClientLogos/yashBirla.svg"
import londonschool from "../../../public/Assets/images/ClientLogos/londonschool.svg"
import isbr from "../../../public/Assets/images/ClientLogos/isbr.svg"

const WhyEdunoia = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20">
            <div className="mx-auto container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

                    {/* Left Column */}
                    <div className="space-y-4 lg:space-y-6">
                        {/* Main Heading */}
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                            WHY EDUNOIA
                        </p>

                        {/* Sub Heading */}
                        <h2 className="h-blue">
                            Because education deserves<br /> its own brand language.
                        </h2>
                    </div>
                    {/* Right Column */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Description Text */}
                        <p className="p-grey"  >
                            For 15+ years, ABND has built some of India's most respected educational brands.
                            Edunoia is the next step, designed to help schools, universities, and EdTech
                            players find their voice, sharpen their identity, and stand out with clarity
                            and purpose.
                        </p>
                        {/* Logos Section with Lines */}
                        <div className="pt-6 lg:pt-8 w-full overflow-hidden">

                            {/* Top Line */}
                            <div className="w-full h-[2px] bg-[#1B51FF]">    </div>

                            {/* Infinite Carousel */}
                            <div className="overflow-hidden w-full py-4 lg:py-6">
                                <div className="animate-slide flex w-max">

                                    {/* Slide 1 */}
                                    <div className="flex gap-16 px-8">
                                        <Image src={Flame} className="object-contain" />
                                        <Image src={londonschool} className="object-contain" />
                                        <Image src={isbr} className="object-contain" />
                                        <Image src={yashbirla} className="object-contain" />
                                    </div>

                                    {/* Slide 2 (duplicate for infinite loop) */}
                                    <div className="flex gap-16 px-8">
                                        <Image src={Flame} className="object-contain" />
                                        <Image src={londonschool} className="object-contain" />
                                        <Image src={isbr} className="object-contain" />
                                        <Image src={yashbirla} className="object-contain" />
                                    </div>

                                </div>
                            </div>

                            {/* Bottom Line */}
                            <div className="w-full h-[2px] bg-[#1B51FF]"></div>
                        </div>
                        {/* Know More Button */}
                        <div className="pt-2 lg:pt-4">
                            <button className="py-2 text-lg lg:text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity text-[#1B51FF]">
                                KNOW MORE
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyEdunoia;