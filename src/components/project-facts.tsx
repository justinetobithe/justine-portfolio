import type { ProjectFact } from "@/lib/projects";

export default function ProjectFacts({ facts }: { facts: ProjectFact[] }) {
    return (
        <dl className="grid grid-cols-2 gap-x-5 gap-y-3 border-y-2 border-foreground py-4 sm:grid-cols-4">
            {facts.map((f) => (
                <div key={f.label} className="space-y-0.5">
                    <dd className="font-display text-2xl font-extrabold leading-none tracking-tight">{f.value}</dd>
                    <dt className="font-mono text-[10px] font-medium uppercase leading-tight tracking-wider text-muted-foreground">
                        {f.label}
                    </dt>
                </div>
            ))}
        </dl>
    );
}
