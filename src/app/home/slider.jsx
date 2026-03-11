"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Fadeinup } from "../Components/Animations";
import { useState, useEffect } from "react";

import case1 from "../../../public/Assets/images/thumbnail1.webp";
import case2 from "../../../public/Assets/images/thumbnail2.webp";
import case3 from "../../../public/Assets/images/thumbnail3.webp";

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
    cache: "force-cache",
  });

  const json = await res.json();
  return json?.data?.posts?.nodes || [];
}

export default function CaseStudyCarousel() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const fetchedBlogs = await getEdunoiaBlogs();
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  // Transform API data into carousel card format
  const cards = blogs.map((blog) => ({
    title: blog.title,
    img: blog.featuredImage?.node?.sourceUrl || case1, // Fallback image if no featured image
    href: `thinking/${blog.slug}`,
  }));

  // Fallback to static cards if no blogs are loaded yet or if API fails
  const displayCards = cards.length > 0 ? cards : [];

  if (loading) {
    return (
      <Fadeinup>
        <div className="w-full container mx-auto py-16">
          <div className="flex justify-center items-center h-[420px]">
            <p>Loading blogs...</p>
          </div>
        </div>
      </Fadeinup>
    );
  }

  return (
    <Fadeinup>
      <div className="w-full container mx-auto py-10">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          navigation={false}
          preventClicks={false}
          preventClicksPropagation={false}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {displayCards.map((card, index) => (
            <SwiperSlide key={index}>
              <a
                href={card.href}
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="relative w-full h-[420px] sm:h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden group cursor-pointer">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover italic"
                  />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>

                  <h4 className="absolute bottom-5 left-5 right-5 text-white font-semibold text-xl sm:text-2xl leading-snug drop-shadow-lg italic">
                    {card.title}
                  </h4>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Fadeinup>
  );
}
