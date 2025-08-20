"use client";

import Link from "next/link";
import DownloadButton from "@/components/DownloadButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WORDS = ["Simple", "Convenient", "Multichain"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % WORDS.length);
    }, 2000); // Change word every 2 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateOffset = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", updateOffset);
    return () => window.removeEventListener("scroll", updateOffset);
  }, []);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[1200px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_center,_#8A63F9_0%,_transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 text-center sm:text-left">
        <div className="max-w-3xl mx-auto sm:mx-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
            <span>$CTRL</span>
            <span className="opacity-60">One wallet for all your crypto</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight"
          >
            One wallet for all your crypto
            <br />
            <span className="shimmer-text">Take Ctrl</span>
          </motion.h1>
          <div className="mt-2 inline-block overflow-hidden h-[1.2em] relative align-bottom">
            <span className="word-ticker-slide block transition-transform duration-500 ease-in-out"
              style={{ transform: `translateY(-${wordIndex * 100}%)` }}>
              {WORDS.map((word) => (
                <span key={word} className="block h-[1.2em]">{word}</span>
              ))}
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 text-lg text-white/80 max-w-2xl"
          >
            Create your wallet in seconds. Pay gas in USDC or CTRL across supported chains. Connect to every dapp.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start"
          >
            <DownloadButton href="#download" />
            <Link
              href="#learn-more"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Learn more
            </Link>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}


