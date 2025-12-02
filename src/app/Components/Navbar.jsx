"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/Assets/images/Logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
   <header
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/40 backdrop-blur-md"}`}
>
<div className="relative z-5 container mx-auto">
                <nav className="flex items-center justify-between py-4 mt-5">

                    {/* LOGO */}
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                                priority
                                className="h-8 w-auto md:h-10 object-contain cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-10">
                        <li>
                            <Link href="/About"
                                className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer" >
                                ABOUT
                            </Link>
                        </li>
                         <Link href="/Services"
                                className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer" >
                               SERVICES
                            </Link>
                                  <Link href="/Work"
                                className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer" >
                               WORK
                            </Link>

                              <Link href="/Team"
                                className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer" >
                               TEAM
                            </Link>
                     
                        <li className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer">THOUGHT LEADERSHIP</li>
                        <li className="text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer">CONTACT</li>
                    </ul>


                    {/* Mobile Hamburger */}
                    <button className="md:hidden text-white" onClick={() => setOpen(true)}>
                        <Menu size={28} />
                    </button>

                    {/* Mobile Sidebar Menu */}
                    <div
                        className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-lg transform 
                        ${open ? "translate-x-0" : "translate-x-full"}
                        transition-transform duration-300 md:hidden z-[999]`}
                    >
                        <button
                            className="absolute top-5 right-5 text-white"
                            onClick={() => setOpen(false)}
                        >
                            <X size={28} />
                        </button>

                        <ul className="flex flex-col mt-20 gap-6 pl-10">
                            <li className="text-white text-base tracking-wide">ABOUT</li>
                            <li className="text-white text-base tracking-wide">WHY EDUNOIA</li>
                            <li className="text-white text-base tracking-wide">SERVICES</li>
                            <li className="text-white text-base tracking-wide">WORK</li>
                            <li className="text-white text-base tracking-wide">THOUGHT LEADERSHIP</li>
                            <li className="text-white text-base tracking-wide">CONTACT</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
