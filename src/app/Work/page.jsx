"use client";
import Image from "next/image";
import Link from "next/link";
import Logo1 from "../../../public/Assets/images/Logo1.jpg";   
import Logo2 from "../../../public/Assets/images/Logo2.jpg";
import Logo3 from "../../../public/Assets/images/Logo3.jpg";
import Logo4 from "../../../public/Assets/images/Logo4.jpg";
import Logo5 from "../../../public/Assets/images/Logo5.jpg";
import Logo6 from "../../../public/Assets/images/Logo6.jpg";

export default function WorkPage() {
    const items = [
        { title: "Gumazzing", img: Logo1, link: "/work/growgether" },
        { title: "Shopse", img: Logo2, link: "/work/storia" },
        { title: "Growgether", img: Logo3, link: "/work/emversity" },
        { title: "Emversity", img: Logo4, link: "/work/brand4" },
        { title: "Tecknotrove", img: Logo5, link: "/work/brand5" },
        { title: "India Nightlife", img: Logo6, link: "/work/brand6" },
    ];

    return (
        <div className="w-full bg-black text-white py-18 ">
            
            <div className="container mx-auto ">
                
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
                                <div className=" bg-black flex items-center justify-center hover:opacity-80 transition mx-auto">
                                    <Image
                                        src={item.img}
                                        
                                        alt={item.title}
                                        className="object-contain"
                                    />
                                </div>
                            </Link>

                           <p className="mt-2 text-base text-white">{item.title}</p>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
