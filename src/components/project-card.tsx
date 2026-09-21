"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";
import { hostOf } from "@/lib/url";
import AppBadge from "@/components/app/app-badge";
import AppImage from "@/components/app/app-image";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";

function Placeholder({ name }: { name: string }) {
    return (
        <div className="relative grid aspect-16/10 w-full place-items-center overflow-hidden bg-linear-to-br from-violet-500/20 via-transparent to-cyan-400/20">
            <div className="spin-slow absolute h-32 w-32 rounded-full border border-dashed border-white/20" />
            <div className="absolute h-16 w-16 rounded-full border border-white/20" />
            <span className="relative font-display text-3xl font-semibold text-white/80">{name.slice(0, 2).toUpperCase()}</span>
        </div>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const reduce = useReducedMotion();
    const img = project.images?.[0];

    return (
        <motion.div
            className="h-full"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={reduce ? undefined : { y: -5 }}
        >
            <AppCard className="h-full">
                <div className="p-3">
                    <AppBrowserFrame host={hostOf(project.liveUrl) || "in development"}>
                        {img ? (
                            <AppImage
                                src={img}
                                alt={`${project.name} preview`}
                                className="aspect-16/10 w-full"
                                imgClassName="group-hover/spot:scale-[1.04]"
                                fallback={<Placeholder name={project.name} />}
                            />
                        ) : (
                            <Placeholder name={project.name} />
                        )}
                    </AppBrowserFrame>
                </div>

                <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-2">
                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-xl font-semibold tracking-tight">{project.name}</h3>
                            {project.featured ? (
                                <AppBadge variant="brand" className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                                    Featured
                                </AppBadge>
                            ) : null}
                            {project.region ? (
                                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                                    <MapPin className="h-3 w-3" />
                                    {project.region}
                                </span>
                            ) : null}
                        </div>

                        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((t) => (
                            <AppBadge key={t} className="px-2.5 py-0.5 font-medium">
                                {t}
                            </AppBadge>
                        ))}
                    </div>

                    {project.repoUrl || project.liveUrl ? (
                        <div className="mt-auto flex gap-2 pt-1">
                            {project.liveUrl ? (
                                <AppButton href={project.liveUrl} icon={ExternalLink} size="default" className="flex-1 rounded-xl">
                                    Live site
                                </AppButton>
                            ) : null}
                            {project.repoUrl ? (
                                <AppButton
                                    href={project.repoUrl}
                                    icon={Github}
                                    variant="glass"
                                    size="default"
                                    className="flex-1 rounded-xl"
                                >
                                    Code
                                </AppButton>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </AppCard>
        </motion.div>
    );
}
