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

const Sparkles = ({ id }: { id: string }) => {
    return (
        <div className="absolute inset-0 h-full w-full">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`${id}-${i}`}
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: 0,
                        y: 0,
                    }}
                    animate={{
                        opacity: [0, 1, 0.5, 0],
                        scale: [0, 1, 0.5, 0],
                        x: (Math.random() - 0.5) * 100,
                        y: (Math.random() - 0.5) * 100,
                    }}
                    transition={{
                        duration: Math.random() * 1 + 0.5,
                        repeat: Infinity,
                        delay: Math.random() * 1,
                    }}
                    className="absolute h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-blue-500/20 via-blue-400/20 to-blue-600/20 blur-xl"
            />
        </div>
    );
};
