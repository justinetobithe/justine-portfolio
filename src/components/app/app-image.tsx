"use client";

import { ReactNode, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function AppImage({
    className,
    imgClassName,
    alt,
    fallback,
    onLoad,
    onError,
    ...props
}: React.ComponentProps<"img"> & { alt: string; imgClassName?: string; fallback?: ReactNode }) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    if (failed && fallback) return <>{fallback}</>;

    return (
        <div className={cn("relative overflow-hidden", className)}>
            {!loaded ? <Skeleton className="absolute inset-0 rounded-none" /> : null}
            <img
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={(e) => {
                    setLoaded(true);
                    onLoad?.(e);
                }}
                onError={(e) => {
                    setFailed(true);
                    onError?.(e);
                }}
                {...props}
                className={cn(
                    "h-full w-full object-cover object-top transition-[opacity,transform] duration-500",
                    loaded ? "opacity-100" : "opacity-0",
                    imgClassName
                )}
            />
        </div>
    );
}
