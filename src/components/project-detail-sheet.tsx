"use client";

import { ReactNode } from "react";
import { ArrowUpRight, Asterisk, Github, MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";
import { panelFor } from "@/lib/accent";
import { hostOf } from "@/lib/url";
import AppBadge from "@/components/app/app-badge";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppImage from "@/components/app/app-image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const FRONT_END = ["Next.js", "React", "Vite"];

function splitStack(stack: string[]) {
    const front = stack.filter((s) => FRONT_END.includes(s));
    const back = stack.filter((s) => !FRONT_END.includes(s));
    return { front, back };
}

function Row({ label, children }: { label: string; children: ReactNode }) {
    return (
        <div className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-foreground/15 py-2.5 text-sm last:border-b-0">
            <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
            <dd className="font-medium">{children}</dd>
        </div>
    );
}

export default function ProjectDetailSheet({ project, trigger }: { project: Project; trigger: ReactNode }) {
    const img = project.images?.[0];
    const stack = project.stack?.length ? project.stack : project.tags.slice(0, 4);
    const { front, back } = splitStack(project.stack || []);
    const scope = project.scope?.length ? project.scope : project.tags.slice(0, 6);
    const mirror = project.vercelUrls?.[0];

    return (
        <Sheet>
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetContent className="w-full gap-0 overflow-y-auto border-l-2 border-foreground bg-background p-0 sm:max-w-xl">
                <div className={`${panelFor(project.id)} border-b-2 border-foreground p-5 pt-12 sm:p-8 sm:pt-14`}>
                    <AppBrowserFrame host={hostOf(project.liveUrl) || "in development"} className="shadow-hard">
                        {img ? (
                            <AppImage
                                src={img}
                                alt={`${project.name} preview`}
                                className="aspect-16/10 w-full"
                                fallback={<div className="aspect-16/10 w-full bg-muted" />}
                            />
                        ) : (
                            <div className="aspect-16/10 w-full bg-muted" />
                        )}
                    </AppBrowserFrame>
                </div>

                <div className="space-y-7 p-5 sm:p-8">
                    <SheetHeader className="space-y-3 p-0">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.category ? <AppBadge variant="brand">{project.category}</AppBadge> : null}
                            {project.region ? (
                                <AppBadge icon={MapPin} variant="sky">
                                    {project.region}
                                </AppBadge>
                            ) : null}
                        </div>
                        <SheetTitle className="font-display text-4xl font-extrabold leading-none tracking-tight">
                            {project.name}
                        </SheetTitle>
                        <SheetDescription className="text-base leading-relaxed text-foreground/80">
                            {project.description}
                        </SheetDescription>
                    </SheetHeader>

                    <section className="space-y-3">
                        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em]">What I built</h3>
                        <div className="flex flex-wrap gap-2">
                            {scope.map((s) => (
                                <AppBadge key={s}>{s}</AppBadge>
                            ))}
                        </div>
                    </section>

                    {project.highlights?.length ? (
                        <section className="space-y-3">
                            <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em]">Highlights</h3>
                            <ul className="space-y-2.5">
                                {project.highlights.map((h) => (
                                    <li key={h} className="flex items-start gap-2.5 text-[15px] leading-snug">
                                        <Asterisk className="mt-0.5 h-4 w-4 flex-none text-tomato" strokeWidth={3} />
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ) : null}

                    <section className="space-y-2">
                        <h3 className="font-mono text-xs font-medium uppercase tracking-[0.18em]">Project info</h3>
                        <dl className="rounded-xl border-2 border-foreground bg-card px-4">
                            {project.region ? <Row label="Market">{project.region}</Row> : null}
                            {front.length ? <Row label="Front end">{front.join(", ")}</Row> : null}
                            {back.length ? <Row label="Back end">{back.join(", ")}</Row> : null}
                            {!project.stack?.length ? <Row label="Built with">{stack.join(", ")}</Row> : null}
                            {project.liveUrl ? <Row label="Website">{hostOf(project.liveUrl)}</Row> : null}
                        </dl>
                    </section>

                    <div className="flex flex-wrap gap-3">
                        {project.liveUrl ? (
                            <AppButton href={project.liveUrl} iconEnd={ArrowUpRight}>
                                Visit {hostOf(project.liveUrl)}
                            </AppButton>
                        ) : null}
                        {mirror ? (
                            <AppButton href={mirror} variant="paper">
                                {hostOf(mirror)}
                            </AppButton>
                        ) : null}
                        {project.repoUrl ? (
                            <AppButton href={project.repoUrl} variant="paper" icon={Github}>
                                Source code
                            </AppButton>
                        ) : null}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
