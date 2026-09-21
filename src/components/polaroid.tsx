"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Polaroid({
    caption,
    tilt = -3,
    className
}: {
    caption: string;
    tilt?: number;
    className?: string;
}) {
    const reduce = useReducedMotion();

    return (
        <motion.figure
            initial={reduce ? false : { opacity: 0, y: 40, rotate: tilt + 8 }}
            animate={{ opacity: 1, y: 0, rotate: tilt }}
            whileHover={reduce ? undefined : { rotate: 0, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.1 }}
            className={cn(
                "relative w-[min(72vw,320px)] border-2 border-foreground bg-card p-3 pb-14 shadow-hard-lg",
                className
            )}
        >
            <span className="absolute -top-4 left-1/2 h-7 w-24 -translate-x-1/2 rotate-3 border border-foreground/30 bg-sun/80" />
            <div className="relative aspect-4/5 overflow-hidden border-2 border-foreground bg-muted">
                <Image
                    src="/profile.jpg"
                    alt="Justine Tobithe Doloiras"
                    fill
                    priority
                    sizes="(max-width: 1024px) 72vw, 320px"
                    className="object-cover"
                />
            </div>
            <figcaption className="absolute inset-x-0 bottom-3.5 text-center font-mono text-xs uppercase tracking-wider">
                {caption}
            </figcaption>
        </motion.figure>
    );
}
