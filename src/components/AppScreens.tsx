"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

interface Slice {
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

const SLICES: Slice[] = [
  {
    title: "Focus on opportunities, not fees.",
    description:
      "Pay gas in USDC or CTRL, not just volatile native tokens. Avoid unexpected fees and focus on what matters most.",
    alignment: "left",
  },
  {
    title: "One wallet for all your crypto.",
    description:
      "Seamlessly manage millions of assets and NFTs across 2,300+ blockchains, all from a single, intuitive interface.",
    alignment: "right",
  },
  {
    title: "Connect to every dapp.",
    description:
      "Access any dapp with universal compatibility. No more switching wallets and managing multiple browser extensions.",
    alignment: "left",
  },
  {
    title: "True ownership and control.",
    description:
      "Your keys, your crypto. Ctrl Wallet is non-custodial, giving you complete control over your assets and seed phrase.",
    alignment: "right",
  },
];

interface TextCardProps {
  slice: { title: string; description: string; alignment: 'left' | 'right' };
  scrollYProgress: any; // Ideally this would be MotionValue<number>, but for brevity and current usage, any is tolerated if Framer Motion types are complex.
  index: number;
}

export default function AppScreens() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-transparent py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16">
          Seamlessly Connected.
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-8">
          {/* Left Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-16 lg:gap-24 lg:pr-8">
            {SLICES.filter((s) => s.alignment === "left").map((slice, i) => (
              <TextCard
                key={i}
                slice={slice}
                scrollYProgress={scrollYProgress}
                index={i}
              />
            ))}
          </div>

          {/* Sticky Phone Mockup */}
          <div className="sticky top-24 h-[500px] w-[300px] flex-shrink-0 bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-white/10 lg:w-[350px] lg:h-[600px] flex items-center justify-center text-white text-2xl">
            <Image
              src="/phone-mockup.png"
              alt="App Screen"
              width={350}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-1/3 flex flex-col gap-16 lg:gap-24 lg:pl-8 mt-16 lg:mt-0">
            {SLICES.filter((s) => s.alignment === "right").map((slice, i) => (
              <TextCard
                key={i}
                slice={slice}
                scrollYProgress={scrollYProgress}
                index={i + SLICES.filter((s) => s.alignment === "left").length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TextCard({ slice, scrollYProgress, index }: TextCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const initialX = slice.alignment === "left" ? -120 : 120;

  // Parallax + rotation effect while scrolling
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <motion.div
      ref={(node) => {
        ref.current = node;
        inViewRef(node);
      }}
      style={{ y: parallaxY, rotate: rotate }}
      initial={{ opacity: 0, x: initialX, scale: 0.95, filter: "blur(10px)" }}
      animate={{
        opacity: inView ? 1 : 0,
        x: inView ? 0 : initialX,
        scale: inView ? 1 : 0.95,
        filter: inView ? "blur(0px)" : "blur(10px)",
      }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: index * 0.15, // stagger delay
      }}
      whileHover={{
        scale: 1.05,
        rotateX: slice.alignment === "left" ? 3 : -3,
        rotateY: slice.alignment === "left" ? -3 : 3,
        boxShadow: "0px 20px 40px rgba(0, 120, 255, 0.35)", // <- change color here
      }}
      whileTap={{ scale: 0.98 }}
      className="relative rounded-2xl p-6 border border-white/10 shadow-lg text-white transition-all duration-300 bg-transparent"
    >
      <h3 className="text-2xl font-semibold mb-4">{slice.title}</h3>
      <p className="text-white/80 leading-relaxed">{slice.description}</p>
    </motion.div>
  );
}
