"use client";
import React, { useEffect, useState, useCallback } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

// All 12 images that will rotate through the 8 grid slots
const ALL_IMAGES = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.JPEG",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
];

export default function HeroScrollDemo() {
  // Initialize 8 grid slots with the first 8 images
  const [gridImages, setGridImages] = useState<string[]>(
    ALL_IMAGES.slice(0, 8)
  );

  const rotateRandomSlot = useCallback(() => {
    setGridImages((prev) => {
      const newGrid = [...prev];
      // Pick a random slot to replace
      const slotIndex = Math.floor(Math.random() * 8);
      // Pick a random image that's NOT currently in the grid
      const availableImages = ALL_IMAGES.filter((img) => !newGrid.includes(img));
      if (availableImages.length === 0) return prev;
      const newImage =
        availableImages[Math.floor(Math.random() * availableImages.length)];
      newGrid[slotIndex] = newImage;
      return newGrid;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateRandomSlot, 2000);
    return () => clearInterval(interval);
  }, [rotateRandomSlot]);

  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              FREESTYLE FRAMES <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                THROUGH MY LENS
              </span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-3 h-full w-full p-1 md:p-2">
          {gridImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={src}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    fill
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </ContainerScroll>
    </div>
  );
}
