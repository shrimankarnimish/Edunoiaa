import { Merriweather, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClientBody from "./Components/ClientBody";
import ThankYouConversion from "./Components/ThankYouConversion";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  title:
    "Brand Strategy & Consultancy for Schools, Colleges & Universities in India",
  description:
    "Brand Strategy & Consultancy for Schools, Colleges & Universities in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${openSans.variable}`}>
      <head>
        {/* Google Ads / Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17933175441"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17933175441');
            `,
          }}
        />
      </head>

      <body className="antialiased">
        <ClientBody>
          <Navbar />

          {/* Conversion fires only on thank-you page */}
          <ThankYouConversion />

          {children}
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
