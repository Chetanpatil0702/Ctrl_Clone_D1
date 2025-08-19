import Image from "next/image";

type ChainItem = {
  name: string;
  icon?: string;
};

type CarouselSpeed = "slow" | "normal" | "fast";

interface ChainCarouselProps {
  items: ChainItem[];
  speed?: CarouselSpeed;
  className?: string;
}

export default function ChainCarousel({ 
  items, 
  speed = "normal",
  className = ""
}: ChainCarouselProps) {
  // Ensure we have enough items for smooth looping
  const safeItems = items.length < 4 ? [...items, ...items, ...items, ...items] : items;
  
  // Duplicate items for seamless looping
  const duplicatedItems = [...safeItems, ...safeItems];

  return (
    <section 
      aria-label="Blockchain chains carousel" 
      className={`w-full overflow-hidden ${className}`}
    >
      <div className="marquee-mask marquee-paused">
        <div 
          className="marquee gap-4 sm:gap-6" 
          data-speed={speed}
          role="list"
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${index}-${item.name}`}
              role="listitem"
              className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 min-w-fit flex-shrink-0 hover:bg-black/5 hover:border-white/30 transition-all duration-300 cursor-pointer group"
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
              <span className="text-xs sm:text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
