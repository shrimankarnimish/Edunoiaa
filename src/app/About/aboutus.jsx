'use client';
import React from 'react';

const WhyEdunoia = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 ">
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
                            Because education deserves<br/> its own brand language.
                        </h2>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:space-y-8">
                        {/* Description Text */}
                        <p
                            className="p-grey"
                           
                        >
                            For 15+ years, ABND has built some of India's most respected educational brands.
                            Edunoia is the next step, designed to help schools, universities, and EdTech
                            players find their voice, sharpen their identity, and stand out with clarity
                            and purpose.
                        </p>
                           <p  className="p-grey">
                            For 15+ years, ABND has built some of India's most respected educational brands.
                            Edunoia is the next step, designed to help schools, universities, and EdTech
                            players find their voice, sharpen their identity, and stand out with clarity
                            and purpose.
                        </p>
                        <p className='p-grey'>Edunoia exists to ensure that the excellence you build is recognised, valued, and trusted.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyEdunoia;