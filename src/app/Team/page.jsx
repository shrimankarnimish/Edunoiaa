import React from 'react';
import Image from 'next/image';
import Teams from "./teams";
import Team from "../../../public/Assets/images/team.jpg"
import Ekta from "../../../public/Assets/images/Ekta.jpg"
import Meghan from "../../../public/Assets/images/Meghan.jpg"
import Kunal from "../../../public/Assets/images/Kunal.jpg"

const TeamSection = () => {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-start">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={Team}
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


            {/* OUR TEAM SECTION */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="mx-auto container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

                        {/* Left Column */}
                        <div className="space-y-4 lg:space-y-6">
                            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                OUR TEAM
                            </p>
                            <p className="p-grey">
                                Edunoia brings together a team of strategists, designers, educators, and researchers united by one mission:
                            </p>
                            <h2 className="h-blue">
                                To make learning<br /> institutions truly inspiring.
                            </h2>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 lg:space-y-8">
                            {/* Empty space element - clean and semantic */}
                            <div className="h-0 lg:h-20"></div>

                            <p className='p-grey pt-6 lg:pt-8 mt-12 lg:mt-14 xl:mt-10'> {/* Added top padding */}
                                Our leadership team includes Partners and Directors who also teach at leading
                                academic institutions, bringing insider understanding and empathy to every project.

                            </p>
                            <p className='p-grey pt-6 lg:pt-2'>
                                We're also supported by an <strong>Expert Advisory Panel</strong>  of academicians, institution builders,
                                curriculum experts, psychologists, and counsellors who ensure every brand we build is
                                grounded in educational relevance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Photos Section */}
            <section className="w-full py-12 md:py-16 lg:py-20">
                <div className="mx-auto container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">

                        {/* Person 1 - Kunal Vora */}
                        <div className="space-y-6 lg:space-y-8">
                            {/* Image */}
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src={Kunal}
                                    alt="Kunal Vora - Co-founder & Partner"
                                />
                            </div>

                            <div className="space-y-4 lg:space-y-6">
                                <div>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        Kunal Vora
                                    </p>
                                    <p className="p-italic-dblue">
                                        Co-founder & Partner
                                    </p>
                                </div>
                                <p className="p-blue">
                                    A brand thinker who understands education from the inside, as a strategist, advisor, and long-time educator.
                                </p>
                            </div>
                        </div>

                        {/* Person 2 - Maghan Varkey */}
                        <div className="space-y-6 lg:space-y-8">
                            {/* Image */}
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src={Meghan}
                                    alt="Maghan Varkey - Co-founder & Strategy Director"
                                />
                            </div>

                            <div className="space-y-4 lg:space-y-6">
                                <div>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        Maghan Varkey
                                    </p>
                                    <p className="p-italic-dblue">
                                        Co-founder & Strategy Director
                                    </p>
                                </div>
                                <p className="p-blue">
                                    Branding expert with deep experience across education and gas sectors, backed by a strong foundation in business administration, marketing strategy, and human resource management.
                                </p>
                            </div>
                        </div>

                        {/* Person 3 - Ekta Banodkar */}
                        <div className="space-y-6 lg:space-y-8">
                            {/* Image */}
                            <div className="aspect-square overflow-hidden rounded-lg">
                                <Image
                                    src={Ekta}
                                    alt="Ekta Banodkar - Creative Director"

                                />
                            </div>

                            <div className="space-y-4 lg:space-y-6">
                                <div>
                                    <p className="text-xl lg:text-2xl font-bold text-gray-900">
                                        Ekta Banodkar
                                    </p>
                                    <p className="p-italic-dblue">
                                        Creative Director
                                    </p>
                                </div>
                                <p className="p-blue">
                                    Brand practitioner with 15+ years of experience across education and diverse industries, backed by a strong foundation in identity systems, design leadership, and creative strategy.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Teams/>


        </>


    )
}

export default TeamSection;