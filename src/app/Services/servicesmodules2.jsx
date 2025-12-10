import React from 'react';

const ServiceModules = () => {
    return (
        <section className="bg-[#1B51FF] py-8 sm:py-12 md:py-16 min-h-screen">
            {/* Grid Section */}
            <div className="mx-auto container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
                    {/* Module 1: Edunoia LaunchPad™ */}
                    <div className=" text-white flex flex-col justify-between min-h-[280px] sm:min-h-[300px] pt-8">
                        <div>
                            <div className="mb-3 sm:mb-4 px-1">
                                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-5 lg:text-left">
                                    Tailored<br />Modules
                                </h2>
                                <h6 className="white-h">
                                    Each of our signature products is built to solve real institutional challenges with speed, clarity, and cost-efficiency.
                                </h6>
                                {/* <div className="border-line"></div> */}
                            </div>
                        </div>
                    </div>
                    {/* Module 2: Edunoia Re:Fresh™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia LaunchPad™
                            </h6>
                            <div className="mb-3 sm:mb-4 ">

                                <h4 className="heading-bluee">90-Day<br /> Institution Launch Kit  </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                             Launch like a top-tier institution in under 90 days.
                            </h6>
                            <p className="p-blue">
                            Ideal for new schools, universities, or EdTech ventures. We help you look credible and compelling from day one, with clear positioning, a resonant name, and polished brand assets.
                            </p>
                        </div>
                        <button className="cursor-pointer mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 3: Edunoia AdmitEdge™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Re:Fresh™
                            </h6>
                            <div className="mb-3 sm:mb-4">
                                <h4 className="heading-bluee">
                                    90-Day Rebranding<br/>
                                     Sprint
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                                Reignite your brand before another admissions season passes.
                            </h6>
                            <p className="p-blue">
                               For established institutions losing relevance, this sprint delivers a modern identity, sharper messaging, and renewed trust
                            </p>
                        </div>
                        <button className="cursor-pointer mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 4: Edunoia Connect™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Re:Fresh™
                            </h6>
                            <div className="mb-3 sm:mb-4">
                                <h4 className="heading-bluee">
                                    Admissions<br /> Accelerator
                                </h4>

                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                             Reignite your brand before another admissions season passes.
                            </h6>
                            <p className="p-blue">
                               For established institutions losing relevance, this sprint delivers a modern identity, sharper messaging, and renewed trust.
                            </p>
                        </div>
                        <button className="cursor-pointer mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className=" w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 5: Edunoia Compass™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Connect™
                            </h6>
                            <div className="mb-3 sm:mb-4">
                                <h4 className="heading-bluee">
                                    Alumni & Donor Branding
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                               Turn alumni into lifelong ambassadors and donors.
                            </h6>
                            <p className="p-blue">
                                We design campaigns, engagement kits, and visual identities to strengthen emotional ties and drive giving.
                            </p>
                        </div>
                        <button className="cursor-pointer mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 6: Edunoia Recognition Index (ERI)™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Connect™
                            </h6>
                            <div className="mb-3 sm:mb-4 ">
                                <h4 className="heading-bluee">
                                    Brand Health<br /> Tracker
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                              Measure what truly matters
                            </h6>
                            <p className="p-blue">
                                For established institutions losing relevance, this sprint delivers a modern identity, sharper messaging, and renewed trust.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer  text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 7: Edunoia FacultyFirst™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Recognition Index (ERI™)
                            </h6>

                            <div className="mb-3 sm:mb-4 ">
                                <h4 className="heading-bluee">
                                    Edunoia Recognition Index (ERI™)
                                </h4>
                                <div className="border-line "></div>
                            </div>
                            <h6 className="title">
                                Be recognised as a Great Place to Study.
                            </h6>
                            <p className="p-blue">
                                We certify institutions that excel in academic experience and community satisfaction, backed by real stakeholder data.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer  text-left flex items-center uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 8: Edunoia Wear™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia FacultyFirst™
                            </h6>

                            <div className="mb-3 sm:mb-4">
                                <h4 className="heading-bluee">
                                    Faculty Engagement Program

                                </h4>
                                <div className="border-line"></div>
                            </div>
                            <h6 className="title">
                                Build a faculty that believes, belongs, and becomes your brand’s voice.
                            </h6>
                            <p className="p-blue">
                                We help you articulate your faculty value proposition and craft campaigns that inspire pride and retention.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left cursor-pointer  flex items-center uppercase tracking-wide ">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 9: Edunoia Legacy™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Wear™
                            </h6>

                            <div className="mb-3 sm:mb-4">
                                <h4 className="heading-bluee">
                                    Merchandise & Pride Program
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                                Turn every student into a walking brand ambassador.
                            </h6>
                            <p className="p-blue">
                               We design merchandise systems - everyday, premium, and seasonal, that make your brand wearable and collectible.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center cursor-pointer  uppercase tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Module 10: Edunoia Moments™ */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Legacy™
                            </h6>

                            <div className="mb-3 sm:mb-4 ">
                                <h4 className="heading-bluee">
                                    IP Development for Events & Summits
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                              Create your own intellectual property.
                            </h6>
                            <p className="p-blue">
                              We help you conceptualise and brand annual events that strengthen thought leadership and visibility.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase cursor-pointer tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                    {/* {New Module Added} */}
                    <div className="bg-white text-gray-800 p-4 sm:p-5 md:p-6 shadow-lg flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px] transition-transform hover:scale-105 hover:shadow-xl">
                        <div>
                            <h6 className="text-base sm:text-lg md:text-xl italic font-bold mb-2 text-white-600">
                                Edunoia Moments™
                            </h6>
                            <div className="mb-3 sm:mb-4 ">
                                <h4 className="heading-bluee">
                                    Event Experience Branding
                                </h4>
                                <div className="border-linee"></div>
                            </div>
                            <h6 className="title">
                                Make every milestone a brand moment.
                            </h6>
                            <p className="p-blue">
                                From convocations and orientations to reunions and homecomings, makes them powerful emotional experiences that reflect your brand story.
                            </p>
                        </div>
                        <button className="mt-4 sm:mt-6 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 text-left flex items-center uppercase cursor-pointer tracking-wide">
                            View Details
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* CTA Card */}
                       <div className=" text-gray-800 p-4 sm:p-25 md:p-25 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] md:min-h-[320px]">
                        <div>
                            <h5 className="text-[30px] text-white font-normal mb-4">
                                Explore all our<br /> Branding services
                            </h5>
                            <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceModules;