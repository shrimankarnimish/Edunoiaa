"use client";

import React from "react";
import ContactForm from "../Components/Contactform";
import backgroundImage from "../../../public/Assets/images/contact_img.jpg"
import Image from "next/image";

const Contact = () => {
  return (
    <>
        <section className="relative service-section contact-main-container w-full flex items-end mt-15_old">
           <div className="absolute inset-0 z-0">
             <Image
               src={backgroundImage}
               alt="Background"
               placeholder="blur"
               fill
               className="object-cover"
               priority
             />
           </div>
   
           <div className="relative z-10">
            <div className="container mx-auto pb-10">
              <div className="d-flex">
                <div className="text-lg lg:text-xl mb-8 text-gray-200">
                  <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light mb-5">
                  India&apos;s First and Only Brand Consultancy for the Education Sector
                  </h1>
                  <p className="mb-2">With over a decade of experience in creating and working with numerous prolific educational brands, we established Edunoia in 2020.</p>
                  <p> Edunoia offers advisory services, brand thinking and communication strategies to a broad cross-section of education institutions, EdTech companies, and other learning and development units in businesses.</p>
                </div>
                 <ContactForm />
              </div>
            </div>
           </div>
         </section>
         <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.234511535598!2d72.8569272!3d19.1160496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62291442fb9%3A0x821a17fcf7de925f!2sABND%20-%20Branding%20Agency!5e0!3m2!1sen!2sin!4v1691127616974!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
         </section>
         </>
  );
};

export default Contact;