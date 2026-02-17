import Image from "next/image";
import { Fadeinup } from "@/app/Components/Animations";

// Images for flame university
import irmri1 from "../../../public/Assets/images/irmri/irmri1.webp"
import irmri2 from "../../../public/Assets/images/irmri/irmri2.webp"
import irmri3 from "../../../public/Assets/images/irmri/irmri3.webp"
import irmri4 from "../../../public/Assets/images/irmri/irmri4.webp"

export const metadata = {
  title:
    "FLAME University - Brand Purpose and Positioning, Brand Strategy, Brand and Business Alignment",
  description:
    "Building India's Pioneers in Liberal Education through a Decade of Partnership",
};

const Flame = () => {
  return (
    <>
      {/* Header Section */}
      <div className=" bg-[#002855] text-white py-40">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="aspect-[100/22] w-12 bg-white mb-6"></div>
              <h2 className="font-merriweather text-4xl md:text-5xl font-normal mb-8">
                Indian Rubber Material Research Institute
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="mb-0 font-merriweather-sans">Positioning</p>
                  <p className="mb-0 font-merriweather-sans">Brand Identity</p>
                  <p className="mb-0 font-merriweather-sans">
                    Communication Strategy
                  </p>
                  <p className="mb-0 font-merriweather-sans">Website</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <div className=" mx-auto max-w-[90%] pt-8 md:pt-12 container">
        <Fadeinup>
          <h2 className="font-serif text-2xl md:text-3xl font-normal leading-tight mb-4 md:mb-6">
            Objective
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div>
              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                The Indian Rubber Manufacturers and Research Association (IRMRA)
                has been serving the industry, from product to consultancy to
                industrial services for over 6 decades. Over the years, they
                established credibility and became renowned for their tyre and
                non-tyre products across Asia. As a notable and trusted rubber
                agency, they realized that they were looked upon as a
                manufacturers body and not a research institute. With a plethora
                of domains that they catered to, lack of awareness, and
                unexplored capabilities, they aimed to rebrand themselves to
                become The Indian Rubber Materials and Research Institute
                (IRMRI).
              </p>

              <div className="h-4 my-4"></div>

              <h2 className="font-serif text-2xl md:text-3xl font-normal leading-tight mb-4 md:mb-6">
                Thinking
              </h2>
              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                We identified that despite having a legacy of 6 decades, IRMRI
                was not looked upon seriously by multiple stakeholders. We began
                the process by identifying the main objective, i.e. to be the
                bridge between the government and the industry, in terms of
                rubber. We had to break the perception of a manufacturing body,
                promote research and development, expand its reach, and shed the
                ‘government body’ perception, thereby functioning like a
                corporate..
              </p>

              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                ABND realised that students and parents chose FLAME because of
                the diverse perspectives that the University helped build.
                Therefore, the Brand Essence for the 'new' brand of FLAME
                University was 'Diversity of the Mind.' This fresh brand thought
                revolved around the seamless blend of diverse disciplines upon
                one unified platform, thereby creating a culture of complete
                learning that is not one dimensional. FLAME believed that the
                real world does not function in silos and therefore, neither
                should education.
              </p>

              <div className="h-4 my-4"></div>
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-normal leading-tight mb-4 md:mb-6">
                Solution
              </h2>
              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                We split the solution into two levels: strategic and design. The
                rebranded entity was positioned to become synonymous to Rubber
                as a material, and focus on three aspects: Beyond Tyre, Talent
                Pool of Rubber Technologists, and being a National Pride, with
                International Expertise. We also identified IRMRI’s stakeholders
                and established it to stand as a single touchpoint between the
                network. Crafted as “The Rubber Experts”, we brought the
                solution to life by emphasizing on the ‘rigidity’ and
                ‘flexibility’ of rubber as a material, and IRMRI as an
                institute. By being Rigid in principle, and Flexible in
                Approach, IRMRI can now explore uncharted waters and grow
                exponentially..
              </p>

              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                ABND identified that distinguishing itself from institutions
                merely offering academic and extracurricular activities, FLAME
                University was committed to outcomes-driven education, extending
                its influence beyond the confines of student years to cultivate
                lifelong connections with its alumni and faculty community. The
                positioning for FLAME was crafted to go beyond just learning for
                life, but rather be an association for life. This was translated
                to the idea of 'Everlasting'
              </p>

              <p className="text-sm md:text-base leading-relaxed font-sans font-normal mb-4">
                To operationalise this essence, ABND categorised all of FLAME's
                offerings into ten distinct propositions. Each
                proposition—Everlasting Learning, Experiences, Impact, Insight,
                Connections, Support, Moments, Inspiration, Legacy, and
                Purpose—reflects FLAME's commitment to holistic development and
                impactful experiences, thereby reaffirming its status as a
                trailblazer of Liberal Education in India.
              </p>
              <div className="h-4 my-4"></div>
            </div>
          </div>
        </Fadeinup>
      </div>

      {/* Video Section */}
      <Fadeinup>
        <video className="block w-full" autoPlay loop muted preload="none">
          <source src="/Assets/images/irmri/irmri.mp4" />
        </video>
      </Fadeinup>

      {/* Images Grid 1 */}
      <Fadeinup>
        <div className=" mx-auto ]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Image src={irmri1} className="w-full h-auto" alt="" />
            <Image src={irmri2} className="w-full h-auto" alt="" />
          </div>
        </div>
      </Fadeinup>

         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Research & Analysis Dashboard
          </h1>
          <p className="text-gray-600">Visual representation of data categories</p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
          
          {/* Left Column - Research Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Research</h2>
              <div className="space-y-4">
                {['Research', 'Rubber', 'Results'].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 bg-blue-200 rounded-lg flex items-center justify-center">
                      <span className="text-blue-700 font-semibold">{item.charAt(0)}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-blue-200 to-blue-300 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-700 mb-2">MRI</div>
                  <div className="text-blue-600">Medical Imaging</div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Green Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-green-100 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-emerald-800 mb-4">Green Initiative</h2>
              <div className="space-y-4">
                {['Green', 'Growth', 'Progress', 'Awareness', 'Assurance'].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 bg-emerald-200 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-700 font-semibold">{item.charAt(0)}</span>
                    </div>
                    <span className="text-lg font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl p-6 shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-emerald-200 to-green-300 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">MRI</div>
                  <div className="text-emerald-600">Advanced Scanning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Black Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Security & Intelligence</h2>
              <div className="space-y-4">
                {['Black', 'Intelligence', 'Protection', 'Formally', 'Strength', 'Authority'].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-4 p-3 bg-gray-700 rounded-lg shadow-sm"
                  >
                    <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">{item.charAt(0)}</span>
                    </div>
                    <span className="text-lg font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg">
              <div className="aspect-video bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">MRI</div>
                  <div className="text-gray-300">Secure Imaging</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats/Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Research Accuracy</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-emerald-600">45%</div>
            <div className="text-gray-600">Growth Rate</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-gray-700">99.9%</div>
            <div className="text-gray-600">Security Level</div>
          </div>
        </div>

      </div>
    </div>



    </>
  );
};

export default Flame;
