import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Skeleton() {
    return (
        <Card className="overflow-hidden rounded-2xl">
            <div className="h-44 w-full animate-pulse bg-muted" />
            <CardHeader className="space-y-3">
                <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                <div className="h-3 w-full animate-pulse rounded bg-muted" />
                <div className="h-3 w-5/6 animate-pulse rounded bg-muted" />
                <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="h-6 w-16 animate-pulse rounded-full bg-muted" />
                    ))}
                </div>
            </CardHeader>
            <CardContent className="flex gap-2">
                <div className="h-9 flex-1 animate-pulse rounded-xl bg-muted" />
                <div className="h-9 flex-1 animate-pulse rounded-xl bg-muted" />
            </CardContent>
        </Card>
    );
}
