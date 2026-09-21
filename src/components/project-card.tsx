"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Info, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";
import { panelFor } from "@/lib/accent";
import { hostOf } from "@/lib/url";
import AppBadge from "@/components/app/app-badge";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppImage from "@/components/app/app-image";
import ProjectDetailSheet from "@/components/project-detail-sheet";

function Placeholder({ name }: { name: string }) {
    return (
        <div className="relative grid aspect-16/10 w-full place-items-center overflow-hidden bg-secondary">
            <div className="stripes absolute inset-0 opacity-10" />
            <div className="spin-slow absolute h-28 w-28 rounded-full border-2 border-dashed border-foreground/50" />
            <span className="relative font-display text-4xl font-extrabold">{name.slice(0, 2).toUpperCase()}</span>
        </div>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const reduce = useReducedMotion();
    const img = project.images?.[0];

    return (
        <motion.div
            className="h-full"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <AppCard className="flex h-full flex-col">
                <div className={`${panelFor(project.id)} border-b-2 border-foreground p-4`}>
                    <AppBrowserFrame host={hostOf(project.liveUrl) || "in development"}>
                        {img ? (
                            <AppImage
                                src={img}
                                alt={`${project.name} preview`}
                                className="aspect-16/10 w-full"
                                imgClassName="group-hover/card:scale-[1.04]"
                                fallback={<Placeholder name={project.name} />}
                            />
                        ) : (
                            <Placeholder name={project.name} />
                        )}
                    </AppBrowserFrame>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight">{project.name}</h3>
                            {project.featured ? <AppBadge variant="brand">Featured</AppBadge> : null}
                        </div>
                        {project.region ? (
                            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-muted-foreground">
                                <MapPin className="h-3.5 w-3.5" />
                                {project.region}
                            </div>
                        ) : null}
                        <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">{project.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((t) => (
                            <AppBadge key={t}>{t}</AppBadge>
                        ))}
                    </div>

                    <div className="mt-auto flex gap-2 pt-1">
                        {project.liveUrl ? (
                            <AppButton
                                href={project.liveUrl}
                                icon={ExternalLink}
                                size="default"
                                className="flex-1 rounded-lg"
                            >
                                Live site
                            </AppButton>
                        ) : null}
                        <ProjectDetailSheet
                            project={project}
                            trigger={
                                <AppButton variant="paper" icon={Info} size="default" className="flex-1 rounded-lg">
                                    Details
                                </AppButton>
                            }
                        />
                    </div>
                </div>
            </AppCard>
        </motion.div>
    );
}
