"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Asterisk, Info } from "lucide-react";
import type { Project } from "@/lib/projects";
import { panelFor } from "@/lib/accent";
import { hostOf } from "@/lib/url";
import { cn } from "@/lib/utils";
import AppBadge from "@/components/app/app-badge";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppImage from "@/components/app/app-image";
import ProjectDetailSheet from "@/components/project-detail-sheet";

function FeaturedItem({ project, index }: { project: Project; index: number }) {
    const reduce = useReducedMotion();
    const flip = index % 2 === 1;
    const img = project.images?.[0];

    return (
        <motion.article
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-hard-lg"
        >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                <div
                    className={cn(
                        "relative overflow-hidden border-b-2 border-foreground p-5 sm:p-8 lg:border-b-0 lg:p-10",
                        panelFor(index),
                        flip ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
                    )}
                >
                    <span
                        aria-hidden
                        className="text-outline pointer-events-none absolute -bottom-6 right-3 select-none font-display text-[8rem] font-extrabold leading-none opacity-40 sm:text-[10rem]"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                        className="relative block"
                        whileHover={reduce ? undefined : { y: -6, rotate: flip ? 1 : -1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <AppBrowserFrame host={hostOf(project.liveUrl)} className="shadow-hard">
                            {img ? (
                                <AppImage
                                    src={img}
                                    alt={`${project.name} website preview`}
                                    className="aspect-16/10 w-full"
                                    fallback={<div className="aspect-16/10 w-full bg-muted" />}
                                />
                            ) : (
                                <div className="aspect-16/10 w-full bg-muted" />
                            )}
                        </AppBrowserFrame>
                    </motion.a>
                </div>

                <div className={cn("space-y-5 p-6 sm:p-8 lg:p-10", flip && "lg:order-1")}>
                    <div className="flex flex-wrap items-center gap-2">
                        <AppBadge variant="brand">{project.category}</AppBadge>
                        {project.region ? <AppBadge variant="sky">{project.region}</AppBadge> : null}
                    </div>

                    <h3 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
                        {project.name}
                    </h3>

                    <p className="text-base leading-relaxed text-foreground/80">{project.description}</p>

                    {project.highlights?.length ? (
                        <ul className="space-y-2.5">
                            {project.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2.5 text-[15px] leading-snug">
                                    <Asterisk className="mt-0.5 h-4 w-4 flex-none text-tomato" strokeWidth={3} />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    ) : null}

                    <div className="flex flex-wrap gap-2">
                        {(project.stack || []).map((s) => (
                            <AppBadge key={s}>{s}</AppBadge>
                        ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <AppButton href={project.liveUrl} iconEnd={ArrowUpRight}>
                            Visit {hostOf(project.liveUrl)}
                        </AppButton>
                        <ProjectDetailSheet
                            project={project}
                            trigger={
                                <AppButton variant="paper" icon={Info}>
                                    Details
                                </AppButton>
                            }
                        />
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default function FeaturedWork({ projects }: { projects: Project[] }) {
    return (
        <div className="space-y-10 sm:space-y-14">
            {projects.map((p, i) => (
                <FeaturedItem key={p.id} project={p} index={i} />
            ))}
        </div>
    );
}
