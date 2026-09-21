import AppCard from "@/components/app/app-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
    return (
        <AppCard interactive={false} aria-busy="true">
            <div className="border-b-2 border-foreground bg-secondary p-4">
                <Skeleton className="aspect-16/10 w-full rounded-lg bg-foreground/10" />
            </div>
            <div className="space-y-4 p-5">
                <Skeleton className="h-7 w-2/3 bg-foreground/10" />
                <div className="space-y-2">
                    <Skeleton className="h-3.5 w-full bg-foreground/10" />
                    <Skeleton className="h-3.5 w-11/12 bg-foreground/10" />
                    <Skeleton className="h-3.5 w-3/4 bg-foreground/10" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-16 rounded-full bg-foreground/10" />
                    ))}
                </div>
                <div className="flex gap-2 pt-1">
                    <Skeleton className="h-9 flex-1 rounded-lg bg-foreground/10" />
                    <Skeleton className="h-9 flex-1 rounded-lg bg-foreground/10" />
                </div>
            </div>
        </AppCard>
    );
}
