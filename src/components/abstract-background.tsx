"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function AbstractBackground() {
    const reduce = useReducedMotion();
    const { scrollY } = useScroll();
    const up = useTransform(scrollY, [0, 2400], [0, -320]);
    const down = useTransform(scrollY, [0, 2400], [0, 240]);
    const spin = useTransform(scrollY, [0, 2400], [0, 200]);

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
            <div className="blob blob-a -left-40 -top-40 h-[34rem] w-[34rem] bg-violet-600/35" />
            <div className="blob blob-b -right-32 top-1/4 h-[30rem] w-[30rem] bg-cyan-500/25" />
            <div className="blob blob-c bottom-[-10rem] left-1/3 h-[32rem] w-[32rem] bg-emerald-500/20" />

            <div className="grid-lines absolute inset-0" />

            <motion.svg
                style={reduce ? undefined : { y: up }}
                className="absolute left-[6%] top-[22%] h-28 w-28 text-violet-300/40"
                viewBox="0 0 100 100"
                fill="none"
            >
                <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                    animate={reduce ? undefined : { rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50px 50px" }}
                />
                <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" />
            </motion.svg>

            <motion.svg
                style={reduce ? undefined : { y: down, rotate: spin }}
                className="absolute right-[9%] top-[16%] h-24 w-24 text-cyan-300/40"
                viewBox="0 0 100 100"
                fill="none"
            >
                <polygon points="50,8 92,86 8,86" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <polygon points="50,34 71,72 29,72" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </motion.svg>

            <motion.svg
                style={reduce ? undefined : { y: up }}
                className="absolute bottom-[14%] right-[12%] h-20 w-20 text-emerald-300/40"
                viewBox="0 0 100 100"
                fill="none"
            >
                <motion.path
                    d="M50 8 V92 M8 50 H92"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={reduce ? undefined : { rotate: 90 }}
                    transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    style={{ transformOrigin: "50px 50px" }}
                />
            </motion.svg>

            <motion.svg
                style={reduce ? undefined : { y: down }}
                className="absolute bottom-[26%] left-[10%] h-16 w-40 text-fuchsia-300/35"
                viewBox="0 0 160 64"
                fill="none"
            >
                <motion.path
                    d="M4 32 C 24 4, 44 60, 64 32 S 104 4, 124 32 S 148 50, 156 32"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1, 1, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.svg>

            <motion.div
                style={reduce ? undefined : { y: up }}
                className="absolute left-[46%] top-[8%] h-3 w-3 rounded-full bg-violet-300/60"
            />
            <motion.div
                style={reduce ? undefined : { y: down }}
                className="absolute right-[30%] top-[55%] h-2 w-2 rounded-full bg-cyan-300/60"
            />
            <motion.div
                style={reduce ? undefined : { y: up }}
                className="absolute left-[24%] top-[72%] h-2.5 w-2.5 rounded-full bg-emerald-300/60"
            />
        </div>
    );
}
