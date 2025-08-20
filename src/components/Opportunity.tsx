"use client";

import { motion } from "framer-motion";

export default function Opportunity() {
  return (
    <section id="product" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            {/* 🔥 Animated Gradient Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent animate-gradient-text">
              Capture every opportunity on every chain.
            </h2>

            {/* Content with animated fade-in */}
            <div className="mt-6 space-y-6 text-white/80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1, // Initial stagger for the first item
                }}
                variants={{
                  visible: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } },
                }}
              >
                <h3 className="font-semibold text-lg text-white">10M+ assets at your fingertips</h3>
                <p className="text-sm">Support for EVM chains, Cosmos, Solana, Bitcoin, THORChain, TRON and more.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.3, // Stagger for the second item
                }}
                variants={{
                  visible: { y: [0, 5, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } },
                }}
              >
                <h3 className="font-semibold text-lg text-white">Connect to every application</h3>
                <p className="text-sm">Works with dapps on 2,300+ blockchains and testnets.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.5, // Stagger for the third item
                }}
                variants={{
                  visible: { y: [0, -5, 0], transition: { repeat: Infinity, duration: 4, ease: "easeInOut" } },
                }}
              >
                <h3 className="font-semibold text-lg text-white">One home for all your NFTs</h3>
                <p className="text-sm">Gallery across 30+ chains including ETH, BTC, Solana and more.</p>
              </motion.div>
            </div>
          </div>

          {/* 🔥 Animated Gradient Border */}
          <div className="relative rounded-2xl p-[2px] overflow-hidden animate-gradient-border shadow-[0_0_25px_rgba(255,255,255,0.2)]">
            <div className="rounded-2xl bg-black/90 aspect-[4/3]" />
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        /* Gradient border animation */
        @keyframes gradientBorder {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-border {
          background: linear-gradient(
            90deg,
            #ff00ff,
            #00ffff,
            #ff9900,
            #00ff66
          );
          background-size: 300% 300%;
          animation: gradientBorder 6s ease infinite;
        }

        /* Heading shimmer */
        @keyframes gradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradientText 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
