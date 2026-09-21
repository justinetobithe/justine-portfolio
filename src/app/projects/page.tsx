"use client";

import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, SearchX, X } from "lucide-react";
import { fetchProjects } from "@/lib/projects";
import { useProjectsStore } from "@/store/projects-store";
import ProjectCard from "@/components/project-card";
import Skeleton from "./skeleton";
import AppButton from "@/components/app/app-button";
import AppCard from "@/components/app/app-card";
import AppSectionHeading from "@/components/app/app-section-heading";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProjectsPage() {
    const { q, tag, setQ, setTag, clear } = useProjectsStore();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects,
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false
    });

    const onChangeQ = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
        [setQ]
    );

    const tags = useMemo(() => {
        const counts = new Map<string, number>();
        (data || []).forEach((p) => p.tags.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1)));
        const top = Array.from(counts.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 11)
            .map(([t]) => t);
        return ["All", ...top];
    }, [data]);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return (data || []).filter((p) => {
            const matchesQ =
                !query ||
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                (p.region || "").toLowerCase().includes(query) ||
                p.tags.some((t) => t.toLowerCase().includes(query));

            const matchesTag = tag === "All" || p.tags.includes(tag);
            return matchesQ && matchesTag;
        });
    }, [data, q, tag]);

    return (
        <div className="space-y-10">
            <AppSectionHeading
                eyebrow="Portfolio"
                title={
                    <>
                        All <span className="text-gradient">projects</span>
                    </>
                }
                description="Production e-commerce stores, custom CMS platforms, client portals and UI builds. Search or filter by stack, market or type."
            />

            <AppCard spotlight={false} className="rounded-2xl">
                <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center lg:max-w-md">
                        <div className="relative w-full">
                            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                                value={q}
                                onChange={onChangeQ}
                                placeholder="Search projects..."
                                aria-label="Search projects"
                                className="h-11 rounded-xl pl-10"
                            />
                        </div>
                        <AppButton variant="glass" size="default" icon={X} onClick={clear} className="h-11 rounded-xl">
                            Clear
                        </AppButton>
                    </div>

                    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                        <Tabs value={tag} onValueChange={setTag}>
                            <TabsList className="h-auto w-max gap-1 rounded-xl bg-white/5 p-1">
                                {tags.map((t) => (
                                    <TabsTrigger key={t} value={t} className="rounded-lg px-3 py-1.5 text-sm">
                                        {t}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </AppCard>

            {isError ? (
                <div className="rounded-2xl border border-destructive/40 bg-destructive/10 p-4 text-sm">
                    Failed to load <span className="font-semibold">/public/data/projects.json</span>. Make sure it exists.
                </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
                    : filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>

            {!isLoading && !isError && filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-white/15 py-16 text-center">
                    <SearchX className="h-8 w-8 text-muted-foreground" />
                    <p className="text-muted-foreground">No projects match your search.</p>
                    <AppButton variant="glass" size="default" onClick={clear}>
                        Reset filters
                    </AppButton>
                </div>
            ) : null}
        </div>
    );
}
