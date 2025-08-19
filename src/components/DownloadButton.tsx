"use client";

import Link from "next/link";

type DownloadButtonProps = {
  label?: string;
  href?: string;
  className?: string;
  ariaLabel?: string;
};

export default function DownloadButton({
  label = "Download for Chrome",
  href,
  className = "",
  ariaLabel,
}: DownloadButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out shadow-md hover:shadow-lg transform-gpu";

  const content = (
    <>
      {/* Dark gradient background */}
      <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-purple-900 to-black transition-transform duration-500 group-hover:scale-110"></span>

      {/* Glow border effect */}
      <span className="absolute inset-0 rounded-full border border-purple-500 opacity-40 group-hover:opacity-100 group-hover:animate-pulse"></span>

      {/* Icon */}
      <svg
        className="relative w-5 h-5 mr-2 text-purple-400 transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C8.21 0 4.8 1.86 2.8 4.8L7.2 9.2C8.1 8.4 9.4 8 10.8 8C12.2 8 13.5 8.4 14.4 9.2L18.8 4.8C16.8 1.86 13.39 0 9.6 0H12ZM21.2 7.2L16.8 11.6C17.6 12.5 18 13.8 18 15.2C18 16.6 17.6 17.9 16.8 18.8L21.2 23.2C23.14 20.2 25 16.79 25 13H21.2V7.2ZM2.8 18.8L7.2 14.4C8.1 15.2 9.4 15.6 10.8 15.6C12.2 15.6 13.5 15.2 14.4 14.4L18.8 18.8C16.8 21.8 13.39 23.6 9.6 23.6H12C8.21 23.6 4.8 21.74 2.8 18.8Z"/>
      </svg>

      {/* Text */}
      <span className="relative z-10 text-white transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label={ariaLabel ?? label}
        className={`${base} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? label}
      className={`${base} ${className}`}
    >
      {content}
    </button>
  );
}
