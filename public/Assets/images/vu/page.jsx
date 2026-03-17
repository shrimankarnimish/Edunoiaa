import Inner from "@/app/components/Inner";
import React from "react";
import CSBanner from "@/app/components/reuseable/csbanner/CSBanner";
import styles from "./vu.module.css";
import EdunoiaProjects from "../EdunoiaProjects";

import Image from "next/image";
import img3 from "@/assets/images/vu/img3.png";
import img5 from "@/assets/images/vu/img5.png";
import img6 from "@/assets/images/vu/img6.png";
import img7 from "@/assets/images/vu/img7.jpg";
import img8 from "@/assets/images/vu/img8.png";
import img9 from "@/assets/images/vu/img9.png";
import img10 from "@/assets/images/vu/img10.png";
import img12 from "@/assets/images/vu/img12.jpg";
import img17 from "@/assets/images/vu/img17.jpg";
import img18 from "@/assets/images/vu/img18.jpg";
import img19 from "@/assets/images/vu/img19.png";
import img22 from "@/assets/images/vu/img22.jpg";
import img24 from "@/assets/images/vu/img24.jpg";
import img25 from "@/assets/images/vu/img25.jpg";
import img26 from "@/assets/images/vu/img26.jpg";
import img27 from "@/assets/images/vu/img27.jpg";
import img28 from "@/assets/images/vu/img28.jpg";
import img29 from "@/assets/images/vu/img29.jpg";
import AllWork from "@/app/components/AllWork";

