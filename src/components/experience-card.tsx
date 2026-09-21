"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";

export default function ExperienceCard({
    title,
    meta,
    bullets
}: {
    title: string;
    meta: string;
    bullets: string[];
}) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            className="relative pl-8"
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <span className="absolute left-0 top-7 h-3 w-3 -translate-x-1/2 rounded-full bg-linear-to-br from-violet-400 to-cyan-300 ring-4 ring-background" />

            <AppCard className="rounded-2xl">
                <div className="flex items-start justify-between gap-4 p-5">
                    <div className="space-y-1">
                        <div className="font-display text-lg font-semibold tracking-tight">{title}</div>
                        <div className="text-sm text-muted-foreground">{meta}</div>
                    </div>

                    <AppButton
                        variant="glass"
                        size="sm"
                        className="rounded-xl"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        {open ? "Hide" : "Details"}
                        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="inline-flex">
                            <ChevronDown className="h-4 w-4" />
                        </motion.span>
                    </AppButton>
                </div>

                <AnimatePresence initial={false}>
                    {open ? (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="overflow-hidden"
                        >
                            <motion.ul
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { opacity: 0 },
                                    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                                }}
                                className="list-disc space-y-1.5 px-5 pb-5 pl-10 text-[15px] leading-relaxed text-muted-foreground"
                            >
                                {bullets.map((b) => (
                                    <motion.li key={b} variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
                                        {b}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </AppCard>
        </motion.div>
    );
}
