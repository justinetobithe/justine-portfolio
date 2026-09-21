import { Asterisk } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Marquee({
    items,
    tone = "ink",
    reverse = false,
    className
}: {
    items: string[];
    tone?: "ink" | "sun";
    reverse?: boolean;
    className?: string;
}) {
    const row = (suffix: string) =>
        items.map((item) => (
            <li
                key={`${item}-${suffix}`}
                className="flex shrink-0 items-center gap-6 px-3 font-display text-xl font-bold uppercase tracking-tight sm:text-2xl"
            >
                {item}
                <Asterisk className={cn("h-6 w-6", tone === "ink" ? "text-sun" : "text-tomato")} strokeWidth={3} />
            </li>
        ));

    return (
        <div
            className={cn(
                "marquee overflow-hidden border-y-2 border-foreground py-3",
                tone === "ink" ? "bg-foreground text-background" : "bg-sun text-foreground",
                className
            )}
        >
            <ul className={cn("marquee-track flex w-max", reverse && "[animation-direction:reverse]")}>
                {row("a")}
                {row("b")}
            </ul>
        </div>
    );
}
