import React from 'react';
import Image from 'next/image';
import backgroundImage from "../../../public/Assets/images/image 1.jpg";
import Aboutus from "./aboutus"
import counter2 from "../../../public/Assets/images/counter2.jpg"
import Slider from './slider'

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
                            priority />
                        {/* Darker overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>
                    <div className="relative z-5 container mx-auto">
                        <div className="max-w-6xl">
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
                                <span className="font-bold block">
                                    We understand </span>
                                <span className="font-bold block">the education sector inside out</span>

                            </h1>

                            {/* CTA Buttons - Exact styling from first image */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-12">
                                <button className="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out text-base tracking-wide uppercase cursor-pointer">
                                    KNOW MORE ABOUT OUR SERVICES
                                </button>
                                <button className="font-body bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out text-base tracking-wide uppercase cursor-pointer">
                                    BOOK A DISCOVERY CALL
                                </button>

                            </div>
                        </div>

                    </div>
                </section>
                <Aboutus />
                <section style={{ background: "#66AEF1" }} className="py-10">
                    <div className="container mx-auto">
                        <Image
                            src={counter2}
                            alt="Counter image" />
                    </div>
                </section>

            </div>

            {/* What we do */}
            <section className="what-we-do-conatiner">
                <div className="mx-auto">
                    <div className="grid grid-cols-1 v-border lg:grid-cols-2 items-start">
                        {/* Left Column - Text Content */}
                        <div className="space-y-8 cust-padding-left pb-40 pt-36">


                            {/* Heading */}
                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                    WHAT WE DO
                                </p>
                                <h2 className="h-blue">
                                    Branding for every stage of<br /> an institution’s journey.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="p-grey">
                                    Whether you’re building a new university, repositioning a school, or scaling an EdTech brand, Edunoia brings focus, consistency, and credibility to every step.
                                </p>
                            </div>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-7 mt-8 text-lg transition duration-200 cursor-pointer ">
                                OUR SERVICES
                            </button>
                        </div>
                        {/* Right Column - Image/Visual Content */}
                        <div className="space-y-8 cust-padding-left pb-14 pt-36">
                            {/* Heading */}
                            <div className="space-y-4">
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900" style={{ visibility: "hidden" }}>
                                    WHAT WE DO
                                </p>
                                <p className="p-italic mb-4">
                                    We Work With:
                                </p>
                                <p className="p-italic mb-4">
                                    New schools, universities, and EdTech startups building from scratch
                                </p>
                                <p className="p-italic mb-4">
                                    Established institutions looking to refresh or reposition
                                </p>
                                <p className="p-italic mb-4">
                                    Groups expanding into new territories or verticals.
                                </p>
                                <p className="p-italic mb-2">
                                    Corporate learning units building internal academies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* What we do end*/}
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
                        <div className="flex flex-col justify-top  px-8 sm:px-12 lg:px-20 py-20 text-white space-y-8">

                            <p className="text-[20px] font-semibold tracking-wider opacity-80 font-bold" style={{ color: "#002855" }}>
                                CORE TEAM
                            </p>

                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug max-w-xl">
                                Our team includes brand strategists, designers, and industry experts who teach at reputed institutions.
                            </h2>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="bg-white text-blue-700 font-semibold px-6 py-3 text-sm sm:text-base hover:bg-gray-200 transition">
                                    MEET OUR TEAM
                                </button>

                                <button className="bg-white text-blue-700 font-semibold px-6 py-3 text-sm sm:text-base hover:bg-gray-200 transition">
                                    JOIN OUR TEAM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Slider/>





        </>
    )
}

export default About
