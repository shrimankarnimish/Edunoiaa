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

  // Navigation items
  const navItems = [
    { path: "/About", label: "ABOUT" },
    { path: "/Services", label: "SERVICES" },
    { path: "/Work", label: "WORK" },
    { path: "/Team", label: "TEAM" },
    { path: "/Thinking", label: "THOUGHT LEADERSHIP" },
    { path: "/Contact", label: "CONTACT" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-black/60 backdrop-blur-md" : "bg-black/40 backdrop-blur-md"}`}
      >
        <div className="relative z-5 container mx-auto px-4">
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
                    {isActive(item.path) && (
                      <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-white rounded-full"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </nav>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-500 md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-950 via-black to-gray-950 
          shadow-2xl transform transition-all duration-500 ease-out md:hidden z-[70]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300 z-10"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <X size={32} strokeWidth={2.5} />
        </button>

        {/* Logo in Sidebar */}
        <div className="pt-8 px-8 pb-6">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image
              src={Logo}
              alt="Logo"
              className="h-12 w-auto object-contain cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col px-4 pt-4">
            {navItems.map((item, index) => (
              <li
                key={item.path}
                className="transform transition-all duration-700 ease-out"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
                  transitionDelay: open ? `${index * 80 + 100}ms` : '0ms'
                }}
              >
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`relative block px-6 py-4 rounded-xl transition-all duration-300 group
                    ${isActive(item.path) 
                      ? "bg-white/10 text-white shadow-lg shadow-white/5" 
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`}
                >
                  {/* Active Indicator Bar */}
                  <span className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-10 bg-white rounded-r-full transition-all duration-300
                    ${isActive(item.path) ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
                  />
                  
                  {/* Text */}
                  <span className={`block text-base tracking-widest transition-all duration-300
                    ${isActive(item.path) ? "font-semibold translate-x-0" : "font-normal group-hover:translate-x-2"}`}
                  >
                    {item.label}
                  </span>

                  {/* Animated Underline on Hover */}
                  <span className={`absolute bottom-2 left-6 h-[2px] bg-white/50 rounded-full transition-all duration-300
                    ${isActive(item.path) ? "w-12" : "w-0 group-hover:w-8"}`}
                  />

                  {/* Hover Arrow */}
                  <span className={`absolute right-6 top-1/2 transform -translate-y-1/2 transition-all duration-300
                    ${isActive(item.path) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"}`}
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-white/10">
          <p className="text-gray-500 text-sm">© 2024 Your Company</p>
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </>
  );
}