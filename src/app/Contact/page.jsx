"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import Contactbanner from "../../../public/Assets/images/contactBanner.webp";

const contact = () => {
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "bottom-left",
        autoClose: 4000,
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="relative h-[30vh] w-full">
        <Image
          src={Contactbanner}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-[#002855] text-white contact-us-form-container">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* LEFT — FORM */}
          <div className="p-10 lg:p-20 flex cust-left-padding">
            <div className="w-full max-w-xl">
              <h2 className="text-4xl font-semibold">
                We’d love to<br />hear from you!
              </h2>

              <form className="mt-10 space-y-1" onSubmit={handleSubmit}>
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-sm">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="text-sm">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-b bg-transparent border-gray-600 py-2 outline-none focus:border-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="font-body w-full sm:w-auto bg-white text-[#1B51FF] hover:bg-gray-50 font-semibold py-3 px-8 transition duration-200 ease-in-out tracking-wide uppercase cursor-pointer text-sm sm:text-base hover:scale-105 text-center disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT — MAP (UNCHANGED) */}
          <div className="h-[350px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.234511535598!2d72.8569272!3d19.1160496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62291442fb9%3A0x821a17fcf7de925f!2sABND%20-%20Branding%20Agency!5e0!3m2!1sen!2sin!4v1691127616974!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ minHeight: "40rem" }}
            ></iframe>
          </div>

        </div>
      </section>
    </>
  );
};

export default contact;
