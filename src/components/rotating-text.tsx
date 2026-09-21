"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingText({ words }: { words: string[] }) {
    const reduce = useReducedMotion();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reduce) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
        return () => clearInterval(id);
    }, [reduce, words.length]);

    return (
        <span className="relative inline-block overflow-hidden whitespace-nowrap align-bottom">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={words[index]}
                    initial={reduce ? false : { y: "100%", rotate: 4 }}
                    animate={{ y: 0, rotate: -1 }}
                    exit={{ y: "-100%", rotate: -4 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block bg-sun px-2 sm:px-3"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
