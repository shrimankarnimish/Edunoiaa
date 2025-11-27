'use client'
import React from "react";

function Footer() {
  return (
    <div className="w-full">

      {/* TOP BLUE SECTION */}
      <div className="w-full bg-[#002855] text-white px-6 sm:px-10 lg:px-20 py-14">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            Find out why leading <br />
            institutions trust Edunoia.
          </h2>

          {/* RIGHT FORM */}
          <div className="w-full max-w-sm ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
            />
            <input
              type="text"
              placeholder="Number"
              className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
            />

            <button className="bg-white text-[#002855] px-4 py-1 text-sm font-semibold">
              SEND
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM GRAY SECTION */}
      <div className="w-full bg-[#B7B3B3] text-[#002855] px-6 sm:px-10 lg:px-20 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* LEFT TEXT */}
          <h6 className="heading-blue  text-[#002855] ">
            Edunoia is a part of lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </h6>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-2">QUICK LINKS</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Work</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-2">CONTACT</h4>
            <p className="leading-relaxed">
              +91 9029024455 <br />
              info@edunoia.in
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
