"use client";

import { ArrowUpRight, Info } from "lucide-react";
import type { Project } from "@/lib/projects";
import { panelFor } from "@/lib/accent";
import { hostOf } from "@/lib/url";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppImage from "@/components/app/app-image";
import ProjectDetailSheet from "@/components/project-detail-sheet";
import ProjectFacts from "@/components/project-facts";
import Reveal from "@/components/reveal";

export default function CommunityBuilds({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                    <AppCard className={`flex h-full flex-col ${i % 2 === 0 ? "lg:-rotate-[0.5deg]" : "lg:rotate-[0.5deg]"}`}>
                        <div className={`${panelFor(p.id)} border-b-2 border-foreground p-5`}>
                            <AppBrowserFrame host={hostOf(p.liveUrl)} className="shadow-hard">
                                <AppImage
                                    src={p.images[0]}
                                    alt={`${p.name} preview`}
                                    className="aspect-16/10 w-full"
                                    imgClassName="group-hover/card:scale-[1.03]"
                                    fallback={<div className="aspect-16/10 w-full bg-muted" />}
                                />
                            </AppBrowserFrame>
                        </div>

                        <div className="flex flex-1 flex-col gap-4 p-6">
                            <div className="space-y-1">
                                <h3 className="font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">{p.name}</h3>
                                {p.tagline ? <p className="font-hand text-2xl leading-tight text-tomato">{p.tagline}</p> : null}
                            </div>
                            <p className="text-[15px] leading-relaxed text-foreground/80">{p.description}</p>
                            {p.facts?.length ? <ProjectFacts facts={p.facts} /> : null}
                            <div className="mt-auto flex flex-wrap gap-3 pt-1">
                                <AppButton href={p.liveUrl} size="default" iconEnd={ArrowUpRight} className="rounded-lg">
                                    Open the site
                                </AppButton>
                                <ProjectDetailSheet
                                    project={p}
                                    trigger={
                                        <AppButton variant="paper" size="default" icon={Info} className="rounded-lg">
                                            Details
                                        </AppButton>
                                    }
                                />
                            </div>
                        </div>
                    </AppCard>
                </Reveal>
            ))}
        </div>
    );
}
