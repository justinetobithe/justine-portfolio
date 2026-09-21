import AppCard from "@/components/app/app-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedSkeleton({ count = 2 }: { count?: number }) {
    return (
        <div className="space-y-8" aria-busy="true" aria-label="Loading featured projects">
            {Array.from({ length: count }).map((_, i) => (
                <AppCard key={i} spotlight={false} className="p-4 sm:p-6 lg:p-8">
                    <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                        <Skeleton className="aspect-16/10 w-full rounded-2xl" />
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <Skeleton className="h-4 w-8" />
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-6 w-24 rounded-full" />
                            </div>
                            <Skeleton className="h-9 w-2/3" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-11/12" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-4/5" />
                                <Skeleton className="h-4 w-2/3" />
                                <Skeleton className="h-4 w-3/4" />
                            </div>
                            <div className="flex gap-2">
                                <Skeleton className="h-7 w-20 rounded-full" />
                                <Skeleton className="h-7 w-20 rounded-full" />
                            </div>
                            <Skeleton className="h-11 w-48 rounded-full" />
                        </div>
                    </div>
                </AppCard>
            ))}
        </div>
    );
}
