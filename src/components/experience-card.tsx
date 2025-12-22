"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            <Card className="rounded-2xl bg-background/30 backdrop-blur">
                <CardHeader className="flex flex-row items-start justify-between gap-4">
                    <div className="space-y-1">
                        <div className="font-semibold">{title}</div>
                        <div className="text-sm text-muted-foreground">{meta}</div>
                    </div>

                    <Button
                        variant="secondary"
                        className="rounded-xl"
                        onClick={() => setOpen((v) => !v)}
                    >
                        <span className="mr-2">{open ? "Hide" : "Details"}</span>
                        <motion.span
                            animate={{ rotate: open ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex"
                        >
                            <ChevronDown className="h-4 w-4" />
                        </motion.span>
                    </Button>
                </CardHeader>

                <AnimatePresence initial={false}>
                    {open ? (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <CardContent className="pt-0">
                                <motion.ul
                                    initial="hidden"
                                    animate="show"
                                    variants={{
                                        hidden: { opacity: 0 },
                                        show: { opacity: 1, transition: { staggerChildren: 0.06 } }
                                    }}
                                    className="list-disc space-y-1 pl-5 text-sm text-muted-foreground"
                                >
                                    {bullets.map((b) => (
                                        <motion.li
                                            key={b}
                                            variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}
                                        >
                                            {b}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </CardContent>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            </Card>
        </motion.div>
    );
}
