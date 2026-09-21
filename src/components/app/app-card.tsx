"use client";

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AppCardProps = React.ComponentProps<typeof Card> & {
    glow?: string;
    spotlight?: boolean;
};

export default function AppCard({
    children,
    className,
    glow = "rgba(139, 92, 246, 0.2)",
    spotlight = true,
    onPointerMove,
    ...props
}: AppCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        onPointerMove?.(e);
        const node = ref.current;
        if (!node || !spotlight) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        node.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    return (
        <Card
            ref={ref}
            onPointerMove={handleMove}
            className={cn(
                "group/spot relative gap-0 overflow-hidden rounded-3xl border-white/10 bg-white/4.5 py-0 shadow-none backdrop-blur-xl transition-colors duration-300 hover:border-white/25",
                className
            )}
            {...props}
        >
            {spotlight ? (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
                    style={{
                        background: `radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), ${glow}, transparent 60%)`
                    }}
                />
            ) : null}
            <div className="relative flex h-full flex-col">{children}</div>
        </Card>
    );
}
