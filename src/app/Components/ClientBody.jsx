"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClientBody({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/Contact") {
      document.body.classList.add("contact-us-form-container");
    } else {
      document.body.classList.remove("contact-us-form-container");
    }
  }, [pathname]);

  return (
    <>
      {children}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
