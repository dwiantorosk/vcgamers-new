"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Banner() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })]
  );

  const banners = [
    {
      img: "https://cdn.vcgamers.com/homepage/temp/4ef000d7-a39b-4592-91f0-dfcace6569cf.jpg"
    },
    {
      img: "https://cdn.vcgamers.com/homepage/temp/71daae2e-e3f6-4e0f-8050-a1e30c15a6a6.jpg"
    },
  ];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {banners.map((banner, index) => (
          <div className="flex-[0_0_100%]" key={index}>
            <img
              src={banner.img}
              alt={`Banner ${index}`}
              className="w-full h-[130px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
