import Link from "next/link";
import { isExternalHref, isProtocolHref } from "@/lib/url";
import { cn } from "@/lib/utils";

type AppLinkProps = Omit<React.ComponentProps<"a">, "href"> & {
    href: string;
    tone?: "light" | "dark";
};

export default function AppLink({ href, tone = "light", className, children, ...props }: AppLinkProps) {
    const classes = cn(
        "underline decoration-2 underline-offset-4 transition-colors",
        tone === "dark" ? "hover:text-sun hover:decoration-sun" : "hover:bg-sun",
        className
    );

    if (isProtocolHref(href)) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    if (isExternalHref(href)) {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={classes} {...props}>
            {children}
        </Link>
    );
}
