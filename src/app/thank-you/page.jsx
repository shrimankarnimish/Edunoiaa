import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#002855] px-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 sm:p-10 text-center">
        {/* Accent Glow */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#1B51FF]/20 rounded-full blur-2xl" />

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1B51FF]/10">
          <svg
            className="h-8 w-8 text-[#1B51FF]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-2xl sm:text-3xl font-bold text-[#002855] mb-3">
          Thank You!
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-8">
          Your details have been successfully submitted. Our team will reach out
          to you shortly to guide you further.
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="bg-[#002855] text-[#ffff] font-semibold py-4 px-8 uppercase tracking-wide hover: transition disabled:opacity-50"
        >
          Back to Home
        </Link>

        {/* Footer Note */}
        <p className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Edunoia
        </p>
      </div>
    </div>
  );
}
