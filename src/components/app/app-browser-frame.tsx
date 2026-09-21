import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function AppBrowserFrame({
    host,
    children,
    className
}: {
    host?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/40", className)}>
            <div className="flex items-center gap-3 border-b border-white/10 bg-white/4 px-3 py-2">
                <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="min-w-0 flex-1 truncate rounded-md bg-black/30 px-3 py-1 text-center text-xs text-muted-foreground">
                    {host || "preview"}
                </div>
                <div className="w-10" />
            </div>
            {children}
        </div>
    );
}
