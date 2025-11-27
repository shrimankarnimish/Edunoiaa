import React from 'react';
import Image from 'next/image';
import backgroundImage from "../../../public/Assets/images/image 1.jpg";
import counter2 from "../../../public/Assets/images/counter2.jpg";
import bluebg from "../../../public/Assets/images/blurBG.jpg"
import homeBanner from "../../../public/Assets/images/homeBanner.jpg";



import WhyEdunoia from './whyEdunoia';
import Modules from './modules';
import Slider from './slider';

const HeroSection = () => {
    return (
        <><section className="relative min-h-screen flex items-center justify-start">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-5 container mx-auto">
                <div className="max-w-6xl">
                    <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
                        <span className="font-bold block">India's first and only brand</span>
                        <span className="font-bold block">consultancy dedicated exclusively</span>
                        <span className="font-bold block">to education</span>
                    </h1>

                    {/* CTA Buttons - Exact styling from first image */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-12">
                        <button className="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out text-base tracking-wide uppercase cursor-pointer">
                            START YOUR INSTITUTIONS JOURNEY
                        </button>
                        <button className="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out text-base tracking-wide uppercase cursor-pointer">
                            BOOK A DISCOVERY CALL
                        </button>

                    </div>
                </div>

            </div>
        </section>
            {/* WHY EDUNOIA Start */}
            <WhyEdunoia />
            {/* WHY EDUNOIA END */}

            <section style={{ background: "#66AEF1" }} className="py-10">
                <div className="container mx-auto">
                    <Image
                        src={counter2}
                        alt="Counter image" />
                </div>
            </section>

            {/* WHAT WE DO START */}


            {/* WHAT WE DO END */}

            <section className="what-we-do-conatiner">
                <div className="mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start">


                        {/* Left Column - Text Content */}
                        <div className="space-y-8 cust-padding-left pb-40 pt-36">


                            {/* Heading */}
                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                    WHAT WE DO
                                </p>
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-light"
                                    style={{ color: '#1B51FF' }}>
                                   Branding that builds  credible, relevant, and inspiring institutions
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <h4 className="sm:text-2xl lg:text-3xl text-[24px] leading-relaxed"
                                    style={{ color: '#B7B3B3' }}>
                                    We offer end-to-end branding services ats well as proprietary tailored modules specifically developed for the education sector.
                                </h4>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 text-lg transition duration-200 cursor-pointer">
                                VIEW DETAILS
                            </button>
                        </div>

                        {/* Right Column - Image/Visual Content */}
                        <div
                            className="space-y-8 cust-padding-left pb-40 pt-36"
                            style={{
                                backgroundImage: `url("/Assets/images/blurBG.jpg")`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                        >

                            {/* Heading */}
                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 " style={{ visibility: 'hidden' }}>
                                    WHAT WE DO
                                </p>
                                <h2 className="text-2xl text-white sm:text-3xl lg:text-4xl xl:text-5xl font-medium leading-tight tracking-light mt-10">
                                    Bespoke Brand Consulting
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="space-y-3">
                                <h4 className="text-[24px] text-white italic leading-relaxed">
                                    End-to-end branding solutions, covering everything from research and brand strategy to verbal and visual identity.
                                </h4>
                            </div>
                            <div className="h-0.5 w-full" style={{ backgroundColor: "#1B51FF" }}></div>

                            <ul className="space-y-2 text-white text-2xl sm:text-[24px] italic font-normal leading-snug">
                                <li>Research, Analysis & Insights</li>
                                <li>Brand Purpose, Positioning & Strategy</li>
                                <li>Brand & Portfolio Architecture</li>
                                <li>Naming & Verbal Identity</li>
                                <li>Visual Identity</li>
                                <li>Brand Communication</li>
                                <li>Brand Experiences</li>
                                <li>Brand Guidelines & Toolkits</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>
            <Modules />
            {/* CASE STUDY SECTION */}
            <section className="relative w-full h-screen flex items-center justify-center">

            {/* Background Image */}
            <Image
                src={homeBanner}
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center"
            />


            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <p className="text-white text-xl tracking-widest mb-4 font-medium">
                    FLAME UNIVERSITY
                </p>

                <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-normal">
                    Building India's Pioneers in Liberal Education through a Decade of Partnership
                </h1>

                <button className="mt-4 font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out text-base tracking-wide uppercase cursor-pointer">
                    VIEW CASESTUDY
                </button>
            </div>
        </section>
        <Slider/>
        </>
    );
};

export default HeroSection;