"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";
import { hostOf } from "@/lib/url";
import { cn } from "@/lib/utils";
import AppBadge from "@/components/app/app-badge";
import AppImage from "@/components/app/app-image";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppLink from "@/components/app/app-link";

function FeaturedItem({ project, index }: { project: Project; index: number }) {
    const reduce = useReducedMotion();
    const flip = index % 2 === 1;
    const img = project.images?.[0];
    const mirror = project.vercelUrls?.[0];

    return (
        <motion.article
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <AppCard className="p-4 sm:p-6 lg:p-8">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className={cn("relative", flip && "lg:order-2")}>
                        <div
                            aria-hidden
                            className="absolute -inset-4 rounded-4xl bg-linear-to-br from-violet-500/25 via-cyan-400/10 to-emerald-400/20 blur-2xl"
                        />
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Open ${project.name}`}
                            className="relative block"
                            whileHover={reduce ? undefined : { y: -6, rotate: flip ? 0.6 : -0.6 }}
                            transition={{ type: "spring", stiffness: 260, damping: 22 }}
                        >
                            <AppBrowserFrame host={hostOf(project.liveUrl)}>
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

                    <div className={cn("space-y-5", flip && "lg:order-1")}>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="font-display text-sm font-semibold tabular-nums text-violet-300">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="h-px w-8 bg-white/20" />
                            <span className="text-sm font-medium text-muted-foreground">{project.category}</span>
                            {project.region ? (
                                <AppBadge variant="glass" icon={MapPin} className="[&>svg]:text-cyan-300">
                                    {project.region}
                                </AppBadge>
                            ) : null}
                        </div>

                        <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>

                        <p className="text-base leading-relaxed text-muted-foreground">{project.description}</p>

                        {project.highlights?.length ? (
                            <ul className="space-y-2.5">
                                {project.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-3 text-[15px] leading-snug">
                                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
                                            <Check className="h-3 w-3" strokeWidth={3} />
                                        </span>
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        ) : null}

                        <div className="flex flex-wrap gap-2">
                            {(project.stack || []).map((s) => (
                                <AppBadge key={s} variant="brand">
                                    {s}
                                </AppBadge>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-1">
                            <AppButton href={project.liveUrl} iconEnd={ArrowUpRight}>
                                Visit {hostOf(project.liveUrl)}
                            </AppButton>
                            {mirror ? <AppLink href={mirror}>{hostOf(mirror)}</AppLink> : null}
                        </div>
                    </div>
                </div>
            </AppCard>
        </motion.article>
    );
}

export default function FeaturedWork({ projects }: { projects: Project[] }) {
    return (
        <div className="space-y-8">
            {projects.map((p, i) => (
                <FeaturedItem key={p.id} project={p} index={i} />
            ))}
        </div>
    );
}
