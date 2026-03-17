import Image from "next/image";
import birla from "../../../public/Assets/images/birla/birlabanner.webp";
import birla1 from "../../../public/Assets/images/birla/birla1.webp";
import birla2 from "../../../public/Assets/images/birla/birla2.webp";
import logo from "../../../public/Assets/images/birla/birlalogo.webp";
import birlas from "../../../public/Assets/images/birla/birlasunanda.webp";
import birlaa from "../../../public/Assets/images/birla/birlaashok.webp";
import birlabanner from "../../../public/Assets/images/birla/birlabanner2.webp";
import birla5 from "../../../public/Assets/images/birla/birla5.webp";
import birla6 from "../../../public/Assets/images/birla/birla6.webp";

export default function BirlaCaseStudy() {
  return (
    <main className="w-full">
      {/* HERO IMAGE */}
      <section className="w-full">
        <div className="relative h-[80vh] w-full">
          <Image
            src={birla}
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          BIRLA INTERNATIONAL SCHOOL
        </h2>
        <h4 className="text-xl font-semibold mt-10">Brand Concept, Brand Identity</h4>
        <p className="mt-6 text-gray-600 leading-relaxed">
          We needed to create a brand for two Birla Group schools – Ashok Birla International School and Sunanda Birla International School. Although both these schools were independent, the objective was to create a visual identity that connected them to each other, as they belonged to the same parent brand
        </p>
      </section>

      {/* BLACK STRIP TITLE */}
      <section className="bg-black py-10">
        <h2 className="text-center text-white italic text-[31px] tracking-wide">
          Connecting the Identities of Two Schools
        </h2>
      </section>


      {/* TWO IMAGE BLOCKS */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div>
          <Image
            src={birla1}
            alt="Left Image"
            width={birla1.width}
            height={birla1.height}
            className="max-w-full h-auto"
            priority
          />
        </div>

        <div>
          <Image
            src={birla2}
            alt="Right Image"
            width={birla2.width}
            height={birla2.height}
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* VISUAL IDENTITY */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h4 className="text-xl font-semibold mb-4">The Visual Identity</h4>
        <p className="text-gray-600 leading-relaxed">
          Using this concept of “Organic Education”, the visual identity of the Schools is composed of elements that stem from a triangle-shaped building block showcasing the dynamic dichotomy of agility amid stability. The logo has fluid leaf graphics within this triangle forming an ‘S’ and ‘A’ for both schools respectively, the plant form contributing to the organic quality of the brand.
        </p>
      </section>

      {/* ICON PROCESS ROW */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="relative w-full h-[180px] md:h-[220px] lg:h-[260px]">
          <Image
            src={logo}
            alt="Visual Identity Process"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* LOGO COMPARISON */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
        <div className="flex items-center justify-center">
          <Image
            src={birlas}
            alt="Sunanda Birla Logo"
            width={500}
            height={500}
            className="max-w-full h-auto"
            priority
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={birlaa}
            alt="Ashok Birla Logo"
            width={500}
            height={500}
            className=" h-auto"
          />
        </div>
      </section>

      {/* BINDING TEXT */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h4 className="text-xl font-semibold mb-4">
          Binding the Schools: Holistic Organic Education
        </h4>
        <p className="text-gray-600 leading-relaxed">
          The Birla schools not only emphasize on student freedom but also provide avenues to enable students to educate themselves by empowering holistic education. The Schools are integrated with natural surroundings allowing the students to be harmonious with nature despite the hustle and bustle of city life. Providing a natural environment for true and holistic growth, the organic education that is provided grows with the student no matter where they go.
        </p>
      </section>

      {/* FULL WIDTH IMAGE WITH TEXT */}
      <section className="relative h-[90vh] container" >
        <Image
          src={birlabanner}
          alt="Organic Education"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-2xl md:text-4xl font-light text-center max-w-3xl px-4">
            An organic education, <br />
            that grows with the student <br />
            no matter where they go
          </h2>
        </div>
      </section>

      {/* MOCKUPS */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
        <div className="flex items-center justify-center">
          <Image
            src={birla5}
            alt="Print Mockup"
            width={birla5.width}
            height={birla5.height}
            className="max-w-full h-auto"
            priority
          />
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={birla6}
            alt="Web Mockup"
            width={birla6.width}
            height={birla6.height}
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
