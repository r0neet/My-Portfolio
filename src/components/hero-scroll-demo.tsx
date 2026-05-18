"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

// All 12 images that will rotate through the 8 grid slots
const ALL_IMAGES = [
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443288/img1_lrgxxo.png",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443290/img2_hzx4mx.png",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443296/img3_b9otf3.png",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443299/img4_fpovju.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443299/img5_cpeq2e.png",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443287/img6_pzpvhi.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443297/img7_bspqs6.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443295/img8_o2swfm.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443299/img9_psehkh.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443299/img10_kd8puj.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443298/img11_clxrar.jpg",
  "https://res.cloudinary.com/dsrquoqqm/image/upload/v1778443294/img12_bffy4f.jpg",
];

export default function HeroScrollDemo() {
  // Initialize 8 grid slots with the first 8 images
  const [gridImages, setGridImages] = useState<string[]>(
    ALL_IMAGES.slice(0, 8)
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Only run the rotation interval when the section is visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
    if (!isVisible) return;
    const interval = setInterval(rotateRandomSlot, 3500); // Slower rotation: 3.5s instead of 2s
    return () => clearInterval(interval);
  }, [rotateRandomSlot, isVisible]);

  return (
    <div ref={sectionRef} className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
              FREESTYLE FRAMES <br />
              <span className="text-3xl md:text-[6rem] font-bold mt-1 leading-none">
                THROUGH MY LENS
              </span>
            </h1>
          </>
        }
      >
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-2 md:gap-3 h-full w-full p-1 md:p-2">
          {gridImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-full rounded-lg md:rounded-xl overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    fill
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 15vw"
                    quality={60}
                    loading="lazy"
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
