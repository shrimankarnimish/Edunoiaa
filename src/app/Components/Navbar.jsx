"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../../public/Assets/images/LogoNew.webp";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper function to check if a link is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  // Navigation items for better maintainability
  const navItems = [
    { path: "/About", label: "ABOUT" },
    { path: "/Services", label: "SERVICES" },
    { path: "/Work", label: "WORK" },
    { path: "/Team", label: "TEAM" },
    { path: "/ThoughtLeadership", label: "THOUGHT LEADERSHIP" },
    { path: "/Contact", label: "CONTACT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
    ${
      scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/40 backdrop-blur-md"
    }`}
    >
      <div className="relative z-5 container mx-auto">
        <nav className="flex items-center justify-between py-4 mt-1">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src={Logo}
                style={{ height: "4rem" }}
                alt="Logo"
                priority
                className="h-10 w-auto md:h-10 object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`relative text-white text-[20px] tracking-wide hover:opacity-70 cursor-pointer transition-all duration-300
                    ${isActive(item.path) ? "font-medium" : ""}`}
                >
                  {item.label}
                  {/* Active underline indicator */}
                  {isActive(item.path) && (
                    <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-white rounded-full"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Mobile Sidebar Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 backdrop-blur-lg transform 
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
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`relative text-white text-base tracking-wide block py-2 transition-all duration-300
                      ${isActive(item.path) ? "font-medium" : ""}`}
                  >
                    {item.label}
                    {/* Active indicator for mobile */}
                    {isActive(item.path) && (
                      <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}