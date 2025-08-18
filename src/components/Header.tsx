"use client";

import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white text-black font-bold flex items-center justify-center">
            C
          </div>
          <span className="text-lg font-semibold">Ctrl</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="#token" className="hover:opacity-80 transition-opacity">$CTRL</Link>
          <Link href="#support" className="hover:opacity-80 transition-opacity">Support</Link>
          <Link href="#security" className="hover:opacity-80 transition-opacity">Security</Link>
          <Link href="#resources" className="hover:opacity-80 transition-opacity">Resources</Link>
        </nav>

        <div className="hidden md:block">
          <DownloadButton href="#download" />
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-white/20"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
            <span className="block h-0.5 w-6 bg-current"></span>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm">
            <Link href="#token" onClick={() => setIsOpen(false)}>$CTRL</Link>
            <Link href="#support" onClick={() => setIsOpen(false)}>Support</Link>
            <Link href="#security" onClick={() => setIsOpen(false)}>Security</Link>
            <Link href="#resources" onClick={() => setIsOpen(false)}>Resources</Link>
            <DownloadButton href="#download" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}


