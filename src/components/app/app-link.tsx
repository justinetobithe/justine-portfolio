import Link from "next/link";
import { isExternalHref, isProtocolHref } from "@/lib/url";
import { cn } from "@/lib/utils";

export default function AppLink({
    href,
    className,
    children,
    ...props
}: Omit<React.ComponentProps<"a">, "href"> & { href: string }) {
    const classes = cn(
        "text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline",
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
