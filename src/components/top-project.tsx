"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Asterisk, Info, Trophy } from "lucide-react";
import type { Project } from "@/lib/projects";
import { hostOf } from "@/lib/url";
import AppBadge from "@/components/app/app-badge";
import AppBrowserFrame from "@/components/app/app-browser-frame";
import AppButton from "@/components/app/app-button";
import AppImage from "@/components/app/app-image";
import ProjectDetailSheet from "@/components/project-detail-sheet";

const FACT_TONES = ["bg-sun", "bg-sky", "bg-blush", "bg-sage"];

function HandNote() {
    return (
        <div aria-hidden className="pointer-events-none absolute right-5 top-3 hidden -rotate-2 items-end gap-1 text-sun sm:flex lg:right-10">
            <svg viewBox="0 0 60 44" fill="none" className="h-9 w-12">
                <path
                    d="M56 5 C 40 2, 18 8, 8 34 M8 34 L 4 20 M8 34 L 20 27"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="font-hand text-2xl font-bold leading-none">start with this one</span>
        </div>
    );
}

export default function TopProject({ project }: { project: Project }) {
    const reduce = useReducedMotion();
    const img = project.images?.[0];

    return (
        <motion.article
            initial={reduce ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative rounded-3xl border-2 border-foreground bg-foreground text-background shadow-hard-lg"
        >
            <HandNote />

            <div className="grid grid-cols-1 gap-x-10 gap-y-8 p-5 pt-9 sm:p-8 sm:pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:grid-rows-[auto_1fr] lg:p-10 lg:pt-14">
                <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.name}`}
                    className="relative block lg:col-start-1 lg:row-start-1 lg:-rotate-1"
                    whileHover={reduce ? undefined : { y: -6, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                    <span aria-hidden className="tape absolute -top-3 left-1/2 z-10 h-6 w-28 -translate-x-1/2 -rotate-2" />
                    <AppBrowserFrame host={hostOf(project.liveUrl)} className="border-background text-foreground">
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

                <div className="space-y-5 lg:col-start-2 lg:row-span-2 lg:row-start-1">
                    <div className="flex flex-wrap items-center gap-2">
                        <AppBadge icon={Trophy} variant="brand">
                            Top project
                        </AppBadge>
                        {project.region ? <AppBadge variant="sky">{project.region}</AppBadge> : null}
                    </div>

                    <h3 className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl">{project.name}</h3>

                    {project.tagline ? <p className="font-hand text-3xl leading-tight text-sun">{project.tagline}</p> : null}

                    <p className="text-base leading-relaxed text-background/80">{project.description}</p>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        <AppButton href={project.liveUrl} variant="tomato" iconEnd={ArrowUpRight}>
                            <span className="sm:hidden">Visit site</span>
                            <span className="hidden sm:inline">Visit {hostOf(project.liveUrl)}</span>
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

                {project.highlights?.length ? (
                    <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:col-start-1 lg:row-start-2">
                        {project.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-[15px] leading-snug">
                                <Asterisk className="mt-0.5 h-4 w-4 flex-none text-tomato" strokeWidth={3} />
                                {h}
                            </li>
                        ))}
                    </ul>
                ) : null}
            </div>

            {project.facts?.length ? (
                <dl className="grid grid-cols-2 gap-0.5 border-y-2 border-background bg-background text-foreground lg:grid-cols-4">
                    {project.facts.map((f, i) => (
                        <div key={f.label} className={`${FACT_TONES[i % FACT_TONES.length]} space-y-1 p-5`}>
                            <dd className="font-display text-3xl font-extrabold leading-none tracking-tight sm:text-4xl">{f.value}</dd>
                            <dt className="font-mono text-[11px] font-medium uppercase tracking-wider">{f.label}</dt>
                        </div>
                    ))}
                </dl>
            ) : null}

            {project.steps?.length ? (
                <ol className="grid gap-x-8 gap-y-7 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-4 lg:p-10">
                    {project.steps.map((s, i) => (
                        <li key={s.title} className="space-y-1.5 border-t-2 border-background/40 pt-3">
                            <div className="font-hand text-3xl font-bold leading-none text-sun">{i + 1}.</div>
                            <h4 className="font-display text-xl font-extrabold tracking-tight">{s.title}</h4>
                            <p className="text-sm leading-relaxed text-background/70">{s.text}</p>
                        </li>
                    ))}
                </ol>
            ) : null}
        </motion.article>
    );
}
