import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AppBadgeProps = React.ComponentProps<typeof Badge> & {
    icon?: LucideIcon;
};

export default function AppBadge({ icon: Icon, children, className, variant = "paper", ...props }: AppBadgeProps) {
    return (
        <Badge
            variant={variant}
            className={cn("border-2 px-2.5 py-0.5 font-mono text-[11px] font-medium uppercase tracking-wide", className)}
            {...props}
        >
            {Icon ? <Icon /> : null}
            {children}
        </Badge>
    );
}
