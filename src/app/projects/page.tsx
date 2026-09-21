"use client";

import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Search, SearchX, X } from "lucide-react";
import { fetchProjects } from "@/lib/projects";
import { useProjectsStore } from "@/store/projects-store";
import ProjectCard from "@/components/project-card";
import Skeleton from "./skeleton";
import AppButton from "@/components/app/app-button";
import AppSectionHeading, { Mark } from "@/components/app/app-section-heading";
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
        <div className="space-y-10 md:space-y-12">
            <AppSectionHeading
                index="00"
                eyebrow="Portfolio"
                title={
                    <>
                        Everything I&apos;ve <Mark>shipped</Mark>
                    </>
                }
                description="Production stores, custom CMS platforms, client portals and UI builds. Search, filter by stack or market, and open Details for the full picture."
            />

            <div className="space-y-4 rounded-2xl border-2 border-foreground bg-card p-4 shadow-hard sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="relative w-full">
                        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2" />
                        <Input
                            value={q}
                            onChange={onChangeQ}
                            placeholder="Search by name, stack or country..."
                            aria-label="Search projects"
                            className="h-11 rounded-lg border-2 bg-background pl-10"
                        />
                    </div>
                    <AppButton variant="paper" size="default" icon={X} onClick={clear} className="h-11 rounded-lg sm:w-auto">
                        Clear
                    </AppButton>
                </div>

                <Tabs value={tag} onValueChange={setTag}>
                    <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
                        {tags.map((t) => (
                            <TabsTrigger
                                key={t}
                                value={t}
                                className="flex-none rounded-full border-2 border-foreground bg-background px-3.5 py-1 text-sm font-semibold data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none"
                            >
                                {t}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                {!isLoading ? (
                    <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        Showing {filtered.length} of {data?.length ?? 0} projects
                    </div>
                ) : null}
            </div>

            {isError ? (
                <div className="rounded-2xl border-2 border-destructive bg-card p-4 text-sm">
                    Failed to load <span className="font-semibold">/public/data/projects.json</span>. Make sure it exists.
                </div>
            ) : null}

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
                    : filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>

            {!isLoading && !isError && filtered.length === 0 ? (
                <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-foreground py-16 text-center">
                    <SearchX className="h-8 w-8" />
                    <p className="text-muted-foreground">No projects match your search.</p>
                    <AppButton variant="paper" size="default" onClick={clear}>
                        Reset filters
                    </AppButton>
                </div>
            ) : null}
        </div>
    );
}
