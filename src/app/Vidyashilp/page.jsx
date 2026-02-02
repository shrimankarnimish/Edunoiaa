import React from "react";
import Image from "next/image";

// Import your images here
import img3 from "../../../public/Assets/images/vu/img3.png";
import img5 from "../../../public/Assets/images/vu/img5.png";
import img6 from "../../../public/Assets/images/vu/img6.png";
import img7 from "../../../public/Assets/images/vu/img7.jpg";
import img8 from "../../../public/Assets/images/vu/img8.png";
import img9 from "../../../public/Assets/images/vu/img9.png";
import img10 from "../../../public/Assets/images/vu/img10.png";
import img12 from "../../../public/Assets/images/vu/img12.jpg";
import img17 from "../../../public/Assets/images/vu/img17.jpg";
import img18 from "../../../public/Assets/images/vu/img18.jpg";
import img19 from "../../../public/Assets/images/vu/img19.png";
import img22 from "../../../public/Assets/images/vu/img22.jpg";
import img24 from "../../../public/Assets/images/vu/img24.jpg";
import img25 from "../../../public/Assets/images/vu/img25.jpg";
import img26 from "../../../public/Assets/images/vu/img26.jpg";
import img27 from "../../../public/Assets/images/vu/img27.jpg";
import img28 from "../../../public/Assets/images/vu/img28.jpg";
import img29 from "../../../public/Assets/images/vu/img29.jpg";

