"use client";
import Image from "next/image";
import img1 from "../../../public/Assets/images/emversity/img1.jpg";
import img4 from "../../../public/Assets/images/emversity/img4.jpg";
import img5 from "../../../public/Assets/images/emversity/img5.jpg";
import img6 from "../../../public/Assets/images/emversity/img6.jpg";
import img8 from "../../../public/Assets/images/emversity/img8.jpg";
import img9 from "../../../public/Assets/images/emversity/img9.jpg";
import img11 from "../../../public/Assets/images/emversity/img11.jpg";
import img12 from "../../../public/Assets/images/emversity/img12.jpg";

const Emversity = () => {
  return (
    <>
      {/* Hero Section */}
      <div className=" bg-[#002855] text-white py-40">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
                 <div className="aspect-[100/22] w-12 bg-white mb-6"></div>
              <h2 className="font-merriweather text-4xl md:text-5xl font-normal mb-8">Emversity</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="mb-0 font-merriweather-sans">Strategic Research and Insight</p>
                  <p className="mb-0 font-merriweather-sans">Brand Essence</p>
                  <p className="mb-0 font-merriweather-sans">Brand Strategy</p>
                  <p className="mb-0 font-merriweather-sans">Brand Naming</p>
                </div>
                <div className="space-y-2">
                  <p className="mb-0 font-merriweather-sans">Verbal Identity</p>
                  <p className="mb-0 font-merriweather-sans">Visual Identity</p>
                  <p className="mb-0 font-merriweather-sans">Brand World</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-merriweather text-2xl font-normal">
                Branding India&apos;s leading institute in skill-based education
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Image */}
      <Image src={img1} alt="" className="w-full object-cover" />

      {/* Challenge & Approach Section */}
      <div className="container mx-auto   py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="top-40">
            <h4 className="font-merriweather text-3xl font-normal mb-6">The Challenge</h4>
            <p className="font-merriweather-sans text-base leading-relaxed">
              Beyond Odds Technologies sought to carve a niche in the competitive educational sector, 
              emphasizing the production of &ldquo;leaders&rdquo; and &ldquo;changemakers&rdquo;. 
              The challenge was twofold: to challenge the traditional view of education as purely 
              academic and to dispel stereotypes associated with vocational programs, particularly in 
              India. ABND was tasked with creating a brand that not only stood out but also deeply 
              resonated with stakeholders at every level.
            </p>
          </div>
          <div>
            <h4 className="font-merriweather text-3xl font-normal mb-6">Our Approach</h4>
            <p className="font-merriweather-sans text-base leading-relaxed mb-8">
              ABND adopted a thorough approach, leveraging both primary and secondary research methodologies:
            </p>

            {/* <hr className="h-5 mb-6" /> */}

            <h6 className="font-merriweather text-xl font-bold mb-4">Primary Research</h6>
            <p className="font-merriweather-sans text-base leading-relaxed mb-8">
              This phase involved conducting in-depth interviews with key decision-makers and stakeholders 
              across diverse geographical locations. One-on-one discussions with industry experts provided 
              invaluable insights into prevailing perceptions, challenges, and needs.
            </p>

            {/* <hr className="h-5 mb-6" /> */}

            <h6 className="font-merriweather text-xl font-bold mb-4">Secondary Research</h6>
            <p className="font-merriweather-sans text-base leading-relaxed mb-8">
              ABND conducted a detailed review of industry resources, including research reports, scholarly 
              articles, and competitor studies. This enabled a deep understanding of market trends, 
              identification of gaps, and formulation of strategic approaches.
            </p>

            <p className="font-merriweather-sans text-base leading-relaxed">
              The dominant narrative painted vocational education as a subpar alternative to traditional 
              degrees. Beyond Odds Technologies envisioned a different reality – one where skill-based 
              education empowered individuals and bridged the critical gap plaguing the workforce.
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-[rgba(0,152,99,0.1)]">
        <div className="container mx-auto  py-16">
          <h4 className="font-merriweather text-3xl font-normal mb-8">Our Solution</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h6 className="font-merriweather text-xl font-bold mb-4">Brand Essence</h6>
              <p className="font-merriweather-sans text-base leading-relaxed mb-6">
                Emversity emerged as more than just an educational institution. The brand was built to 
                offer fair opportunities to individuals, irrespective of their social or economic 
                backgrounds, setting them up for success in the real world. Through unique offerings 
                like &lsquo;Earn while you Learn&rsquo;, the brand was established with a mission to 
                empower the grey-collar workforce. With a focus on students who would experience respect 
                in society through lucrative employment and setting the stage for future generations, a 
                direct, transactional approach was essential.
              </p>

              <p className="font-merriweather-sans text-base leading-relaxed mb-6">
                This essence is encapsulated in the threefold acronym &lsquo;ROI&rsquo;:
              </p>
              <ul className="list-disc pl-6 space-y-3 mb-8">
                <li className="font-merriweather-sans text-base leading-relaxed">
                  Return on Investment: Signifying the tangible outcomes and benefits students could expect.
                </li>
                <li className="font-merriweather-sans text-base leading-relaxed">
                  Respect on Investment: Reflecting the dignity and value attributed to every individual&apos;s educational journey.
                </li>
                <li className="font-merriweather-sans text-base leading-relaxed">
                  Responsibility on Investment: Highlighting the responsibility and commitment of the brand to uphold promises.
                </li>
              </ul>
{/* 
              <hr className="h-10 mb-6" /> */}

              <h6 className="font-merriweather text-xl font-bold mb-4">Brand Naming</h6>
              <p className="font-merriweather-sans text-base leading-relaxed">
                The brand essence inspired the name &apos;Emversity&apos;, a combination of &apos;Em&apos; 
                (representing employment, empowerment, and empathy from the brand essence) and &apos;versity&apos; 
                (derived from university). It&apos;s a promise: Emversity empowers individuals to secure 
                fulfilling careers, fostering a sense of respect and growth.
              </p>
            </div>
            <div>
              <h6 className="font-merriweather text-xl font-bold mb-4">Visual Identity</h6>
              <p className="font-merriweather-sans text-base leading-relaxed mb-6">
                ABND crafted a visual identity that reinforces Emversity&apos;s core values. The logomark 
                called &lsquo;The Ripple,&rsquo; features three boomerangs, symbolizing the lasting impact 
                of a single decision and its ripple effect on an empowered trajectory. The color palette 
                further enhances the message. Bluish-green evokes the essence of learning and growth, while 
                black reflects the financial aspect, highlighting that an Emversity education is a wise 
                investment in one&apos;s future. Additionally, the modified sans-serif typeface complements 
                the logo, creating a timeless and approachable personality.
              </p>

              <p className="font-merriweather-sans text-base leading-relaxed mb-8">
                ABND also developed a visual system for all Emversity schools, with each school&apos;s 
                color palette tailored to its specific industry/domain. This system ensures strategic 
                alignment for the future, regardless of the industry.
              </p>

              <h6 className="font-merriweather text-xl font-bold mb-4">Brand Personality and Communication</h6>
              <p className="font-merriweather-sans text-base leading-relaxed mb-6">
                Emversity embodies the &ldquo;Magician&rdquo; archetype, serving as a magical mentor who 
                inspires and astonishes. With captivating tricks, this magician illustrates the big picture 
                and creates a transformative experience. Its tone of voice exudes transformation, confidence, 
                reassurance, and clarity, reflecting this empowering persona.
              </p>

              <p className="font-merriweather-sans text-base leading-relaxed mb-6">
                The Brand Positioning, &ldquo;An Education that Earns,&rdquo; was translated to an external 
                unit, succinctly capturing Emversity&apos;s unique selling proposition. The brand champions 
                integrated internships, allowing students to earn while they learn, ensuring a quicker 
                return on their investment and preparing them for immediate career success.
              </p>

              <p className="font-merriweather-sans text-base leading-relaxed">
                Authentic student depictions in real-world settings were central to Emversity&apos;s visual 
                communication. This, along with imagery that incorporates families, illustrates the brand&apos;s 
                far-reaching impact. The goal: empower individuals, transform families, and create a ripple 
                effect of positive change for generations to come. The visual elements, including iconography, 
                infographic style, and illustration style, were also established.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        <Image src={img4} className="w-full block object-cover" alt="" />
        <div className="p-8 md:p-12 lg:p-16">
          <h4 className="font-merriweather text-3xl font-normal mb-6">Impact</h4>
          <p className="font-merriweather-sans text-base leading-relaxed">
            Emversity, launched in April 2024, secured $11Mn in seed funding. It&apos;s a brand that 
            focuses not on obtaining a degree but on financial independence and dignified success. 
            Emversity is now accepting admissions for its inaugural 2025 batch.
          </p>
        </div>
      </div>

      {/* Videos Section */}
      <video className="w-full block" autoPlay loop muted preload="none">
        <source src="/Assets/images/emversity/video7.mp4" />
      </video>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <video className="w-full block" autoPlay loop muted preload="none">
          <source src="/Assets/images/emversity/vid1.mp4" />
        </video>
        <video className="w-full block" autoPlay loop muted preload="none">
          <source src="/Assets/images/emversity/video2.mp4" />
        </video>
      </div>

      <Image src={img6} className="w-full block" alt="" />

      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-8 lg:my-12">
          <video className="w-full block" autoPlay loop muted preload="none">
            <source src="Assets/images/emversity/video4.mp4" />
          </video>
          <Image src={img5} className="w-full block" alt="" />
        </div>
      </div>

      <Image src={img8} className="w-full block" alt="" />
      <Image src={img9} className="w-full block" alt="" />

      <div className="py-16">
        <video className="w-full block" autoPlay loop muted preload="none">
          <source src="Assets/images/emversity/video6.mp4" />
        </video>
      </div>

      <Image src={img11} className="w-full block" alt="" />

      <video className="w-full block" autoPlay loop muted preload="none">
        <source src="Assets/images/emversity/video3.mp4" />
      </video>

      <Image src={img12} className="w-full block" alt="" />

      <video className="w-full block" autoPlay loop muted preload="none">
        <source src="Assets/images/emversity/video5.mp4" />
      </video>

      <video className="w-full block" autoPlay loop muted preload="none">
        <source src="Assets/images/emversity/video8.mp4" />
      </video>

      <iframe
        width="100%"
        height="850"
        src="https://www.youtube-nocookie.com/embed/VqfZX3hk1rE?si=54jc3S3nPw1CYLfr"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full"
      ></iframe>
    </>
  );
};

export default Emversity;