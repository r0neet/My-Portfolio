"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    // Use only 10 paths instead of 50+ to reduce SVG complexity
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
      "M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595",
      "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
    ];

    return (
      <div
        ref={ref}
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center pointer-events-none",
          className
        )}
      >
        {isVisible && (
          <svg
            className="z-0 h-full w-full pointer-events-none absolute"
            width="100%"
            height="100%"
            viewBox="0 0 696 316"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-205 -389C-205 -389 -137 16 327 143C791 270 859 675 859 675M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635M-135 -469C-135 -469 -67 -64 397 63C861 190 929 595 929 595M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515"
              stroke="url(#paint0_radial_242_278)"
              strokeOpacity="0.05"
              strokeWidth="0.5"
            />

            {/* Use CSS animations instead of framer-motion for each path */}
            {paths.map((path, index) => (
              <path
                key={`path-${index}`}
                d={path}
                stroke={`url(#linearGradient-${index})`}
                strokeOpacity="0.4"
                strokeWidth="0.5"
              />
            ))}
            <defs>
              {paths.map((_, index) => (
                <linearGradient
                  id={`linearGradient-${index}`}
                  key={`gradient-${index}`}
                >
                  <stop stopColor="#18CCFC" stopOpacity="0" />
                  <stop stopColor="#18CCFC" />
                  <stop offset="32.5%" stopColor="#6344F5" />
                  <stop offset="100%" stopColor="#AE48FF" stopOpacity="0" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    values="-1 -1; 1 1; -1 -1"
                    dur={`${12 + index * 2}s`}
                    repeatCount="indefinite"
                  />
                </linearGradient>
              ))}

              <radialGradient
                id="paint0_radial_242_278"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
              >
                <stop offset="0.0666667" stopColor="var(--neutral-300)" />
                <stop offset="0.243243" stopColor="var(--neutral-300)" />
                <stop offset="0.43594" stopColor="white" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        )}
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";
