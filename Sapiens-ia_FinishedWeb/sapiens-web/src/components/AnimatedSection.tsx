"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const getInitial = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 40 };
            case "left": return { opacity: 0, x: -40 };
            case "right": return { opacity: 0, x: 40 };
            case "none": return { opacity: 0 };
        }
    };

    const getAnimate = () => {
        switch (direction) {
            case "up": return { opacity: 1, y: 0 };
            case "left": return { opacity: 1, x: 0 };
            case "right": return { opacity: 1, x: 0 };
            case "none": return { opacity: 1 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitial()}
            animate={isInView ? getAnimate() : getInitial()}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
