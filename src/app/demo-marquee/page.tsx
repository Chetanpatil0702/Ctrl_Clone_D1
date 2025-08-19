import MarqueeStrip from "@/components/MarqueeStrip";

// Sample items for logo marquee
const logoItems = [
  { src: "/logos/1.svg", alt: "Logo 1" },
  { src: "/logos/2.svg", alt: "Logo 2" },
  { src: "/logos/3.svg", alt: "Logo 3" },
  { src: "/logos/4.svg", alt: "Logo 4" },
  { src: "/logos/5.svg", alt: "Logo 5" },
  { src: "/logos/6.svg", alt: "Logo 6" },
  { src: "/logos/7.svg", alt: "Logo 7" },
  { src: "/logos/8.svg", alt: "Logo 8" },
  { src: "/logos/9.svg", alt: "Logo 9" },
  { src: "/logos/10.svg", alt: "Logo 10" },
  { src: "/logos/11.svg", alt: "Logo 11" },
  { src: "/logos/12.svg", alt: "Logo 12" },
];

// Sample text items for feature marquee
const textItems = [
  { text: "Ethereum" },
  { text: "Bitcoin" },
  { text: "Solana" },
  { text: "Polygon" },
  { text: "Avalanche" },
  { text: "Arbitrum" },
  { text: "Optimism" },
  { text: "Base" },
  { text: "BNB Smart Chain" },
  { text: "Cosmos" },
  { text: "THORChain" },
  { text: "Tron" },
];

export default function DemoMarqueePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Infinite Loop Marquee Demo
          </h1>
          <p className="text-lg text-gray-600">
            Responsive, accessible marquee with seamless looping
          </p>
        </div>

        {/* Logo Marquee - Normal Speed */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Logo Strip (Normal Speed)
          </h2>
          <MarqueeStrip 
            items={logoItems} 
            speed="normal" 
            pauseOnHover 
          />
        </div>

        {/* Text Marquee - Fast Speed */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Text Strip (Fast Speed)
          </h2>
          <MarqueeStrip 
            items={textItems} 
            speed="fast" 
            pauseOnHover 
          />
        </div>

        {/* Slow Speed Demo */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Slow Speed Demo
          </h2>
          <MarqueeStrip 
            items={logoItems.slice(0, 6)} 
            speed="slow" 
            pauseOnHover={false}
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Features
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Seamless infinite looping</li>
              <li>• Responsive design</li>
              <li>• Accessibility compliant</li>
              <li>• Pause on hover</li>
              <li>• Respects reduced motion</li>
              <li>• RTL support</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Speed Options
            </h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Slow: 45 seconds</li>
              <li>• Normal: 30 seconds</li>
              <li>• Fast: 18 seconds</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
