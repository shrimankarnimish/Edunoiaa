import Image from "next/image";

// PLACEHOLDER IMPORTS (replace later)
import shlokabanner from "../../../public/Assets/images/shloka/shlokabanner.webp";
import shloka1 from "../../../public/Assets/images/shloka/shloka1.webp";
import shloka2 from "../../../public/Assets/images/shloka/shloka2.webp";
import logo from "../../../public/Assets/images/shloka/shloka3.webp";
import shlokagif from "../../../public/Assets/images/shloka/shlokagif.gif";
import shloka4 from "../../../public/Assets/images/shloka/shloka4.webp";
import shloka5 from "../../../public/Assets/images/shloka/shloka5.webp";
import shloka6 from "../../../public/Assets/images/shloka/shloka6.webp";
import shloka7 from "../../../public/Assets/images/shloka/shloka7.webp";

export default function ShlokaCaseStudy() {
  return (
    <main className="w-full">
      {/* HERO IMAGE */}
      <section className="w-full">
        <Image
          src={shlokabanner}
          alt="Shloka Hero"
          className="w-full h-auto"
          priority
        />
      </section>

      {/* INTRO */}
      <section className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">SHLOKA</h2>
        <p className="text-sm text-gray-500 mt-1">
          Brand Concept, Brand Identity
        </p>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Shloka Birla School wanted to create an identity empowering holistic
          education. The challenge ahead was to create a brand for the Yash
          Birla Group that aimed at schools aiming to be a creative excellence.
        </p>
        <p className="mt-6 text-gray-600 leading-relaxed">The Birla schools not only emphasize on student freedom but also provide avenues to enable students to educate themselves by empowering holistic education. The Schools are integrated with natural surroundings allowing the students to be harmonious with nature despite the hustle and bustle of city life. Providing a natural environment for true and holistic growth, the organic education that is provided grows with the student no matter where they go.

        </p>
      </section>

      {/* BLACK STRIP */}
      <section className="bg-black py-10">
        <h3 className="text-center text-white italic text-[26px] md:text-[31px]">
          Empowering holistic education by branding it
        </h3>
      </section>

      {/* SKETCH IMAGES */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image src={shloka1} alt="Sketch Concept" className="w-full h-auto" />
        <Image src={shloka2} alt="Sketch Execution" className="w-full h-auto" />
      </section>

      {/* DESCRIPTION */}
      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-600 leading-relaxed text-sm">
        <p className="mt-6 text-gray-600 leading-relaxed">
          We defined four broad aspects of holistic education as transformation, metamorphosis, purity in wisdom and optimism in discipline.
        </p>

        <p className="mt-6 text-gray-600 leading-relaxed">The lotus flower grows in mud and rises above the surface to bloom and grow. Untouched by impurity, the flower sinks underwater by the night and rises above at dawn to bloom again. It is culturally associated with not only beauty but also purity and wisdom. Saraswati, the goddess of wisdom, has a lotus on one hand and mounts the swan, another symbol of enlightenment and transformation. Similarly a butterfly’s ability to adapt itself to change lends itself as a strong metaphor for metamorphosis. The sun is a symbol of optimism and discipline. The sun rises day after day regardless of weather conditions and inspite of traversing a set path it would still exude heat and warmth, giving you a ray of hope to start the day ahead.</p>

        <p className="mt-6 text-gray-600 leading-relaxed">We thus attributed the aspects of holistic education to the symbols of Swan, Butterfly, Lotus and Sun.</p>
      </section>

      {/* LOGO */}
      <section className="flex justify-center py-20">
        <Image
          src={logo}
          alt="Shloka Logo"
          width={logo.width}
          height={logo.height}
          className="max-w-full h-auto"
        />
      </section>

      {/* BUTTERFLY FULL WIDTH */}
      <section className="relative w-full">
        <Image
          src={shlokagif}
          alt="Butterfly Symbolism"
          className="w-full h-auto"
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-16 text-gray-600 leading-relaxed text-sm mt-10">
        <p className="mt-6">
          Incorporating all the four symbols in the logo and still being minimal and clutter free was difficult.
        </p>
        <p className="mt-6">Using these four icons as our guiding principles of the brand and its translation into design, brand Shloka emerged true to its roots.</p>
      </section>

      {/* MOCKUPS GRID */}
      <section className="max-w-6xl mx-auto mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">
          {/* Top Left */}
          <Image
            src={shloka4}
            alt="Library Signage"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />

          {/* Top Right */}
          <Image
            src={shloka5}
            alt="Digital Screen"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />

          {/* Bottom Left */}
          <Image
            src={shloka6}
            alt="Business Card"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />

          {/* Bottom Right */}
          <Image
            src={shloka7}
            alt="Backpack"
            width={400}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
