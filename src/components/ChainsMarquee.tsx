"use client";

import { useEffect, useRef } from "react";

const CHAINS = [
  "Ethereum",
  "Bitcoin",
  "Solana",
  "Polygon",
  "Avalanche",
  "Arbitrum",
  "Optimism",
  "Base",
  "BNB Smart Chain",
  "Cosmos",
  "THORChain",
  "Tron",
  "Cardano",
  "Doge",
];

export default function ChainsMarquee() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let animationFrame = 0;
    let offset = 0;
    const speed = 0.5;
    const inner = container.firstElementChild as HTMLDivElement | null;
    if (!inner) return;

    function step() {
      offset -= speed;
      if (Math.abs(offset) >= inner.scrollWidth / 2) {
        offset = 0;
      }
      inner.style.transform = `translateX(${offset}px)`;
      animationFrame = requestAnimationFrame(step);
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const repeated = [...CHAINS, ...CHAINS, ...CHAINS];

  return (
    <section id="chains" className="py-12 sm:py-16 border-y border-white/10 bg-white/0">
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-8 whitespace-nowrap will-change-transform" style={{ width: "max-content" }}>
          {repeated.map((chain, index) => (
            <div
              key={`${chain}-${index}`}
              className="px-4 py-2 rounded-full border border-white/15 bg-white/5 text-sm text-white/90"
            >
              {chain}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


