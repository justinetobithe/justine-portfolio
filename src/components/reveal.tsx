"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function Reveal({
    children,
    delay = 0,
    y = 14
}: {
    children: ReactNode;
    delay?: number;
    y?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
}
