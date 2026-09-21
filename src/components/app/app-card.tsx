import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AppCardProps = React.ComponentProps<typeof Card> & {
    interactive?: boolean;
};

export default function AppCard({ children, className, interactive = true, ...props }: AppCardProps) {
    return (
        <Card
            className={cn(
                "group/card relative gap-0 overflow-hidden rounded-2xl border-2 border-foreground bg-card py-0 shadow-hard",
                interactive &&
                    "transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg",
                className
            )}
            {...props}
        >
            {children}
        </Card>
    );
}
