import React from 'react';
import Image from 'next/image';
import Servicebanner from "../../../public/Assets/images/Services_banner.jpg"
import Whatweoffer from './whatweoffer';

import ServicesModules from './servicesmodules';
import ServicesModules2 from './servicesmodules2';
import Slider from './slider'

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
                    priority />
                {/* Darker overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
        </section>
            <Whatweoffer />
    

            <ServicesModules />
            <ServicesModules2/>
            {/* CASE STUDY SECTION */}
           
        <Slider/>
        </>
    );
};

export default Services;