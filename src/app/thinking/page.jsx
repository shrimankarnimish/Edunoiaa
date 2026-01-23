import React from "react";
import Image from "next/image";
import backgroundImage from "../../../public/Assets/images/thinking_banner.jpg";
// Import your thumbnail images here. Example:
 import thumbnail1 from "../../../public/Assets/images/thumbnail1.webp";
 import thumbnail2 from "../../../public/Assets/images/thumbnail2.webp";
 import thumbnail3 from "../../../public/Assets/images/thumbnail3.webp";
 import { Fadeinleft,Fadeinright,FadeUpCard,SlideFadeLeft } from "../Components/Animations";
 import Link from "next/link";

const page = () => {
  return (
    <div>
      <section className="relative service-section w-full flex items-end mt-15">
           {/* Background Image */}
           <div className="absolute inset-0 z-0">
             <Image
               src={backgroundImage}
               alt="Background"
               fill
               className="object-cover"
               priority
             />
             {/* Optional overlay */}
           </div>
   
           {/* Content */}
           <div className="relative z-10 container mx-auto pb-40">
             <Fadeinright>
               <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
                 Thought leadership that shapes   <br className="br-hide" /> the future of education branding.
              
               </h1>
             </Fadeinright>
           </div>
         </section>

      <div className="w-full bg-white py-20">
        <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 container">
          {/* Left Content */}
          <div className="text-gray-300 space-y-10">
            <Fadeinleft>
            <p className="p-grey">
              At Edunoia, we believe in sharing knowledge. Our insights,
              research papers, and reading lists explore what's next in
              branding, communication, and learning.
            </p>

            <p className="p-grey">
              From understanding Gen Z enrolment behaviour to decoding the new
              NEP's brand impact, we're constantly studying the shifts shaping
              education.
            </p>
            </Fadeinleft>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-start lg:items-start container">
            <Fadeinright>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#002855] mb-6">
              STAY TUNED FOR
            </h3>

            <ul className="space-y-4">
              <li>
                <h3 className="text-base sm:text-lg md:text-xl font-bold italic text-[#1B51FF]">
                  • Articles &amp; blogs
                </h3>
              </li>
              <li>
                <h3 className="text-base sm:text-lg md:text-xl font-bold italic text-[#1B51FF]">
                  • Curated book recommendations
                </h3>
              </li>
              <li>
                <h3 className="text-base sm:text-lg md:text-xl font-bold italic text-[#1B51FF]">
                  • Whitepapers &amp; case studies
                </h3>
              </li>
              <li>
                <h3 className="text-base sm:text-lg md:text-xl font-bold italic text-[#1B51FF]">
                  • Event updates
                </h3>
              </li>
            </ul>
            </Fadeinright>
          </div>
        </div>

        {/* Thumbnail Section - Added below the grid */}
        <div className="mx-auto px-6 container mt-16">
          <FadeUpCard>
          {/* Main Title */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Thumbnail 1 */}
            <div className="space-y-4">
              {/* Replace with your actual image */}
              <a href="https://abnd.in/thinking/edunoia/geopolitical-shift-at-brics-how-the-2025-summit-is-revamping-indias-educational-ambitions">
              <div className="relative h-64 w-full  overflow-hidden">
                <Image
                  src={thumbnail1} // Replace with your image import
                  alt="Geopolitical Shift at BRICS Summit"
                  fill
                  className="object-cover"
                />
              </div>
              </a>
              <div>
                {/* <h3 className="text-lg font-bold text-[#002855] mb-2">
                  NEW EDUCATION MODEL
                </h3> */}
                <h4 className="text-xl font-bold text-[#002855] mt-5">
                  Geopolitical Shift at BRICS: How the 2025 Summit Is Revamping India's Educational Ambitions
                </h4>
                <p className="text-gray-600 mt-2">
                  The 2025 BRICS Summit marked a major shift in educational leadership from the West to the Global South.
                </p>
              </div>
            </div>

            {/* Thumbnail 2 */}
            <div className="space-y-4">
              {/* Replace with your actual image */}
              <a href="https://abnd.in/thinking/edunoia/meeras-triumphilluminating-the-path-to-educational-equality-in-rural-india">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={thumbnail2}// Replace with your image import
                  alt="Meera's Triumph in Rural India"
                  fill
                  className="object-cover"
                />
              </div>
              </a>
              <div>
                {/* <h3 className="text-lg font-bold text-[#002855] mb-2">
                  NEW EDUCATION MODEL
                </h3> */}
                <h4 className="text-xl font-bold text-[#002855] mt-5">
                  Meera's Triumph-Illuminating the Path to Educational Equality in Rural India
                </h4>
                <p className="text-gray-600 mt-2">
                  In the heart of Rajasthan, where century-old traditions hold sway, a remarkable journey of courage and determination unfolds.
                </p>
              </div>
            </div>

            {/* Thumbnail 3 */}
            <div className="space-y-4">
              {/* Replace with your actual image */}
              <a href="https://abnd.in/thinking/edunoia/unleashing-potential-the-transformative-power-of-socio-emotional-learning-and-mental-well-being-in-indian-education">
              <div className="relative h-64 w-full  overflow-hidden">
                <Image
                  src={thumbnail3} // Replace with your image import
                  alt="Socio-Emotional Learning in Indian Education"
                  fill
                  className="object-cover"
                />
              </div>
              </a>
              <div>
                {/* <h3 className="text-lg font-bold text-[#002855] mb-2">
                  NEW EDUCATION MODEL
                </h3> */}
                <h4 className="text-xl font-bold text-[#002855] mt-5">
                  Unleashing Potential: The Transformative Power of Socio-Emotional Learning and Mental Well-being in Indian Education
                </h4>
                <p className="text-gray-600 mt-2">
                  Amidst the vibrant bustle of India's school corridors, a quiet yet powerful revolution is taking shape.
                </p>
              </div>
            </div>
          </div>
          </FadeUpCard>
        </div>
      </div>
    </div>
  );
};

export default page;