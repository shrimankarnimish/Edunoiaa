"use client";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import Image from "next/image";
import Logo from "../../../public/Assets/images/LogoNew.webp";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Enquiry sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Failed to send enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full footer">
      {/* TOP BLUE SECTION */}
      <div className="w-full bg-[#002855] text-white footer-form-section">
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mt-10">
              Find out why leading <br />
              institutions trust Edunoia.
            </h2>

            {/* RIGHT FORM */}
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-sm ml-auto space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
              />

              <input
                type="text"
                name="phone"
                placeholder="Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#7a8be2] text-white outline-none pb-1"
              />

              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
              />

              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3 font-semibold hover:bg-gray-100 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wide disabled:opacity-50"
              >
                {loading ? "Sending..." : "SEND"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM BLUE SECTION */}
      <div className="w-full bg-[#1B51FF]">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 max-w-full sm:max-w-[25rem]">
               <div className="flex items-start gap-4">
                <Image
                  src={Logo}
                  alt="Edunoia Logo"
                  width={140}
                  height={40}
                  priority
                />
                </div>
              <h6 className="p-italic-white mt-5">Edunoia is a part of ABND</h6>
            
              <p className="text-white mt-4">
                ABND is a Consulting firm that offers Brand Strategy, Design, and
                Culture-building. We have 5 clearly defined practice areas.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="font-semibold mb-4 text-white">QUICK LINKS</p>
                <ul className="space-y-2 text-white">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/work">Work</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-4 text-white">CONTACT</p>
                <p className="text-white">+91 9029024455</p>
                <p className="text-white">info@edunoia.in</p>
              </div>
            </div>

            <div className="mb-4 text-white md:col-span-3 flex flex-wrap gap-6 mt-8 md:justify-end">
              <a href="https://www.facebook.com/TeamABND/">FACEBOOK</a>
              <a href="https://www.linkedin.com/company/teamabnd/">LINKEDIN</a>
              <a href="https://www.instagram.com/teamabnd/">INSTAGRAM</a>
              <a href="https://x.com/teamabnd">X</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
