import Image from "next/image";

type MarqueeItem = {
  src?: string;
  alt?: string;
  text?: string;
};

type MarqueeSpeed = "slow" | "normal" | "fast";

interface MarqueeStripProps {
  items: MarqueeItem[];
  speed?: MarqueeSpeed;
  pauseOnHover?: boolean;
}

export default function MarqueeStrip({ 
  items, 
  speed = "normal", 
  pauseOnHover = true 
}: MarqueeStripProps) {
  // Ensure we have at least 4 items for smooth looping
  const safeItems = items.length < 4 ? [...items, ...items, ...items, ...items] : items;
  
  // Duplicate items for seamless looping
  const duplicatedItems = [...safeItems, ...safeItems];

  return (
    <section 
      aria-label="Brand/feature strip" 
      className={`w-full overflow-hidden px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto ${pauseOnHover ? 'marquee-paused' : ''}`}
    >
      <div className="marquee-mask">
        <div 
          className="marquee gap-6" 
          data-speed={speed}
          role="list"
        >
          {duplicatedItems.map((item, index) => (
            <li 
              key={`${index}-${item.src || item.text}`}
              role="listitem"
              className="flex items-center justify-center rounded-2xl border bg-white/70 backdrop-blur p-4 h-20 sm:h-24 md:h-28 min-w-40 sm:min-w-48 md:min-w-56 shadow-sm flex-shrink-0"
            >
              {item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt || `Logo ${index + 1}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
              ) : (
                <span 
                  className="text-sm sm:text-base md:text-lg font-medium text-gray-800 truncate max-w-full"
                  title={item.text}
                >
                  {item.text}
                </span>
              )}
            </li>
          ))}
        </div>
      </div>
    </section>
  );
}
