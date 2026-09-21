import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedSkeleton({ count = 2 }: { count?: number }) {
    return (
        <div className="space-y-10 sm:space-y-14" aria-busy="true" aria-label="Loading featured projects">
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className="overflow-hidden rounded-3xl border-2 border-foreground bg-card shadow-hard-lg"
                >
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="border-b-2 border-foreground bg-secondary p-5 sm:p-8 lg:border-b-0 lg:border-r-2 lg:p-10">
                            <Skeleton className="aspect-16/10 w-full rounded-lg bg-foreground/10" />
                        </div>
                        <div className="space-y-5 p-6 sm:p-8 lg:p-10">
                            <div className="flex gap-2">
                                <Skeleton className="h-6 w-28 rounded-full bg-foreground/10" />
                                <Skeleton className="h-6 w-20 rounded-full bg-foreground/10" />
                            </div>
                            <Skeleton className="h-11 w-2/3 bg-foreground/10" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full bg-foreground/10" />
                                <Skeleton className="h-4 w-11/12 bg-foreground/10" />
                                <Skeleton className="h-4 w-3/4 bg-foreground/10" />
                            </div>
                            <div className="space-y-3">
                                <Skeleton className="h-4 w-4/5 bg-foreground/10" />
                                <Skeleton className="h-4 w-2/3 bg-foreground/10" />
                                <Skeleton className="h-4 w-3/4 bg-foreground/10" />
                            </div>
                            <div className="flex gap-3">
                                <Skeleton className="h-11 w-44 rounded-full bg-foreground/10" />
                                <Skeleton className="h-11 w-28 rounded-full bg-foreground/10" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
