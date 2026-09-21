import AppCard from "@/components/app/app-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectCardSkeleton() {
    return (
        <AppCard spotlight={false} aria-busy="true">
            <div className="p-3">
                <Skeleton className="aspect-16/10 w-full rounded-2xl" />
            </div>
            <div className="space-y-4 px-5 pb-5 pt-2">
                <Skeleton className="h-6 w-2/3" />
                <div className="space-y-2">
                    <Skeleton className="h-3.5 w-full" />
                    <Skeleton className="h-3.5 w-11/12" />
                    <Skeleton className="h-3.5 w-3/4" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-16 rounded-full" />
                    ))}
                </div>
                <div className="flex gap-2 pt-1">
                    <Skeleton className="h-9 flex-1 rounded-xl" />
                    <Skeleton className="h-9 flex-1 rounded-xl" />
                </div>
            </div>
        </AppCard>
    );
}
