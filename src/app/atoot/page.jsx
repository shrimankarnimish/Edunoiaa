import Image from "next/image";
import Atootslider from "./Atootslider";
import Atootslider2 from "./Atootslider2";

// images
import Banner from "../../../public/Assets/images/atoot/flameBG.jpg";
import atootLogo from "../../../public/Assets/images/atoot/AtootLogo.png";
import atoot1 from "../../../public/Assets/images/atoot/atoot1.jpg";
import atoot6 from "../../../public/Assets/images/atoot/atoot6.jpg";
import atoot7 from "../../../public/Assets/images/atoot/atoot7.jpg";
import atoot8 from "../../../public/Assets/images/atoot/atoot8.jpg";

export const metadata = {
  title: "Atoot - Brand Identity, Visual Identity, Brand Communication",
  description:
    "Establishing a Distinctive Brand for an NGO Focused on Empowering Girls in Underserved Regions",
};

const atoot = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#002855] text-white py-20 md:py-40">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="aspect-[100/22] w-12 bg-white mb-6"></div>
              <h2 className="font-merriweather text-3xl md:text-4xl lg:text-5xl font-normal mb-8">Atoot</h2>
              <div className="space-y-2">
                <p className="mb-0 font-merriweather-sans">Brand Essence</p>
                <p className="mb-0 font-merriweather-sans">Verbal Identity</p>
                <p className="mb-0 font-merriweather-sans">Visual Identity</p>
                <p className="mb-0 font-merriweather-sans">Brand Communication</p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="h-8 md:h-12 lg:h-18 mb-4 md:mb-6"></div>
              <h5 className="font-merriweather text-xl md:text-2xl lg:text-2xl font-normal leading-relaxed">
                Establishing a Distinctive Brand for an NGO Focused on Empowering Girls in Underserved Regions
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="w-full bg-cover bg-center bg-fixed relative">
        <Image
          src={Banner}
          alt="Team Banner"
          placeholder="blur"
          className="w-full h-auto"
        />
      </div>

      {/* Challenge & Approach Section */}
      <div className="container mx-auto py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 px-4 md:px-0">
          <div>
            <h4 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">The Challenge</h4>
            <p className="font-sans text-base mb-4 md:mb-6">
              Atoot, a registered non-profit organisation operating in the USA
              and the Kapilvastu district of Nepal, actively addresses critical
              challenges within the region. Notably, the district grapples with
              a high incidence of child marriages, particularly among girls aged
              10 to 19- surpassing the national average at 62%. Despite this,
              Kapilvastu boasts a substantial youth population, with nearly 50%
              under the age of 20, exceeding the national average by 10%.
            </p>
            <p className="font-sans text-base">
              Atoot has strategically concentrated its efforts on empowering
              girls through sports academia, recognising the transformative
              potential of Education and Physical activities. Acknowledging the
              importance of a robust brand identity, Atoot aims to attract
              investors, engage organisations in Corporate Social Responsibility
              (CSR) initiatives, and secure government contracts. Atoot
              partnered with ABND to craft a brand that communicated
              credibility, innovation, and a steadfast commitment to social
              change. This would ultimately enhance Atoot&apos;s impact and
              influence, fostering positive development not only in Kapilvastu but
              also extending its reach beyond.
            </p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h4 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">Our Approach</h4>
            <p className="font-sans text-base font-bold mb-4 md:mb-6">ABND conducted:</p>
            <ul className="ml-4 md:ml-6 list-disc">
              <li className="font-sans text-base mb-4 md:mb-6 pl-2 md:pl-4">
                In-depth immersion sessions with the Founders to comprehend the
                Organisation&apos;s vision, impact and aspirations.
              </li>
              <li className="font-sans text-base mb-4 md:mb-6 pl-2 md:pl-4">
                Evaluation of testimonials from students and families who have
                experienced positive outcomes through Atoot&apos;s programs.
              </li>
              <li className="font-sans text-base mb-4 md:mb-6 pl-2 md:pl-4">
                Thorough category analysis conducted through desk research.
              </li>
            </ul>
            <div className="h-8 md:h-16"></div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="bg-[#DCE0EF]">
        <div className="container mx-auto py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start px-4 md:px-0">
            <div className="lg:sticky lg:top-40">
              <h4 className="font-serif text-2xl md:text-3xl mb-4 md:mb-6">The Solution</h4>
              <p className="font-sans text-base">
                In establishing the foundation for the Atoot brand, we
                acknowledged the fact that in the Education or Non-profit
                industry, there didn&apos;t exist a narrative that didn&apos;t sound
                comforting or noble. It, thus, became all the more crucial for
                Atoot to thoroughly explore the core of their mission, seeking
                to uncover the intrinsic motivations that set them apart.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="h-8 lg:h-20 hidden md:block mb-4 lg:mb-6"></div>
              <h6 className="font-serif text-lg md:text-xl mb-4 md:mb-6">
                ABND identified two pivotal factors crucial to Atoot&apos;s
                differentiation:
              </h6>

              <p className="font-sans text-base font-bold mb-2">Localisation:</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Atoot closely collaborated with communities to discern their
                distinctive needs, tailoring their programs to precisely meet
                those requirements.
              </p>

              <p className="font-sans text-base font-bold mb-2">Long-term Impact:</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                The emphasis on localisation also ensured sustained impact.
                Atoot committed to working with communities over an extended
                duration- ensuring the efficacy, sustainability and a cyclical
                trajectory for their projects.
              </p>

              <p className="font-sans text-base mb-4 md:mb-6">
                In accordance with these guiding principles, Atoot&apos;s core
                purpose materialised as &quot;Atoot in Mindset. Atoot in Community.&quot;
                It went beyond fostering an unyielding mindset; it encapsulated
                the commitment to empower girls in regions with limited
                opportunities. Atoot aspired to cultivate a community where
                girls not only flourish but also evolve into influential role
                models for others.
              </p>

              <p className="font-sans text-base font-bold mb-2">Brand Personality:</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Transforming into the embodiment of a &ldquo;Caregiver&rdquo; archetype,
                Atoot&apos;s brand personality materialised as a provider of secure
                environments, a guarantor of lasting impact and a nurturer of a
                thriving ecosystem. Consequently, the communication tone was
                meticulously drafted to exude empathy, compassion and a profound
                understanding of the challenges confronting the community.
              </p>

              <p className="font-sans text-base font-bold mb-2">Emotional Connection</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Using storytelling and real-life example to show how our
                services can make a meaningful difference
              </p>
              <p className="font-sans text-base mb-4 md:mb-6">
                &quot;We are girls.
                <br />
                <span className="font-bold">How can we play?&quot;</span>
              </p>

              <p className="font-sans text-base font-bold mb-2">Practical Support</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Communicating expertise and knowledge in this area, positioning
                ourselves as a trusted sources of information and support
              </p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Creating <span className="font-bold">safe havens</span> in unchartered territory
              </p>

              <p className="font-sans text-base font-bold mb-2">Advocacy</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Raising awareness of the challenges girls face and push for
                policies and programs that support them
              </p>

              <p className="font-sans text-base mb-4 md:mb-6">
                <span className="font-bold">More Then Just a Game:</span> Building Bridges and Breaking
                Barriers
              </p>

              <p className="font-sans text-base mb-4 md:mb-6">
                <span className="font-bold">From the Field to the Future:</span> Empowering Youth Through
                Sports and Education
              </p>

              <p className="font-sans text-base font-bold mb-2">Brand Identity:</p>
              <p className="font-sans text-base mb-4 md:mb-6">
                In navigating the dynamic landscape of not-for-profit branding,
                the thoughtful selection of colours for Atoot demonstrates a
                strategic approach. The distinctive Thriving Coral and
                Unbreakable Blue were intentionally chosen to encapsulate the
                essence of Atoot&apos;s mission. Thriving Coral, a rare choice within
                the industry, serves as a symbolic representation of success,
                approachability and a harmonious fusion of the dynamism of Red
                and the optimism of Yellow.
              </p>
              <p className="font-sans text-base mb-4 md:mb-6">
                Conversely, Unbreakable Blue conveys essential qualities such as
                trust, strength, purity and transparency—attributes synonymous
                with the core values of Atoot.
              </p>
              <p className="font-sans text-base">
                The visual identity of Atoot draws inspiration from the
                resilient dandelion, symbolising the Atoot community that carry
                an unwavering commitment with them, regardless of their
                individual journeys.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Display Section */}
      <div className="text-center bg-[#001689] py-8 md:py-0">
        <div className="h-12 md:h-36"></div>
        <div className="h-8 md:h-16 hidden md:block"></div>
        <div className="px-4 md:px-0">
          <Image 
            className="w-auto h-auto p-8 md:p-32 max-w-full md:max-w-4xl mx-auto" 
            src={atootLogo} 
            alt="Atoot Logo"
          />
        </div>
        <div className="h-8 md:h-16 hidden md:block"></div>
        <div className="h-12 md:h-36"></div>
      </div>

      {/* Image Section */}
      <div className="relative w-full">
        <Image
          src={atoot1}
          placeholder="blur"
          className="w-full h-auto block"
          quality={90}
          alt="Atoot Image 1"
        />
      </div>

      {/* Slider 2 */}
      <div className="container mx-auto py-12 md:py-20">
        <Atootslider2 />
      </div>

      {/* Additional Images */}
      <Image src={atoot6} className="w-full h-auto block" placeholder="blur" alt="Atoot Image 6" />
      <Image src={atoot7} className="w-full h-auto block" placeholder="blur" alt="Atoot Image 7" />
      <Image src={atoot8} className="w-full h-auto block" placeholder="blur" alt="Atoot Image 8" />

      {/* Slider 1 */}
      <Atootslider />

      {/* Testimonials */}
      <div className="bg-black text-white">
        <div className="container mx-auto py-12 md:py-20 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Client
                <br />
                Testimonial
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-sans text-base mb-6">
                &ldquo;Working with ABND was a revelation. They facilitated an equal
                learning and knowledge-sharing relationship with our small,
                grassroots non-profit to bring our Brand Identity to life. In a
                world which emulates power as strength, the team guided our
                working relationship with empathy, compassion and kindness. This
                type of solidarity is what makes our world succeed and grow.&rdquo;
              </p>
              <div className="h-4 md:h-8 mb-4 md:mb-6"></div>
              <h6 className="font-serif text-lg md:text-xl mb-2">Sarah Van Vooren</h6>
              <p className="font-sans text-base md:text-lg italic">
                Co-Founder & Executive Director, Atoot
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default atoot;