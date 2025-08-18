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
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold transition-colors duration-300 border-[#231942] bg-white text-[#231942] hover:text-white";

  const content = (
    <>
      <span className="absolute inset-0 origin-left scale-x-0 transform bg-[#231942] transition-transform duration-300 group-hover:scale-x-100" />
      <span className="relative block transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
        {label}
      </span>
      <span className="pointer-events-none absolute left-0 right-0 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel ?? label} className={`${base} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" aria-label={ariaLabel ?? label} className={`${base} ${className}`}>
      {content}
    </button>
  );
}


