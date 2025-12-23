"use client";

import { useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/lib/projects";
import { useProjectsStore } from "@/store/projects-store";
import ProjectCard from "@/components/project-card";
import Skeleton from "./skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useReducedMotion } from "framer-motion";

export default function ProjectsPage() {
    const { q, tag, setQ, setTag, clear } = useProjectsStore();
    const reduceMotion = useReducedMotion();

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
        const base = new Set<string>(["All"]);
        (data || []).forEach((p) => p.tags.forEach((t) => base.add(t)));
        return Array.from(base);
    }, [data]);

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return (data || []).filter((p) => {
            const matchesQ =
                !query ||
                p.name.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.tags.some((t) => t.toLowerCase().includes(query));

            const matchesTag = tag === "All" || p.tags.includes(tag);
            return matchesQ && matchesTag;
        });
    }, [data, q, tag]);

    return (
        <div className="space-y-6">
            <motion.section
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border bg-card/60 p-4 backdrop-blur sm:p-6"
            >
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
                    <p className="text-sm text-muted-foreground">UI/client projects from my GitHub (images + links).</p>
                </div>

                <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
                        <Input value={q} onChange={onChangeQ} placeholder="Search projects..." className="h-10 rounded-xl" />
                        <Button variant="outline" onClick={clear} className="h-10 rounded-xl sm:w-auto">
                            Clear
                        </Button>
                    </div>

                    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
                        <Tabs value={tag} onValueChange={setTag}>
                            <TabsList className="w-max gap-1 rounded-xl">
                                {tags.slice(0, 14).map((t) => (
                                    <TabsTrigger key={t} value={t} className="rounded-lg px-3 text-xs sm:text-sm">
                                        {t}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </motion.section>

            {isError ? (
                <div className="rounded-2xl border bg-destructive/10 p-4 text-sm">
                    Failed to load <span className="font-semibold">/public/data/projects.json</span>. Make sure it exists.
                </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, i) => <Skeleton key={i} />)
                    : filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
}
