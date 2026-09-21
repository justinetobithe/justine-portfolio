"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export default function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.6 });
    const reduce = useReducedMotion();
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: reduce ? 0 : 1.4,
            ease: "easeOut",
            onUpdate: (v) => setValue(Math.round(v))
        });
        return () => controls.stop();
    }, [inView, reduce, to]);

    return (
        <span ref={ref}>
            {value}
            {suffix}
        </span>
    );
}
