import Image from "next/image";
import BlogGrid from "../Components/Blog/BlogGrid";
import { FadeUpCard } from "../Components/Animations";
import { Fadeinright, Fadeinleft } from "../Components/Animations";
import backgroundImage from "../../../public/Assets/images/thinking_banner.jpg";

async function getEdunoiaBlogs() {
  const res = await fetch("https://abndgroup.com/abndblog/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query AllPosts {
          posts(
            first: 100
            where: {
              categoryName: "Edunoia"
              orderby: { field: DATE, order: DESC }
            }
          ) {
            nodes {
              id
              title
              excerpt
              date
              slug
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
              author {
                node {
                  name
                }
              }
            }
          }
        }
      `,
    }),
    cache: "no-store",
  });

  const json = await res.json();
  return json?.data?.posts?.nodes || [];
}

export default async function Page() {
  const posts = await getEdunoiaBlogs();

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative service-section w-full flex items-end mt-15_old">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-10 container mx-auto pb-40">
          <Fadeinright>
            <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl text-white leading-[1.2] tracking-light">
              Thought leadership that shapes <br className="br-hide" />
              the future of education branding.
            </h1>
          </Fadeinright>
        </div>
      </section>

      {/* INTRO SECTION - Updated to match first image styling */}
      <div className="w-full bg-white py-20">
        <div className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 container">
          {/* Left Content */}
          <div className="text-gray-300 space-y-10">
            <Fadeinleft>
              <p className="p-grey">
                At Edunoia, we believe in sharing knowledge. Our insights,
                research papers, and reading lists explore what&apos;s next in
                branding, communication, and learning.
              </p>

              <p className="p-grey">
                From understanding Gen Z enrolment behaviour to decoding the new
                NEP&apos;s brand impact, we&apos;re constantly studying the
                shifts shaping education.
              </p>
            </Fadeinleft>
          </div>

          {/* Right Content - Updated to match first image styling */}
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

        {/* BLOG GRID SECTION */}
        <div className="mt-20">
          <FadeUpCard>
            <div className="mx-auto px-6 container">
              {/* BlogGrid will handle the 3-column layout internally */}
              <BlogGrid posts={posts} />
            </div>
          </FadeUpCard>
        </div>
      </div>
    </div>
  );
}
