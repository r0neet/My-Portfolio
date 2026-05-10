"use client";
import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const Cover = ({
    children,
    className,
}: {
    children?: React.ReactNode;
    className?: string;
}) => {
    const [hovered, setHovered] = useState(false);
    const id = useId();

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group/cover relative inline-block rounded-sm px-2 py-1 transition-all duration-100 ease-in-out"
        >
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
                    >
                        <Sparkles id={id} />
                    </motion.div>
                )}
            </AnimatePresence>
            <span
                className={cn(
                    "relative z-10 inline-block text-white transition-all duration-300 group-hover/cover:scale-110",
                    className
                )}
            >
                {children}
            </span>
        </div>
    );
};

// Reduced from 12 to 6 sparkles, using CSS animations instead of framer-motion
const Sparkles = ({ id }: { id: string }) => {
    return (
        <div className="absolute inset-0 h-full w-full">
            {[...Array(6)].map((_, i) => (
                <span
                    key={`${id}-${i}`}
                    className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-sparkle"
                    style={{
                        left: `${15 + (i * 14) % 70}%`,
                        top: `${10 + (i * 23) % 80}%`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: `${1 + i * 0.2}s`,
                    }}
                />
            ))}
            <div
                className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 blur-xl animate-pulse"
                style={{ animationDuration: "2s" }}
            />
        </div>
    );
};
