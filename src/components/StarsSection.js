import React from 'react';

// --- Data for the image rows ---
// Updated placeholders for the new 200px height
const row1Images = [
  'https://picsum.photos/id/40/400/200',
  'https://picsum.photos/id/41/400/200',
  'https://picsum.photos/id/42/400/200',
  'https://picsum.photos/id/43/400/200',
  'https://picsum.photos/id/44/400/200',
  'https://picsum.photos/id/45/400/200',
  'https://picsum.photos/id/46/400/200',
  'https://picsum.photos/id/47/400/200',
  'https://picsum.photos/id/48/400/200',
];
const row2Images = [
  'https://picsum.photos/id/50/400/200',
  'https://picsum.photos/id/51/400/200',
  'https://picsum.photos/id/52/400/200',
  'https://picsum.photos/id/53/400/200',
  'https://picsum.photos/id/54/400/200',
  'https://picsum.photos/id/55/400/200',
  'https://picsum.photos/id/56/400/200',
  'https://picsum.photos/id/55/400/200',
  'https://picsum.photos/id/56/400/200',
];
const row3Images = [
  'https://picsum.photos/id/60/400/200',
  'https://picsum.photos/id/61/400/200',
  'https://picsum.photos/id/62/400/200',
  'https://picsum.photos/id/63/400/200',
  'https://picsum.photos/id/64/400/200',
  'https://picsum.photos/id/65/400/200',
  'https://picsum.photos/id/66/400/200',
  'https://picsum.photos/id/67/400/200',
  'https://picsum.photos/id/68/400/200',
];

// --- Reusable MarqueeRow Component (Modified for height) ---
const MarqueeRow = ({ images, direction = 'left' }) => {
  const duplicatedImages = [...images, ...images];
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="flex w-full overflow-hidden">
      <div className={`flex shrink-0 ${animationClass}`}>
        {duplicatedImages.map((src, index) => (
          // Container for each image, now with a 200px height
          <div key={index} className="mx-2 h-[170px] w-auto shrink-0">
            <img 
              src={src} 
              alt="" 
              className="h-full w-full rounded-lg object-cover shadow-md" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Main Component (Modified for new dimensions and background) ---
const StarsSection = () => {
  return (
    // Main container is now 650px high with a golden-yellow gradient
    <section className="flex h-[550px] w-full items-center overflow-hidden bg-gradient-to-br from-yellow-400 to-amber-500">
      {/* This div now takes the full width */}
      <div className="flex w-full flex-col gap-4">
        <MarqueeRow images={row1Images} direction="right" />
        <MarqueeRow images={row2Images} direction="left" />
        <MarqueeRow images={row3Images} direction="right" />
      </div>
    </section>
  );
};

export default StarsSection;