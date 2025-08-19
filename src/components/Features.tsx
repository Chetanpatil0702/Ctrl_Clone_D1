"use client";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Simple",
    description: "Focus on opportunities, not fees.",
    icon: "/file.svg",
  },
  {
    title: "Convenient",
    description: "One wallet for all your crypto.",
    icon: "/globe.svg",
  },
  {
    title: "Multichain",
    description: "Connect to every dapp across 2,300+ chains.",
    icon: "/next.svg",
  },
];

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {FEATURES.map((feature) => (
            <motion.div 
              key={feature.title}
              variants={itemVariants}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {feature.icon && (
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                  className="mb-4"
                />
              )}
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


