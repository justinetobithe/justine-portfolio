"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Image as ImgIcon, Server } from "lucide-react";
import type { Project } from "@/lib/projects";
import { motion } from "framer-motion";

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

function IframePreview({
    url,
    className
}: {
    url: string;
    className?: string;
}) {
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
            onLoad={() => { }}
            onError={() => setBlocked(true)}
        />
    );
}

export default function ProjectCard({ project }: { project: Project }) {
    const img = project.images?.[0] || "";
    const showPreview = Boolean(project.liveUrl);
    const vercel = isVercel(project.liveUrl);
    const prod = isProdDomain(project.liveUrl);
    const host = domainLabel(project.liveUrl);

    const previewMode = useMemo(() => {
        if (!project.liveUrl) return "none";
        return "iframe";
    }, [project.liveUrl]);

    const [iframeFailed, setIframeFailed] = useState(false);

    useEffect(() => {
        setIframeFailed(false);
    }, [project.liveUrl]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
        >
            <Card className="group overflow-hidden rounded-2xl border bg-card/60 backdrop-blur transition-shadow hover:shadow-xl">
                {showPreview ? (
                    <div className="border-b bg-muted">
                        <div className="flex items-center justify-between gap-3 px-3 py-2">
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                                <span className="ml-2 text-xs text-muted-foreground">{host}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {prod ? (
                                    <Badge className="rounded-full" variant="secondary">
                                        <Server className="mr-1 h-3.5 w-3.5" />
                                        Production
                                    </Badge>
                                ) : null}

                                {vercel ? (
                                    <Badge className="rounded-full" variant="secondary">
                                        <Globe className="mr-1 h-3.5 w-3.5" />
                                        Hosted on Vercel
                                    </Badge>
                                ) : null}
                            </div>
                        </div>

                        <div className="relative h-44 w-full bg-muted">
                            {previewMode === "iframe" && !iframeFailed ? (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block h-full w-full"
                                >
                                    <div className="relative h-full w-full overflow-hidden">
                                        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                        <IframePreview
                                            url={project.liveUrl}
                                            className="absolute left-0 top-0 h-[520px] w-[1200px] origin-top-left scale-[0.37] rounded-md border bg-background"
                                        />

                                        <div
                                            className="absolute inset-0"
                                            onMouseEnter={() => { }}
                                            onMouseLeave={() => { }}
                                        />
                                    </div>
                                </a>
                            ) : img ? (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <img src={img} alt={project.name} className="h-full w-full object-cover" />
                                </a>
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                                    <ImgIcon className="h-6 w-6" />
                                </div>
                            )}

                            {previewMode === "iframe" ? (
                                <button
                                    type="button"
                                    onClick={() => setIframeFailed(true)}
                                    className="absolute right-3 top-3 rounded-full border bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
                                >
                                    Use Image
                                </button>
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
