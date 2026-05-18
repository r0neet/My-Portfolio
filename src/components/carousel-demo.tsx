"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  const slideData = [
    {
      title: "SEE ANDAMANS",
      button: "Explore Component",
      src: "/anda.webp",
      link: "https://see-andamans.vercel.app/",
    },
    {
      title: "CORE 9",
      button: "Explore Component",
      src: "/core.webp",
      link: "https://project-core-9.vercel.app/",
    },
    {
      title: "INDIAN NAVY",
      button: "Explore Component",
      src: "/navy.webp",
      onClick: () => alert("Sorry, Content is Classified as per my Contract"),
    },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-20 py-6 md:py-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {slideData.map((slide, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-900 border border-white/10">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg font-[family-name:var(--font-display)]">
                    {slide.title}
                  </h3>
                  <button 
                    onClick={() => {
                      if (slide.onClick) slide.onClick();
                      else if (slide.link) window.open(slide.link, "_blank");
                    }}
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded-full text-sm font-semibold w-max hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  >
                    {slide.button}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex border-white/20 bg-black/50 hover:bg-white hover:text-black transition-colors" />
        <CarouselNext className="hidden md:flex border-white/20 bg-black/50 hover:bg-white hover:text-black transition-colors" />
      </Carousel>
    </div>
  );
}
