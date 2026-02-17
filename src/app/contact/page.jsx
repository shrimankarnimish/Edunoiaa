"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleCaptchaChange = (token) => {
  //   setCaptchaToken(token);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!captchaToken) {
    //   toast.error("Please verify that you are not a robot.", {
    //     position: "top-right",
    //     autoClose: 4000,
    //   });
    //   return;
    // }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "bottom-left",
        autoClose: 4000,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // setCaptchaToken(null);

      // ✅ Redirect after success
      setTimeout(() => {
        router.push("/thank-you");
      }, 800);
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
    <div className="w-full bg-contact mt-20 text-white">
      <div className="container mx-auto py-18 grid grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left Content */}
        <div className="w-full mt-10 text-white max-w-2xl">
          <h1 className="text-4xl sm:text-3xl lg:text-6xl xl:text-6xl leading-[1.2]">
            India&apos;s First and Only Brand Consultancy for the Education
            Sector
          </h1>
          <div className="text-lg lg:text-xl mb-8 text-gray-200">
            <p className="mb-4">
              With over a decade of experience in creating and working with
              numerous prolific educational brands, we established Edunoia in
              2020.
            </p>
            <p>
              Edunoia offers advisory services, brand thinking and communication
              strategies to a broad cross-section of education institutions,
              EdTech companies, and other learning and development units in
              businesses.
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:flex mt-5 justify-end">
          <div className="bg-black/70 backdrop-blur-md p-8 lg:p-12 rounded-md w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Talk</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-400 bg-transparent py-2 outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border-b border-gray-400 bg-transparent py-2 outline-none focus:border-white resize-none"
                />
              </div>

              {/* <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
                theme="dark"
              /> */}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-[#1B51FF] font-semibold py-4 px-8 uppercase tracking-wide hover:bg-gray-50 transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15079.234511535598!2d72.8569272!3d19.1160496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b62291442fb9%3A0x821a17fcf7de925f!2sABND%20-%20Branding%20Agency!5e0!3m2!1sen!2sin!4v1691127616974!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Contact;
