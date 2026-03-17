"use client";
import React from "react";
import { Fadeinleft, Fadeinright, Fadeinup, FadeUpCard, Fadeindown } from "../Components/Animations";
import Image from "next/image";

// PLACEHOLDER IMPORTS (replace later)
import artbanner from "../../../public/Assets/images/artvillage/artvillage.webp";
import img1 from "../../../public/Assets/images/artvillage/artvillage2.webp";
import img3 from "../../../public/Assets/images/artvillage/artvillage6.webp";
import img4 from "../../../public/Assets/images/artvillage/artvillage7.webp";
import image1 from "../../../public/Assets/images/artvillage/img01.webp";
import image2 from "../../../public/Assets/images/artvillage/img02.webp";
import image3 from "../../../public/Assets/images/artvillage/img03.webp";
import image4 from "../../../public/Assets/images/artvillage/img04.webp";
import image5 from "../../../public/Assets/images/artvillage/img05.webp";
import image6 from "../../../public/Assets/images/artvillage/img06.webp";
import image7 from "../../../public/Assets/images/artvillage/img07.webp";
import image8 from "../../../public/Assets/images/artvillage/img08.webp";
import image9 from "../../../public/Assets/images/artvillage/img09.webp";
import image10 from "../../../public/Assets/images/artvillage/img10.webp";
import image11 from "../../../public/Assets/images/artvillage/img11.webp";
import image12 from "../../../public/Assets/images/artvillage/img12.webp";
import image13 from "../../../public/Assets/images/artvillage/img13.webp";
import image14 from "../../../public/Assets/images/artvillage/img14.webp";
import image15 from "../../../public/Assets/images/artvillage/img15.webp";


const Artvillage = () => {
  return (
    <>
      <section className="w-full">
        <Image
          src={artbanner}
          alt="Art Hero"
          className="w-full h-auto"
          priority
        />
      </section>
      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto container">
          <div className="grid grid-cols-1 lg:grid-cols gap-8 lg:gap-12 xl:gap-16">
            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              <Fadeinleft>
                {/* Description Text */}
                <p className="p-grey">
                  Spread over 15 acres of farm is a place nestled in the hills
                  of Karjat, where artists of all fields come together to
                  invent, create and share their philosophies and methods of
                  practice. The art of pottery making, earth building,
                  papermaking, painting, droning etc. are taught and learnt at
                  this art center. This is done through various workshops,
                  documentary screenings, festivals, talks and performances.
                  Whether it is someone focused on learning these art forms or a
                  person looking at a relaxing weekend retreat, this place .
                  offers a space for both creative endeavours and rejuvenating
                  zeal.
                </p>
              </Fadeinleft>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black py-10">
        <h3 className="text-center text-white italic text-[26px] md:text-[31px] container">
          India's first earth built art center cannot be projected as just a
          resort, a gallery or a workshop. Then how does one go about branding
          it?
        </h3>
      </section>

      <section>
        <video className="block w-full" autoPlay loop muted preload="none">
          <source src="/Assets/images/artvillage/artvillagemp4.mp4" />
        </video>
      </section>
      <Fadeinup>
        <section className="flex justify-center mt-12">
          <Image src={img1} alt="Art Hero" className="mt-5" priority />
        </section>
      </Fadeinup>

      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto container">
          <div className="grid grid-cols-1 lg:grid-cols gap-8 lg:gap-12 xl:gap-16">
            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              <Fadeinleft>
                {/* Description Text */}
                <p className="p-grey">
                  ABND joined hands with India’s first earth built earth center
                  from its very inception. It was like a home project for us,
                  being involved on site to piece out all the bricks. The main
                  branding challenge was that we couldn’t get around projecting
                  it as a workshop, a resort or an art gallery so it was
                  difficult to capture the essence of the entire place in one
                  name. The center started off as an artist’s movement with
                  festivals where craftsmen would meet to discuss their
                  learnings. We helped them build the business model and
                  streamline their goals.
                </p>
              </Fadeinleft>
            </div>
          </div>
        </div>
      </section>

      <section>
        <video className="block w-full" autoPlay loop muted preload="none">
          <source src="/Assets/images/artvillage/artvillage5.mp4" />
        </video>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto container">
          <div className="grid grid-cols-1 lg:grid-cols gap-8 lg:gap-12 xl:gap-16">
            {/* Right Column */}
            <div className="space-y-6 lg:space-y-8">
              <Fadeinleft>
                {/* Description Text */}
                <p className="p-grey">
                  ABND took up the task to design all external and internal
                  communication for Art Village. All the workshop and master
                  class advertisements, brochures, schedules and posts were
                  created. The signages were made in tandem with the visual
                  identity of the brand, in rounded fragmented lines, with
                  sustainable material that was intrinsic to the place like the
                  remnants from workshops- clay, wood, chalk etc. We helped in
                  installing the signages on site and worded it wittily, with
                  imagerial indicators. Thus the bird watching zone was named
                  “Spot your feathered friends” and the firefly nook was termed
                  “Catch the fireflies.”
                </p>
              </Fadeinleft>
            </div>
          </div>
        </div>
      </section>


      <section className="w-full py-12 md:py-16 lg:py-20 ">
        <div className="mx-auto container">
          <div className="flex justify-center items-center gap-10 w-full py-10">
            <Fadeinleft>
              <div>
                <Image src={img3} alt="image1" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={img4} alt="image2" />
              </div>
            </Fadeinright>
          </div>
        </div>
      </section>

      <Fadeinup>
        <section>
          <div className="mx-auto container mb-10">
            <video className="block w-full" autoPlay loop muted preload="none">
              <source src="/Assets/images/artvillage/artvillage2mp4.mp4" />
            </video>
          </div>
        </section>
      </Fadeinup>


      <section>
        <div className="mx-auto container mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <Fadeinleft>
              <div>
                <Image src={image1} alt="image1" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image2} alt="image2" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image3} alt="image3" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image4} alt="image4" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image5} alt="image5" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image6} alt="image6" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image7} alt="image7" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image8} alt="image8" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image9} alt="image9" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image10} alt="image10" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image11} alt="image11" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image12} alt="image12" />
              </div>
            </Fadeinright>
            <Fadeinleft>
              <div>
                <Image src={image13} alt="image11" />
              </div>
            </Fadeinleft>
            <Fadeinright>
              <div>
                <Image src={image14} alt="image12" />
              </div>
            </Fadeinright>
          </div>
        </div>
      </section>


      <Fadeinup>
        <div className="mx-auto container mb-10">
          <section className="flex justify-center mt-12">
            <Image src={image15} alt="Art Hero" className="mt-5" priority />
          </section>
        </div>
      </Fadeinup>
    </>
  );
};

export default Artvillage;
