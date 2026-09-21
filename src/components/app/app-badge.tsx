import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type AppBadgeProps = React.ComponentProps<typeof Badge> & {
    icon?: LucideIcon;
};

export default function AppBadge({ icon: Icon, children, className, variant = "secondary", ...props }: AppBadgeProps) {
    return (
        <Badge variant={variant} className={cn("px-3 py-1 text-xs", className)} {...props}>
            {Icon ? <Icon /> : null}
            {children}
        </Badge>
    );
}
