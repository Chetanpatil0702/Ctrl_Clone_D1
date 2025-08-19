import Image from "next/image";
import ChainsIntro from "./ChainsIntro";

const CHAINS = [
  { name: "Avalanche", icon: "/file.svg" },
  { name: "Bitcoin", icon: "/globe.svg" },
  { name: "THORChain", icon: "/next.svg" },
  { name: "Tron", icon: "/vercel.svg" },
  { name: "Cardano", icon: "/window.svg" },
  { name: "BNB Smart Chain", icon: "/file.svg" },
  { name: "Cosmos", icon: "/globe.svg" },
  { name: "Ethereum", icon: "/next.svg" },
  { name: "Solana", icon: "/vercel.svg" },
  { name: "Polygon", icon: "/window.svg" },
  { name: "Arbitrum", icon: "/file.svg" },
  { name: "Optimism", icon: "/globe.svg" },
  { name: "Base", icon: "/next.svg" },
  { name: "Doge", icon: "/vercel.svg" },
];

export default function ChainsSection() {
  const duplicated = [...CHAINS, ...CHAINS];

  return (
    <section className="py-20 sm:py-24 bg-transparent text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Intro */}
          <ChainsIntro />

          {/* Right Side: Vertical Marquee */}
          <div className="relative h-80 overflow-hidden">
            <div className="flex flex-col animate-vertical gap-4">
              {duplicated.map((chain, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-start rounded-xl border border-white/10 px-6 py-3 min-h-[60px]"
                >
                  <Image
                    src={chain.icon}
                    alt={chain.name}
                    width={28}
                    height={28}
                    className="mr-3"
                  />
                  <span className="text-lg font-medium">{chain.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
