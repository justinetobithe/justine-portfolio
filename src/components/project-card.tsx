"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Image as ImgIcon, Server, MonitorPlay } from "lucide-react";
import type { Project } from "@/lib/projects";
import { motion, useReducedMotion } from "framer-motion";

function isVercel(url?: string) {
    if (!url) return false;
    try {
        const u = new URL(url);
        return u.hostname.endsWith("vercel.app") || u.hostname.includes("vercel");
    } catch {
        return false;
    }
}

function isProdDomain(url?: string) {
    if (!url) return false;
    try {
        const u = new URL(url);
        return u.hostname === "xpg.live" || u.hostname.endsWith(".xpg.live");
    } catch {
        return false;
    }
}

function domainLabel(url?: string) {
    if (!url) return "";
    try {
        return new URL(url).hostname;
    } catch {
        return "";
    }
}

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const update = () => setIsMobile(window.innerWidth < breakpoint);
        update();
        window.addEventListener("resize", update, { passive: true });
        return () => window.removeEventListener("resize", update);
    }, [breakpoint]);

    return isMobile;
}

function useOnScreen<T extends Element>(rootMargin = "200px") {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useCallback((node: T | null) => {
        if (!node) return;

        const obs = new IntersectionObserver(
            (entries) => {
                const v = entries[0]?.isIntersecting ?? false;
                if (v) setIsIntersecting(true);
            },
            { root: null, rootMargin, threshold: 0.01 }
        );

        obs.observe(node);
        return () => obs.disconnect();
    }, [rootMargin]);

    return { ref, isIntersecting };
}

function IframePreview({ url, className }: { url: string; className?: string }) {
    const [blocked, setBlocked] = useState(false);

    useEffect(() => {
        setBlocked(false);
    }, [url]);

    if (blocked) return null;

    return (
        <iframe
            src={url}
            title={url}
            className={className}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setBlocked(true)}
        />
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const reduceMotion = useReducedMotion();
    const isMobile = useIsMobile();
    const { ref, isIntersecting } = useOnScreen<HTMLDivElement>("250px");

    const img = project.images?.[0] || "";
    const showPreviewHeader = Boolean(project.liveUrl);
    const vercel = isVercel(project.liveUrl);
    const prod = isProdDomain(project.liveUrl);
    const host = domainLabel(project.liveUrl);

    const [previewEnabled, setPreviewEnabled] = useState(false);
    const [iframeFailed, setIframeFailed] = useState(false);

    useEffect(() => {
        setPreviewEnabled(false);
        setIframeFailed(false);
    }, [project.liveUrl]);

    const canRenderIframe = Boolean(project.liveUrl) && !isMobile && isIntersecting && previewEnabled && !iframeFailed;

    const PreviewArea = useMemo(() => {
        if (!project.liveUrl) {
            return (
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                    <ImgIcon className="h-6 w-6" />
                </div>
            );
        }

        if (canRenderIframe) {
            return (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block h-full w-full">
                    <div className="relative h-full w-full overflow-hidden">
                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <IframePreview
                            url={project.liveUrl}
                            className="absolute left-0 top-0 h-[560px] w-[1200px] origin-top-left scale-[0.33] rounded-md border bg-background"
                        />
                        <div className="absolute inset-0" />
                    </div>
                </a>
            );
        }

        if (img) {
            return (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block h-full w-full">
                    <Image src={img} alt={project.name} fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </a>
            );
        }

        return (
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                <ImgIcon className="h-6 w-6" />
            </div>
        );
    }, [project.liveUrl, canRenderIframe, img, project.name]);

    return (
        <motion.div
            ref={ref}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
        >
            <Card className="group overflow-hidden rounded-2xl border bg-card/60 backdrop-blur transition-shadow hover:shadow-xl">
                {showPreviewHeader ? (
                    <div className="border-b bg-muted">
                        <div className="flex items-center justify-between gap-3 px-3 py-2">
                            <div className="flex min-w-0 items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                <span className="ml-2 truncate text-xs text-muted-foreground">{host}</span>
                            </div>

                            <div className="hidden items-center gap-2 sm:flex">
                                {prod ? (
                                    <Badge className="rounded-full" variant="secondary">
                                        <Server className="mr-1 h-3.5 w-3.5" />
                                        Production
                                    </Badge>
                                ) : null}

                                {vercel ? (
                                    <Badge className="rounded-full" variant="secondary">
                                        <Globe className="mr-1 h-3.5 w-3.5" />
                                        Vercel
                                    </Badge>
                                ) : null}
                            </div>
                        </div>

                        <div className="relative h-40 w-full bg-muted sm:h-44">
                            {PreviewArea}

                            {project.liveUrl ? (
                                <div className="absolute right-3 top-3 flex items-center gap-2">
                                    {!isMobile ? (
                                        <button
                                            type="button"
                                            onClick={() => setPreviewEnabled((v) => !v)}
                                            className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
                                        >
                                            <MonitorPlay className="h-3.5 w-3.5" />
                                            {previewEnabled ? "Use Image" : "Preview"}
                                        </button>
                                    ) : null}

                                    {!isMobile && previewEnabled ? (
                                        <button
                                            type="button"
                                            onClick={() => setIframeFailed(true)}
                                            className="rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
                                        >
                                            Stop
                                        </button>
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </div>
                ) : null}

                <CardHeader className="space-y-3">
                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <div className="text-lg font-semibold tracking-tight">{project.name}</div>

                            {project.prodUrls?.length ? (
                                <Badge className="rounded-full" variant="outline">
                                    {project.prodUrls.length} live links
                                </Badge>
                            ) : null}
                        </div>

                        <div className="line-clamp-3 text-sm text-muted-foreground">{project.description}</div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 8).map((t) => (
                            <Badge key={t} variant="secondary" className="rounded-full">
                                {t}
                            </Badge>
                        ))}
                    </div>

                    {project.prodUrls?.length ? (
                        <div className="flex flex-wrap gap-2">
                            {project.prodUrls.slice(0, 3).map((u) => (
                                <a
                                    key={u}
                                    href={u}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-xs text-muted-foreground underline-offset-4 hover:underline"
                                >
                                    {domainLabel(u)}
                                </a>
                            ))}
                        </div>
                    ) : null}
                </CardHeader>

                <CardContent className="flex gap-2">
                    <Button asChild size="sm" className="flex-1 rounded-xl">
                        <Link href={project.repoUrl} target="_blank" rel="noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Repo
                        </Link>
                    </Button>

                    <Button asChild size="sm" variant="outline" className="flex-1 rounded-xl" disabled={!project.liveUrl}>
                        <Link href={project.liveUrl || "#"} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
}
