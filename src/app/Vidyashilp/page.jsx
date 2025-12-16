import React from "react";
import styles from "./vidyashilp.module.css";
import Image from "next/image";
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
    <>
      <div className={`${styles.banner} ${styles.white}`}>
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid9.mp4" />
        </video>
        <div className={`${styles.container700} ${styles.center}`}>
          <div className="max-w-[76rem] mx-auto px-[3rem] text-center">
            <h2 className="font-bold text-white text-[42px] italic font-merriweather">
              5+ years of Partnership with India's Renowned Education Disruptors
            </h2>
          </div>
        </div>
      </div>

      <section
        className={`${styles.ptb8} ${styles.ltdbg}`}
        style={{ backgroundColor: "#A8303A" }}
      >
        <div className="max-w-[90%] mx-auto px-[3rem] grid grid-cols-2 gap-[3rem] items-center">
          <div>
            <h2 className="text-white text-[42px] font-merriweather font-normal leading-[1.4]">
              Branding
              <br />
              Vidyashilp University
            </h2>
          </div>
          <div>
            <p className="text-white text-[16px] font-merriweather-sans font-normal leading-[1.7]">
              Vidyashilp Education Group, a renowned group of institutes in
              Bengaluru, India, was set to expand by establishing a new
              institution under its umbrella: Vidyashilp University.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${styles.ptb8} ${styles.center}`}
        style={{ backgroundColor: "#f4f4f4" }}
      >
        <div className={styles.container700}>
          <h6
            className={`${styles.fontMerriSans} ${styles.sbold} ${styles.mb5}`}
          >
            Research
          </h6>
          <p className={styles.mb0}>
            ABND conducted primary and secondary research across stakeholder
            groups, including in-depth interviews, focused group discussions,
            and surveys, to touch upon several areas of intervention.
          </p>
        </div>
        <hr className={styles.d80} />
        <div className={styles.container}>
          <video
            className={`${styles.img} ${styles.img100p} ${styles.block}`}
            autoPlay
            loop
            muted
            preload="none"
          >
            <source src="Assets\images\vu\vid4.mp4" />
          </video>

          <hr className={styles.d80} />

          <Image
            src={img3}
            alt="Image 2"
            className={`${styles.img} ${styles.img100p}`}
          />
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.ptb8} ${styles.center}`}
      >
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid3.mp4" />
        </video>
      </section>

      <section className={styles.ptb8} style={{ backgroundColor: "#DDE8FE" }}>
        <div className={styles.container}>
          <h6 className={`${styles.fontMerriSans} ${styles.sbold}`}>
            MARKET ANALYSIS
          </h6>
          <div
            className={`${styles.g} ${styles.g2} ${styles.gap8} ${styles.vCenter}`}
          >
            <p className={styles.mb0}>
              ABND analysed trends in student preferences for different
              disciplines, comparing findings from the initial study in
              2012-2013 to those from 2019-2020. This revealed that the patterns
              in choosing disciplines remained relatively consistent for the top
              three to four fields, such as Arts/Social Sciences, Engineering &
              Technology, Commerce, and Science. The main reason was the lack of
              focused and futuristic offerings in the industry.
            </p>

            <h5
              className={`${styles.fontMerri} ${styles.italic} ${styles.bold}`}
            >
              Unlike other universities, Vidyashilp University had several key
              offerings that set it apart, painting an ideal picture of the
              University of the Future.
            </h5>
          </div>

          <hr className={styles.d80} />

          <div className={styles.MarketSec}>
            <div>
              <p className={`${styles.big} ${styles.sbold}`}>
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
            <div className={styles.center}>
              <Image src={img5} alt="" className={styles.img} />
            </div>
            <div>
              <p className={`${styles.big} ${styles.sbold} ${styles.mb0}`}>
                In essence, they aimed to
              </p>
              <h5 className={styles.bold} style={{ color: "#BA1F34" }}>
                Redefine Higher
                <br />
                Education in India
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.container} ${styles.ptb8} ${styles.g} ${styles.g2} ${styles.gap3} ${styles.vCenter}`}
      >
        <div>
          <h6
            className={`${styles.fontMerriSans} ${styles.sbold} ${styles.mb5}`}
          >
            BRAND POSITIONING
          </h6>
          <p className={styles.big}>
            ABND identified that there are two types of universities in this
            ecosystem
          </p>
          <hr className={styles.d30} />
          <Image src={img6} alt="" className={styles.img} />
        </div>
        <div>
          <h5 className={`${styles.italic} ${styles.bold}`}>
            Vidyashilp University believed in sculpting education for the
            student, not the other way around. This, coupled with their aim to
            redefine higher education in India led to a distinct positioning
            strategy.
          </h5>
        </div>
      </section>

      <section className={styles.transformationSec}>
        <Image src={img7} alt="" className={`${styles.bgimg}`} />
        <div className={styles.container}>
          <div className={`${styles.desc} ${styles.ltdbg}`}>
            <h6
              className={`${styles.fontMerriSans} ${styles.sbold} ${styles.mb5} ${styles.uppercase}`}
            >
              VISUAL IDENTITY
            </h6>
            <p className={styles.big}>
              Challenging the status-quo was not limited to just the strategy
              and communication, but everything the University stood for,
              including its identity. In the education sector, identities with
              shields and crests are widely used across the world, resonant with
              legacy, credibility, and trust.
            </p>
          </div>
        </div>
        <Image
          src={img8}
          alt=""
          className={`${styles.ve} ${styles.img} ${styles.block}`}
        />
      </section>

      <hr className={`${styles.d100} ${styles.displayNoneMob}`} />
      <hr className={`${styles.d100} ${styles.displayNoneMob}`} />

      <section
        className={`${styles.container1200} ${styles.pt4} ${styles.pb8}`}
      >
        <div className={`${styles.g} ${styles.g2}`}>
          <div
            className={`${styles.borderRight} ${styles.center} ${styles.p4}`}
          >
            <h6 className={styles.bold}>
              ABND broke away from these norms to represent a new-age University
            </h6>
            <hr className={styles.d30} />
            <Image
              src={img9}
              alt=""
              className={`${styles.img} ${styles.img100p} ${styles.block}`}
            />
          </div>
          <div className={`${styles.center} ${styles.p4}`}>
            <h6 className={styles.bold}>
              At the same time, it was crucial to carry forward the VSEG legacy
              and brand equity.
            </h6>
            <hr className={styles.d30} />
            <Image
              src={img10}
              alt=""
              className={`${styles.img} ${styles.img100p}`}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.g} ${styles.g2}`}>
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid7.mp4" />
        </video>
        <Image
          src={img12}
          alt=""
          className={`${styles.img} ${styles.img100p}`}
        />
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid2.mp4" />
        </video>
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid8.mp4" />
        </video>
      </section>

      <section className={styles.container}>
        <Image
          src={img29}
          alt=""
          className={`${styles.img} ${styles.img100p}`}
        />
      </section>

      <section
        className={`${styles.container} ${styles.ptb8} ${styles.g} ${styles.g2} ${styles.gap8}`}
      >
        <Image src={img17} alt="" className={styles.img} />
        <div>
          <Image
            src={img18}
            alt=""
            className={`${styles.img} ${styles.block}`}
          />
          <p>
            To further showcase how Vidyashilp University aimed to create
            transformative learning experiences for each student, the founding
            communication was crafted around the idea of YOU – the student at
            the focus, with the University as a supporting entity – WITH YOU.
          </p>
          <hr
            className={styles.springboard}
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
        <div className={`${styles.container} ${styles.ptb8}`}>
          <Image
            src={img19}
            alt=""
            className={`${styles.img} ${styles.img100p}`}
          />
        </div>
      </section>

      <section className={`${styles.ptb8} ${styles.center}`}>
        <div className={styles.container700}>
          <h6
            className={`${styles.fontMerriSans} ${styles.sbold} ${styles.mb5}`}
          >
            PHOTOGRAPHY
          </h6>
          <p className={styles.mb0}>
            ABND also conceptualised and directed the entire photoshoot for the
            brand's launch, overseeing every detail from image styling and
            framing to model selection, wardrobe, supervision, and finalisation.
          </p>
        </div>
        <hr className={styles.d60} />
        <div className={styles.container}>
          <video
            className={`${styles.img} ${styles.img100p} ${styles.block}`}
            autoPlay
            loop
            muted
            preload="none"
          >
            <source src="Assets\images\vu\vid1.mp4" />
          </video>
        </div>
      </section>

      <section>
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid5.mp4" />
        </video>
        <hr className={styles.d10} />
        <Image
          src={img22}
          alt=""
          className={`${styles.img} ${styles.img100p}`}
        />
      </section>

      <section className={`${styles.container} ${styles.ptb8}`}>
        <video
          className={`${styles.img} ${styles.img100p} ${styles.block}`}
          autoPlay
          loop
          muted
          preload="none"
        >
          <source src="Assets\images\vu\vid6.mp4" />
        </video>
      </section>

      <section style={{ backgroundColor: "#AA182C" }}>
        <div
          className={`${styles.containerRight} ${styles.ltdbg} ${styles.g} ${styles.g2} ${styles.vCenter}`}
        >
          <div className={styles.ptb8} style={{ paddingRight: "8rem" }}>
            <h6 className={`${styles.fontMerriSans} ${styles.sbold}`}>
              IMPACT
            </h6>
            <p>
              Vidyashilp University officially launched in 2021, graced by the
              presence of Shri Thaawarchand Gehlot, Hon'ble Governor, Government
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
          <Image
            src={img24}
            alt=""
            className={`${styles.img} ${styles.img100p}`}
          />
        </div>
      </section>

      <section>
        <Image
          src={img25}
          alt=""
          className={`${styles.img} ${styles.img100p}`}
        />
      </section>

      <section className={`${styles.container} ${styles.ptb8}`}>
        <div className={`${styles.g} ${styles.g2}`}>
          <Image
            src={img26}
            alt=""
            className={`${styles.img} ${styles.img100p}`}
          />
          <div>
            <hr className={`${styles.d100} ${styles.displayNoneMob}`} />
            <hr className={`${styles.d100} ${styles.displayNoneMob}`} />
            <hr className={`${styles.d100} ${styles.displayNoneMob}`} />
            <Image
              src={img27}
              alt=""
              className={`${styles.img} ${styles.img100p}`}
            />
          </div>
        </div>
      </section>

      <section>
        <Image
          src={img28}
          alt=""
          className={`${styles.img} ${styles.img100p}`}
        />
      </section>
    </>
  );
};

export default Page;
