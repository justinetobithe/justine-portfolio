export type Project = {
    id: string;
    name: string;
    repoUrl: string;
    liveUrl: string;
    prodUrls?: string[];
    description: string;
    tags: string[];
    images: string[];
};
 
export async function fetchProjects(): Promise<Project[]> {
    const res = await fetch("/data/projects.json", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to load projects");
    return res.json();
}
