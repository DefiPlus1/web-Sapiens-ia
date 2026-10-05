"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TaglineRevealProps {
    text: string;
    subtext?: string;
    className?: string;
}

export default function TaglineReveal({
    text,
    subtext,
    className = "",
}: TaglineRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`max-w-4xl mx-auto text-center px-4 ${className}`}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] [text-wrap:balance]">
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0.25, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.25, y: 8 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.045,
                            ease: [0.32, 0.72, 0, 1],
                        }}
                        className="inline-block mr-[0.28em] text-white"
                    >
                        {word}
                    </motion.span>
                ))}
            </h2>
            {subtext && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{
                        duration: 0.7,
                        delay: words.length * 0.045 + 0.2,
                        ease: [0.32, 0.72, 0, 1],
                    }}
                    className="mt-6 text-base sm:text-xl text-emerald-400 font-medium leading-relaxed max-w-2xl mx-auto [text-wrap:pretty]"
                >
                    {subtext}
                </motion.p>
            )}
        </div>
    );
}
