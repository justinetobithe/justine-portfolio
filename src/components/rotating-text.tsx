"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingText({ words }: { words: string[] }) {
    const reduce = useReducedMotion();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reduce) return;
        const id = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
        return () => clearInterval(id);
    }, [reduce, words.length]);

    return (
        <span className="relative inline-block align-bottom">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={words[index]}
                    initial={reduce ? false : { y: "70%", opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-70%", opacity: 0, filter: "blur(6px)" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-gradient inline-block"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