const Page = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative h-[60vh] md:h-[75vh] grid place-content-center overflow-x-clip text-white">
        <video 
          className="absolute inset-0 w-full h-full object-cover object-center -z-10" 
          autoPlay 
          loop 
          muted 
          preload="none"
        >
          <source src="/Assets/images/vu/vid9.mp4" />
        </video>
        <div className="max-w-[76rem] mx-auto px-[1.5rem] md:px-[3rem] text-center">
          <h2 className="font-bold font-merriweather text-[1.8rem] md:text-[2.2rem] leading-[1.4]">
            <i>5+ years of Partnership with India&apos;s Renowned Education Disruptors</i>
          </h2>
        </div>
      </div>

      {/* Branding Section */}
      <section className="py-[4rem] md:py-[8rem] bg-[#A8303A] text-white">
        <div className="container mx-auto px-[1.5rem] md:px-0 grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-[3rem] items-center">
          <div>
            <h2 className="font-merriweather text-[1.8rem] md:text-[2.2rem] leading-[1.4] mb-[1.5rem]">
              Branding
              <br />
              Vidyashilp University
            </h2>
            <div className="w-[4rem] h-[0.88rem] bg-white mb-0"></div>
          </div>
          <div>
            <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-[1.5rem]">
              Vidyashilp Education Group, a renowned group of institutes in Bengaluru, 
              India, was set to expand by establishing a new institution under its umbrella: 
              Vidyashilp University.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-[4rem] md:py-[8rem] text-center bg-[#f4f4f4]">
        <div className="max-w-[76rem] mx-auto px-[1.5rem] md:px-[3rem]">
          <h6 className="font-merriweather-sans font-semibold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1rem]">Research</h6>
          <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-0">
            ABND conducted primary and secondary research across stakeholder groups, 
            including in-depth interviews, focused group discussions, and surveys, 
            to touch upon several areas of intervention.
          </p>
        </div>
        <div className="h-[4rem] md:h-[8rem]"></div>
        <div className="container mx-auto px-[1.5rem] md:px-0">
          <video 
            className="w-full block" 
            autoPlay 
            loop 
            muted 
            preload="none"
          >
            <source src="/Assets/images/vu/vid4.mp4" />
          </video>
          <div className="h-[4rem] md:h-[8rem]"></div>
          <Image src={img3} alt="Research visual" className="w-full" />
        </div>
      </section>

      {/* Video Section */}
      <section className="container mx-auto px-[1.5rem] md:px-0 py-[4rem] md:py-[8rem] text-center">
        <video className="w-full block" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid3.mp4" />
        </video>
      </section>

      {/* Market Analysis Section */}
      <section className="py-[4rem] md:py-[8rem] bg-[#DDE8FE]">
        <div className="container mx-auto px-[1.5rem] md:px-0">
          <h6 className="font-merriweather-sans font-semibold text-[1.4rem] md:text-[1.7rem] leading-[1.7] mb-[1.5rem]">MARKET ANALYSIS</h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[8rem] items-center mb-[3rem]">
            <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-[2rem] md:mb-0">
              ABND analysed trends in student preferences for different disciplines, 
              comparing findings from the initial study in 2012-2013 to those from 
              2019-2020. This revealed that the patterns in choosing disciplines 
              remained relatively consistent for the top three to four fields, such as 
              Arts/Social Sciences, Engineering & Technology, Commerce, and Science. 
              The main reason was the lack of focused and futuristic offerings in 
              the industry.
            </p>
            <h5 className="font-merriweather italic font-bold text-[1.6rem] md:text-[2.0rem] leading-[1.7] mb-0">
              Unlike other universities, Vidyashilp University had several key 
              offerings that set it apart, painting an ideal picture of the 
              University of the Future.
            </h5>
          </div>
          <div className="h-[4rem] md:h-[8rem]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] items-center">
            <div>
              <p className="text-[1.4rem] md:text-[1.8rem] leading-[1.5] font-merriweather-sans font-semibold mb-[1.5rem]">
                With a sole focus on new-age emerging domains, programs were offered in
              </p>
              <ul className="ml-[1rem] md:ml-[1.5rem]">
                {['Psychology', 'Economics', 'Digital Business', 'Data Science', 
                  'Decision Sciences', 'Communication Design', 'Legal Studies'].map((item) => (
                  <li 
                    key={item} 
                    className="text-[#BA1F34] font-merriweather font-bold text-[1.6rem] md:text-[2.2rem] mb-[1rem] pl-[1rem] leading-[1.5] md:leading-[1.8] last:mb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center order-first md:order-none">
              <Image src={img5} alt="Programs offered" className="w-full max-w-md mx-auto mb-[2rem] md:mb-0" />
            </div>
            <div>
              <p className="text-[1.4rem] md:text-[1.8rem] leading-[1.5] font-merriweather-sans font-semibold mb-2">In essence, they aimed to</p>
              <h5 className="font-bold text-[1.8rem] md:text-[2.4rem] leading-[1.7] text-[#BA1F34] mb-[1.5rem]">
                Redefine Higher
                <br />
                Education in India
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Positioning Section */}
      <section className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center">
        <div>
          <h6 className="font-merriweather-sans font-semibold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1rem]">BRAND POSITIONING</h6>
          <p className="text-[1.4rem] md:text-[1.8rem] leading-[1.5] font-merriweather-sans mb-[1.5rem]">
            ABND identified that there are two types of universities in this ecosystem
          </p>
          <div className="h-[2rem] md:h-[3rem]"></div>
          <Image src={img6} alt="University types" className="w-full" />
        </div>
        <div>
          <h5 className="italic font-bold text-[1.4rem] md:text-[1.7rem] leading-[1.7] mb-[1.5rem]">
            Vidyashilp University believed in sculpting education for the student, 
            not the other way around. This, coupled with their aim to redefine 
            higher education in India led to a distinct positioning strategy.
          </h5>
        </div>
      </section>

      {/* Visual Identity Section */}
      <section className="relative min-h-[60vh] md:min-h-0">
        <Image 
          src={img7} 
          alt="Visual identity background" 
          className="w-full h-[60vh] md:h-auto object-cover object-top -z-10" 
        />
        <div className="absolute bottom-0 md:bottom-[20%] left-0 right-0 md:bg-transparent p-[1.5rem] md:p-0">
          <div className="mx-auto container px-[1.5rem] md:px-0">
            <h6 className="font-merriweather-sans text-white font-semibold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1rem] uppercase">VISUAL IDENTITY</h6>
            <p className="text-[1.4rem] md:text-[1.8rem] leading-[1.5] font-merriweather-sans mb-[1.5rem] text-white">
              Challenging the status-quo was not limited to just the strategy and communication, 
              but everything the University stood for, including its identity. In the education 
              sector, identities with shields and crests are widely used across the world, 
              resonant with legacy, credibility, and trust.
            </p>
          </div>
        </div>
        <Image 
          src={img8} 
          alt="Visual identity element" 
          className="absolute -bottom-[10%] md:-bottom-[25%] left-1/2 -translate-x-1/2 md:left-[30%] md:translate-x-0 w-[90%] md:w-full max-w-xl" 
        />
      </section>

      {/* University Comparison Section */}
      <div className="h-[15rem] md:h-[10rem]"></div>
      
      <section className="container mx-auto px-[1.5rem] md:px-0 py-[2rem] md:py-[4rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="text-center p-[1.5rem] md:p-[4rem] border-b-2 md:border-b-0 md:border-r-2 border-[#dedede]">
            <h6 className="font-bold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1.5rem]">
              ABND broke away from these norms to represent a new-age University
            </h6>
            <div className="h-[2rem] md:h-[3rem]"></div>
            <Image src={img9} alt="New age university" className="w-full block" />
          </div>
          <div className="text-center p-[1.5rem] md:p-[4rem]">
            <h6 className="font-bold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1.5rem]">
              At the same time, it was crucial to carry forward the VSEG legacy and brand equity.
            </h6>
            <div className="h-[2rem] md:h-[3rem]"></div>
            <Image src={img10} alt="VSEG legacy" className="w-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <video className="w-full block aspect-video" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid7.mp4" />
        </video>
        <Image src={img12} alt="Gallery image 1" className="w-full aspect-video object-cover" />
        <video className="w-full block aspect-video" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid2.mp4" />
        </video>
        <video className="w-full block aspect-video" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid8.mp4" />
        </video>
      </section>

      {/* Image Section */}
      <section className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem] py-[2rem]">
        <Image src={img29} alt="University image" className="w-full" />
      </section>

      {/* Transformative Learning Section */}
      <section className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[8rem]">
        <Image src={img17} alt="Transformative learning" className="w-full" />
        <div>
          <Image src={img18} alt="YOU concept" className="w-full block mb-[1.5rem]" />
          <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-[1.5rem]">
            To further showcase how Vidyashilp University aimed to create transformative 
            learning experiences for each student, the founding communication was crafted 
            around the idea of YOU – the student at the focus, with the University as a 
            supporting entity – WITH YOU.
          </p>
          <div className="w-[5rem] h-[0.88rem] bg-[#B81F34]"></div>
        </div>
      </section>

      {/* Gradient Background Section */}
      <section 
        className="bg-gradient-to-b from-white from-40% to-[#b81f34] to-40%"
      >
        <div className="container mx-auto px-[1.5rem] md:px-0 py-[4rem] md:py-[8rem]">
          <Image src={img19} alt="University branding" className="w-full" />
        </div>
      </section>

      {/* Photography Section */}
      <section className="py-[4rem] md:py-[8rem] text-center">
        <div className="max-w-[76rem] mx-auto px-[1.5rem] md:px-[3rem]">
          <h6 className="font-merriweather-sans font-semibold text-[1.6rem] md:text-[2rem] leading-[1.7] mb-[1rem]">PHOTOGRAPHY</h6>
          <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-0">
            ABND also conceptualised and directed the entire photoshoot for the brand&apos;s launch, 
            overseeing every detail from image styling and framing to model selection, wardrobe, 
            supervision, and finalisation.
          </p>
        </div>
        <div className="h-[3rem] md:h-[6rem]"></div>
        <div className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem]">
          <video 
            className="w-full block aspect-video" 
            autoPlay 
            loop 
            muted 
            preload="none"
          >
            <source src="/Assets/images/vu/vid1.mp4" />
          </video>
        </div>
      </section>

      {/* Video & Image Section */}
      <section>
        <video className="w-full block aspect-video" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid5.mp4" />
        </video>
        <div className="h-[0.5rem] md:h-[1rem]"></div>
        <Image src={img22} alt="Photography image" className="w-full" />
      </section>

      {/* Final Video Section */}
      <section className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[8rem]">
        <video className="w-full block aspect-video" autoPlay loop muted preload="none">
          <source src="/Assets/images/vu/vid6.mp4" />
        </video>
      </section>

      {/* Impact Section */}
      <section className="bg-[#AA182C] text-white">
        <div className="container mx-auto md:ml-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="py-[4rem] md:py-[8rem] px-[1.5rem] md:px-0 md:pr-[8rem]">
            <h6 className="font-merriweather-sans font-semibold text-[1.4rem] md:text-[1.7rem] leading-[1.7] mb-[1.5rem]">IMPACT</h6>
            <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-[1.5rem]">
              Vidyashilp University officially launched in 2021, graced by the presence of 
              Shri Thaawarchand Gehlot, Hon&apos;ble Governor, Government of Karnataka, 
              Dr. Ashwathnarayan C.N., Minister for Higher Education, IT and BT, Science and 
              Technology, Skill Development, Government of Karnataka, and Prof. B. Thimmegowda, 
              Vice-Chairman of the Karnataka State Council for Higher Education.
            </p>
            <p className="text-[1.4rem] md:text-[1.6rem] leading-[1.7] font-merriweather-sans mb-[1.5rem]">
              ABND collaborated closely with Vidyashilp University to develop all launch 
              communications and assets required for the event and the university&apos;s opening.
            </p>
          </div>
          <Image src={img24} alt="Impact image" className="w-full" />
        </div>
      </section>

      {/* Image Grid Sections */}
      <section>
        <Image src={img25} alt="University event 1" className="w-full" />
      </section>

      <section className="max-w-full md:max-w-[90%] mx-auto px-[1.5rem] md:px-[3rem] py-[4rem] md:py-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] md:gap-0">
          <Image src={img26} alt="University event 2" className="w-full" />
          <div>
            <div className="h-[4rem] md:h-[10rem]"></div>
            <Image src={img27} alt="University event 3" className="w-full" />
          </div>
        </div>
      </section>

      <section>
        <Image src={img28} alt="University event 4" className="w-full" />
      </section>
    </>
  );
};

export default Page;