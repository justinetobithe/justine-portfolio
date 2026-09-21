import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { isExternalHref, isProtocolHref } from "@/lib/url";
import { cn } from "@/lib/utils";

type AppButtonProps = Omit<React.ComponentProps<typeof Button>, "asChild"> & {
    href?: string;
    download?: string;
    icon?: LucideIcon;
    iconEnd?: LucideIcon;
};

export default function AppButton({
    href,
    download,
    icon: Icon,
    iconEnd: IconEnd,
    children,
    className,
    variant = "brand",
    size = "pill",
    disabled,
    ...props
}: AppButtonProps) {
    const classes = cn("group/btn", className);

    const content = (
        <>
            {Icon ? <Icon /> : null}
            {children}
            {IconEnd ? <IconEnd className="transition-transform group-hover/btn:translate-x-0.5" /> : null}
        </>
    );

    if (!href || disabled) {
        return (
            <Button variant={variant} size={size} className={classes} disabled={disabled} {...props}>
                {content}
            </Button>
        );
    }

    let link = <Link href={href}>{content}</Link>;

    if (download) {
        link = (
            <a href={href} download={download}>
                {content}
            </a>
        );
    } else if (isProtocolHref(href)) {
        link = <a href={href}>{content}</a>;
    } else if (isExternalHref(href)) {
        link = (
            <a href={href} target="_blank" rel="noreferrer">
                {content}
            </a>
        );
    }

    return (
        <Button variant={variant} size={size} className={classes} asChild {...props}>
            {link}
        </Button>
    );
}
