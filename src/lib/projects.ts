export type Project = {
    id: string;
    name: string;
    repoUrl: string;
    liveUrl: string;
    prodUrls?: string[];
    vercelUrls?: string[];
    description: string;
    tags: string[];
    images: string[];
    featured?: boolean;
    category?: string;
    region?: string;
    regionCode?: string;
    highlights?: string[];
    stack?: string[];
    scope?: string[];
    top?: boolean;
    community?: boolean;
    tagline?: string;
    overview?: string[];
    features?: string[];
    facts?: ProjectFact[];
    steps?: ProjectStep[];
    hosting?: string;
    notice?: string;
};

export type ProjectFact = { value: string; label: string };

export type ProjectStep = { title: string; text: string };

export async function fetchProjects(): Promise<Project[]> {
    const res = await fetch("/data/projects.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load projects");
    return res.json();
}