export const metadata = {
  title:
    "Vidyashilp University - 5+ years of Partnership with India's Renowned Education Disruptors",
  description:
    "Vidyashilp Education Group, a renowned group of institutes in Bengaluru, India, was set to expand by establishing a new institution under its umbrella: Vidyashilp University.",
  images: [
    {
      url: "https://abnd.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg12.497d3a9b.jpg&w=1080&q=75",
    },
  ],
  openGraph: {
    images: [
      {
        url: "https://abnd.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg12.497d3a9b.jpg&w=1080&q=75",
      },
    ],
  },
};
const Page = () => {
  return (
    <Inner>
      {/* <Head>
        <meta
          name="og:title"
          content="Vidyashilp University - 5+ years of Partnership with India's Renowned Education Disruptors"
        />
        <meta
          name="description"
          content="Vidyashilp Education Group, a renowned group of institutes in Bengaluru, India, was set to expand by establishing a new institution under its umbrella: Vidyashilp University."
        />
        <meta
          name="og:image"
          content="https://abnd.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg12.497d3a9b.jpg&w=1080&q=75"
        />
      </Head> */}
      <div className={`${styles.banner} white`}>
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid9.mp4" />
        </video>
        <div className="container700 center">
          <h2 className="bold">
            <i>
              5+ years of Partnership with India's Renowned Education Disruptors
            </i>
          </h2>
        </div>
      </div>

      <section className="ptb8 ltdbg" style={{ backgroundColor: "#A8303A" }}>
        <div className="container g g2 gap3 vCenter">
          <div>
            <h2>
              Branding
              <br />
              Vidyashilp University
            </h2>
            <hr className="springboard white mb0" width="40px" />
          </div>
          <div>
            <p>
              Vidyashilp Education Group, a renowned group of institutes in
              Bengaluru, India, was set to expand by establishing a new
              institution under its umbrella: Vidyashilp University.
            </p>
          </div>
        </div>
      </section>

      <section className="ptb8 center" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="container700">
          <h6 className="fontMerriSans sbold mb5">Research</h6>
          <p className="mb0">
            ABND conducted primary and secondary research across stakeholder
            groups, including in-depth interviews, focused group discussions,
            and surveys, to touch upon several areas of intervention.
          </p>
        </div>
        <hr className="d80" />
        <div className="container">
          <video
            className="img img100p block"
            autoPlay
            loop
            muted
            preload="none"
          >
            <source src="/videos/vu/vid4.mp4" />
          </video>

          <hr className="d80" />

          <Image src={img3} alt="Image 2" className="img img100p" />
        </div>
      </section>

      <section className="container ptb8 center">
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid3.mp4" />
        </video>
      </section>

      <section className="ptb8" style={{ backgroundColor: "#DDE8FE" }}>
        <div className="container">
          <h6 className="fontMerriSans sbold">MARKET ANALYSIS</h6>
          <div className="g g2 gap8 mgap3 vCenter">
            <p className="mb0">
              ABND analysed trends in student preferences for different
              disciplines, comparing findings from the initial study in
              2012-2013 to those from 2019-2020. This revealed that the patterns
              in choosing disciplines remained relatively consistent for the top
              three to four fields, such as Arts/Social Sciences, Engineering &
              Technology, Commerce, and Science. The main reason was the lack of
              focused and futuristic offerings in the industry.
            </p>

            <h5 className="fontMerri italic bold">
              Unlike other universities, Vidyashilp University had several key
              offerings that set it apart, painting an ideal picture of the
              University of the Future.
            </h5>
          </div>

          <hr className="d80" />

          <div className={styles.MarketSec}>
            <div>
              <p className="big sbold">
                With a sole focus on new-age emerging domains, programs were
                offered in
              </p>
              <ul>
                <li>Psychology</li>
                <li>Economics</li>
                <li>Digital Business</li>
                <li>Data Science</li>
                <li>Decision Sciences</li>
                <li>Communication Design</li>
                <li>Legal Studies</li>
              </ul>
            </div>
            <div className="center">
              <Image src={img5} alt="" className="img" />
            </div>
            <div>
              <p className="big sbold mb0">In essence, they aimed to</p>
              <h5 className="bold" style={{ color: "#BA1F34" }}>
                Redefine Higher
                <br />
                Education in India
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section className="container ptb8 g g2 gap3 vCenter">
        <div>
          <h6 className="fontMerriSans sbold mb5">BRAND POSITIONING</h6>
          <p className="big">
            ABND identified that there are two types of universities in this
            ecosystem
          </p>
          <hr className="d30" />
          <Image src={img6} alt="" className="img" />
        </div>
        <div>
          <h5 className="italic bold">
            Vidyashilp University believed in sculpting education for the
            student, not the other way around. This, coupled with their aim to
            redefine higher education in India led to a distinct positioning
            strategy.
          </h5>
        </div>
      </section>

      <section className={styles.transformationSec}>
        <Image src={img7} alt="" className={`${styles.bgimg}`} />
        <div className="container">
          <div className={`${styles.desc} ltdbg`}>
            <h6 className="fontMerriSans sbold mb5 uppercase">
              VISUAL IDENTITY
            </h6>
            <p className="big">
              Challenging the status-quo was not limited to just the strategy
              and communication, but everything the University stood for,
              including its identity. In the education sector, identities with
              shields and crests are widely used across the world, resonant with
              legacy, credibility, and trust.
            </p>
          </div>
        </div>
        <Image src={img8} alt="" className={`${styles.ve} img block`} />
      </section>

      <hr className="d100 displayNoneMob" />
      <hr className="d100 displayNoneMob" />

      <section className="container1200 pt4 pb8">
        <div className="g g2">
          <div
            className={`${styles.borderRight} center p4`}
            // style={{ borderRight: "2px solid #dedede" }}
          >
            <h6 className="bold">
              ABND broke away from these norms to represent a new-age University
            </h6>
            <hr className="d30" />
            <Image src={img9} alt="" className="img img100p block" />
          </div>
          <div className="center p4">
            <h6 className="bold">
              At the same time, it was crucial to carry forward the VSEG legacy
              and brand equity.
            </h6>
            <hr className="d30" />
            <Image src={img10} alt="" className="img img100p" />
          </div>
        </div>
      </section>

      <section className="g g2">
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid7.mp4" />
        </video>
        <Image src={img12} alt="" className="img img100p" />
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid2.mp4" />
        </video>
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid8.mp4" />
        </video>
      </section>

      <section className="container">
        <Image src={img29} alt="" className="img img100p" />
      </section>

      <section className="container ptb8 g g2 gap8">
        <Image src={img17} alt="" className="img" />
        <div>
          <Image src={img18} alt="" className="img block" />
          <p>
            To further showcase how Vidyashilp University aimed to create
            transformative learning experiences for each student, the founding
            communication was crafted around the idea of YOU – the student at
            the focus, with the University as a supporting entity – WITH YOU.
          </p>
          <hr
            className="springboard"
            style={{ background: "#B81F34", width: "5rem" }}
          />
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 40%, rgba(184,31,52,1) 40%)",
        }}
      >
        <div className="container ptb8">
          <Image src={img19} alt="" className="img img100p" />
        </div>
      </section>

      <section className="ptb8 center">
        <div className="container700">
          <h6 className="fontMerriSans sbold mb5">PHOTOGRAPHY</h6>
          <p className="mb0">
            ABND also conceptualised and directed the entire photoshoot for the
            brand’s launch, overseeing every detail from image styling and
            framing to model selection, wardrobe, supervision, and finalisation.
          </p>
        </div>
        <hr className="d60" />
        <div className="container">
          <video
            className="img img100p block"
            autoPlay
            loop
            muted
            preload="none"
          >
            <source src="/videos/vu/vid1.mp4" />
          </video>
        </div>
      </section>

      <section>
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid5.mp4" />
        </video>
        <hr className="d10" />
        <Image src={img22} alt="" className="img img100p" />
      </section>

      <section className="container ptb8">
        <video className="img img100p block" autoPlay loop muted preload="none">
          <source src="/videos/vu/vid6.mp4" />
        </video>
      </section>

      <section style={{ backgroundColor: "#AA182C" }}>
        <div className="containerRight ltdbg g g2 vCenter">
          <div className="ptb8" style={{ paddingRight: "8rem" }}>
            <h6 className="fontMerriSans sbold">IMPACT</h6>
            <p>
              Vidyashilp University officially launched in 2021, graced by the
              presence of Shri Thaawarchand Gehlot, Hon’ble Governor, Government
              of Karnataka, Dr. Ashwathnarayan C.N., Minister for Higher
              Education, IT and BT, Science and Technology, Skill Development,
              Government of Karnataka, and Prof. B. Thimmegowda, Vice-Chairman
              of the Karnataka State Council for Higher Education.
            </p>

            <p>
              ABND collaborated closely with Vidyashilp University to develop
              all launch communications and assets required for the event and
              the university's opening.
            </p>
          </div>
          <Image src={img24} alt="" className="img img100p" />
        </div>
      </section>

      <section>
        <Image src={img25} alt="" className="img img100p" />
      </section>

      <section className="container ptb8">
        <div className="g g2">
          <Image src={img26} alt="" className="img img100p" />
          <div>
            <hr className="d100 displayNoneMob" />
            <hr className="d100 displayNoneMob" />
            <hr className="d100 displayNoneMob" />
            <Image src={img27} alt="" className="img img100p" />
          </div>
        </div>
      </section>

      <section>
        <Image src={img28} alt="" className="img img100p" />
      </section>

      {/* Other Project */}
      <div className="otherProjectBG">
        <EdunoiaProjects />
      </div>

      <AllWork />
    </Inner>
  );
};

export default Page;
