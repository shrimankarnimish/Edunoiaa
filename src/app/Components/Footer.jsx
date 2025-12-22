"use client";
import React from "react";

function Footer() {
  return (
    <div className="w-full">
      {/* TOP BLUE SECTION */}
      <div className="w-full bg-[#002855] text-white">
        <div className="container mx-auto  py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                className="w-full bg-transparent border-b border-[#7a8be2] text-white outline-none pb-1"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full bg-transparent border-b border-[#5c76ff] text-white outline-none pb-1"
              />
              <button className="cursor-pointer bg-white text-blue-600 px-6 sm:px-8 py-2.5 sm:py-3  font-semibold hover:bg-gray-100 transition-colors uppercase text-xs sm:text-sm tracking-wide">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM BLUE SECTION */}
      <div className="w-full bg-[#1B51FF] ">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* LEFT TEXT - Takes 2 columns worth of space on desktop */}
            <div className="md:col-span-2 max-w-full sm:max-w-[25rem]">
              <h3 className="title">
                Edunoia is a part of lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </h3>
            </div>

            {/* QUICK LINKS & CONTACT - Takes 1 column on desktop */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {/* QUICK LINKS */}
              <div>
                <p className="font-semibold mb-4 text-white">QUICK LINKS</p>
                <ul className="space-y-2 text-white">
                  <li>
                    <a href="#" className="hover:underline block">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline block">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline block">
                      Work
                    </a>
                  </li>
                </ul>
              </div>

              {/* CONTACT */}
              <div>
                <p className="font-semibold mb-4 text-white">CONTACT</p>
                <div className="space-y-2 text-white">
                  <p>+91 9029024455</p>
                  <p>info@edunoia.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
