import { ReactNode } from "react";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Mark({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <span className={cn("inline-block -rotate-1 bg-sun px-2 sm:px-3", className)}>{children}</span>
    );
}

export default function AppSectionHeading({
    index,
    eyebrow,
    title,
    description,
    action,
    className
}: {
    index: string;
    eyebrow: string;
    title: ReactNode;
    description?: string;
    action?: ReactNode;
    className?: string;
}) {
    return (
        <Reveal>
            <div className={cn("flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between", className)}>
                <div className="max-w-2xl space-y-4">
                    <div className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.18em]">
                        <span className="grid h-7 min-w-7 place-items-center rounded-full border-2 border-foreground bg-sun px-1.5 font-bold">
                            {index}
                        </span>
                        {eyebrow}
                        <span className="h-0.5 w-10 bg-foreground" />
                    </div>
                    <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">{title}</h2>
                    {description ? (
                        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
                    ) : null}
                </div>
                {action}
            </div>
        </Reveal>
    );
}
