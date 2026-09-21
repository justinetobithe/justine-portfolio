"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AbstractBackground() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const up = useTransform(scrollY, [0, 3000], [0, -360]);
    const down = useTransform(scrollY, [0, 3000], [0, 260]);
    const turn = useTransform(scrollY, [0, 3000], [0, 240]);

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            <div className="dot-grid absolute inset-0" />

            <motion.div
                style={reduce ? undefined : { y: up }}
                className="blob-morph absolute -right-20 top-24 h-56 w-56 border-2 border-foreground bg-sun sm:-right-10 sm:h-72 sm:w-72"
            />

            <motion.div
                style={reduce ? undefined : { y: down }}
                className="absolute -left-14 top-[42%] h-36 w-36 rounded-full border-2 border-foreground bg-tomato sm:h-48 sm:w-48"
            />

            <motion.div
                style={reduce ? undefined : { y: up, rotate: turn }}
                className="stripes absolute bottom-20 right-[5%] hidden h-28 w-28 border-2 border-foreground bg-card sm:block"
            />

            <motion.svg
                style={reduce ? undefined : { y: down }}
                className="absolute right-[8%] top-[58%] hidden h-24 w-24 text-cobalt sm:block"
                viewBox="0 0 100 100"
                fill="none"
            >
                <g className="spin-slow" style={{ transformOrigin: "50px 50px" }} stroke="currentColor" strokeWidth="7" strokeLinecap="round">
                    <path d="M50 8 V92" />
                    <path d="M8 50 H92" />
                    <path d="M20 20 L80 80" />
                    <path d="M80 20 L20 80" />
                </g>
            </motion.svg>

            <motion.svg
                style={reduce ? undefined : { y: up }}
                className="absolute bottom-[12%] left-[6%] hidden h-14 w-44 text-cobalt md:block"
                viewBox="0 0 176 56"
                fill="none"
            >
                <motion.path
                    d="M4 28 C 22 2, 40 54, 58 28 S 94 2, 112 28 S 150 54, 172 26"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>

            <motion.div
                style={reduce ? undefined : { y: down }}
                className="spin-slower absolute left-[7%] top-[14%] hidden h-24 w-24 rounded-full border-2 border-dashed border-foreground/60 md:block"
            />

            <div className="grain absolute inset-0" />
        </div>
    );
}
