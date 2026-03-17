"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";

export default function ThankYouConversion() {
  const pathname = usePathname();

  if (pathname !== "/thank-you") return null;

  return (
    <Script
      id="google-ads-conversion"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          gtag('event', 'conversion', {
            'send_to': 'AW-17933175441/4z9dCKLI6fMbEJGVmudC',
            'value': 1.0,
            'currency': 'INR'
          });
        `,
      }}
    />
  );
}
