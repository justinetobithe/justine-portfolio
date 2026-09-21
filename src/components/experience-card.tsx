"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { durationLabel, periodLabel } from "@/lib/career";
import type { Job } from "@/lib/career";
import AppBadge from "@/components/app/app-badge";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";

export default function ExperienceCard({ job, defaultOpen = false }: { job: Job; defaultOpen?: boolean }) {
    const [open, setOpen] = useState(defaultOpen);
    const current = Boolean(job.current);

    return (
        <motion.div
            className="relative pl-9 sm:pl-12"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <span
                className={`absolute left-0 top-7 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-foreground ${
                    current ? "blink bg-tomato" : "bg-sun"
                }`}
            />

            <AppCard interactive={false}>
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <AppBadge variant={current ? "success" : "paper"}>{periodLabel(job)}</AppBadge>
                            <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                {durationLabel(job)}
                            </span>
                        </div>
                        <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight">{job.role}</h3>
                        <div className="text-[15px] font-medium">{job.company}</div>
                        <div className="text-sm text-muted-foreground">{job.place}</div>
                    </div>

                    <AppButton
                        variant="paper"
                        size="sm"
                        className="self-start rounded-lg"
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
                            <ul className="list-disc space-y-1.5 border-t-2 border-foreground bg-secondary/60 px-5 py-4 pl-10 text-[15px] leading-relaxed">
                                {job.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </AppCard>
        </motion.div>
    );
}
