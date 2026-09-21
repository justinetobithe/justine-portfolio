import { ReactNode } from "react";
import Reveal from "@/components/reveal";
import { cn } from "@/lib/utils";

export default function AppSectionHeading({
    eyebrow,
    title,
    description,
    action,
    className
}: {
    eyebrow: string;
    title: ReactNode;
    description?: string;
    action?: ReactNode;
    className?: string;
}) {
    return (
        <Reveal>
            <div className={cn("flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
                <div className="max-w-2xl space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                        <span className="h-px w-8 bg-linear-to-r from-violet-400 to-cyan-300" />
                        {eyebrow}
                    </div>
                    <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
                    {description ? <p className="text-base leading-relaxed text-muted-foreground">{description}</p> : null}
                </div>
                {action}
            </div>
        </Reveal>
    );
}
