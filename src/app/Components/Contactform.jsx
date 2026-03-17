"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
          subject: "Edunoia Enquiry",
        }),
      });

      const result = await response.json();

      if (!result.success) throw new Error();

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setCaptchaToken(null);

      setTimeout(() => {
        router.push("/thank-you");
      }, 800);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black/70 backdrop-blur-md p-8 lg:p-12 rounded-md w-full max-w-lg">
      <h2 className="text-3xl font-bold mb-8 text-white">Let&apos;s Talk</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-400 bg-transparent py-2 outline-none text-white"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-400 bg-transparent py-2 outline-none text-white"
        />

        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border-b border-gray-400 bg-transparent py-2 outline-none text-white"
        />

        <textarea
          name="message"
          rows="2"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border-b border-gray-400 bg-transparent py-2 outline-none text-white resize-none"
        />

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
          theme="dark"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-[#1B51FF] font-semibold py-4 px-8 uppercase disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;