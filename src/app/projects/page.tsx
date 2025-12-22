"use client";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProjects } from "@/lib/projects"; 
import { useProjectsStore } from "@/store/projects-store"; 
import ProjectCard from "@/components/project-card";
import Skeleton from "./skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    const { q, tag, setQ, setTag, clear } = useProjectsStore();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["projects"],
        queryFn: fetchProjects
    });

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
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border bg-card/60 p-6 backdrop-blur"
            >
                <div className="space-y-2">
                    <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
                    <p className="text-sm text-muted-foreground">
                        UI/client projects from my GitHub (images + links).
                    </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-1 gap-2 md:max-w-xl">
                        <Input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search projects..."
                            className="rounded-xl"
                        />
                        <Button variant="outline" onClick={clear} className="rounded-xl">
                            Clear
                        </Button>
                    </div>

                    <div className="overflow-x-auto">
                        <Tabs value={tag} onValueChange={setTag}>
                            <TabsList className="w-max rounded-xl">
                                {tags.slice(0, 12).map((t) => (
                                    <TabsTrigger key={t} value={t} className="rounded-lg">
                                        {t}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>
                </div>
            </motion.div>

            {isError ? (
                <div className="rounded-2xl border bg-destructive/10 p-4 text-sm">
                    Failed to load <span className="font-semibold">/public/data/projects.json</span>. Make sure
                    it exists.
                </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {isLoading
                    ? Array.from({ length: 9 }).map((_, i) => <Skeleton key={i} />)
                    : filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
        </div>
    );
}
