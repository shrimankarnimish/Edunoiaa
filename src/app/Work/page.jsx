"use client";
import Image from "next/image";
import Link from "next/link";
import emversity from "../../../public/Assets/images/emversity.jpg";
import emversityhover from "../../../public/Assets/images/emversityt.jpg";
import vidyashilp from "../../../public/Assets/images/vidyashilp.jpg";
import vidyashilphover from "../../../public/Assets/images/vidyashilpt.jpg";
import flame from "../../../public/Assets/images/flame.jpg";
import flamehover from "../../../public/Assets/images/flamet.jpg";
import atoot from "../../../public/Assets/images/atoot.jpg";
import atoothover from "../../../public/Assets/images/atoott.jpg";

// Add more imports...

export default function WorkPage() {
  const items = [
    {
      Title: "Emversity",
      image: emversity,
      imageHover: emversityhover,
      link: "/Emversity",
    },

    {
      Title: "Vidyashilp",
      image: vidyashilp,
      imageHover: vidyashilphover,
      link: "/Vidyashilp",
    },
    {
      Title: "Flame University",
      image: flame,
      imageHover: flamehover,
      link: "Flame-University",
    },
    {
      Title: "Atoot",
      image: atoot,
      imageHover: atoothover,
      link: "/atoot",
    },
    // {
    //   Title: "Atoot",
    //   image: emversity,
    //   imageHover: atoothover,
    //   link: "/work/growgether",
    // },
  ];

  return (
    <div className="w-full bg-[#002855] text-white py-18">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <div className="h-1 w-6 bg-white mb-20"></div>
          <h1 className="text-4xl font-semibold">Work</h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, index) => (
            <div key={index}>
              <Link href={item.link}>
                <div className="relative w-full aspect-[4/3] overflow-hidden group">
                  {/* Normal Image */}
                  <Image
                    src={item.image}
                    alt={item.Title}
                    className="object-contain w-full h-full transition-opacity duration-100 group-hover:opacity-0"
                  />

                  {/* Hover Image */}
                  <Image
                    src={item.imageHover}
                    alt={`${item.Title} Hover`}
                    className="object-contain w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-100 group-hover:opacity-100"
                  />
                </div>
              </Link>

              <h6 className="mt-3 text-lg font-medium">{item.Title}</h6>
              <p className="text-sm text-gray-300">{item.Desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
