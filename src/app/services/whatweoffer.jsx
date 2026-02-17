'use client';
import React from 'react';
import { Fadein,Fadeinleft,Fadeinright } from '../Components/Animations';

const Whatweoffer = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="mx-auto container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">

                    {/* Left Column */}
                    <div className="space-y-4 lg:space-y-6">
                        <Fadeinleft>
                        {/* Main Heading */}
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                           WHAT WE OFFER
                        </p>

                        {/* Sub Heading */}
                        <h2 className="h-blue leading-1">
                            Branding that builds<br/> credible relevant, and <br/>inspiring institutions.
                        </h2>
                        </Fadeinleft>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6 lg:space-y-8">
                        <Fadeinright>
                        {/* Description Text */}
                        <p  className="p-grey">
                           Every institution is unique, but the challenges are often the same: relevance, credibility, and clarity. We help you solve them through strategy, design, and storytelling.
                        </p>
                        <p className="p-grey">At Edunoia, we offer bespoke brand consulting as well as tailored modules specifically developed for the education sector</p>
                        </Fadeinright>
                    </div>  

                </div>
            </div>
        </section>
    );
};

export default Whatweoffer;