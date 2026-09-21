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
        <div className={cn("overflow-hidden rounded-lg border-2 border-foreground bg-card", className)}>
            <div className="flex items-center gap-2 border-b-2 border-foreground bg-secondary px-3 py-1.5">
                <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full border border-foreground bg-tomato" />
                    <span className="h-2.5 w-2.5 rounded-full border border-foreground bg-sun" />
                    <span className="h-2.5 w-2.5 rounded-full border border-foreground bg-sage" />
                </div>
                <div className="min-w-0 flex-1 truncate rounded border border-foreground/30 bg-card px-2 py-0.5 text-center font-mono text-[11px]">
                    {host || "preview"}
                </div>
            </div>
            {children}
        </div>
    );
}
